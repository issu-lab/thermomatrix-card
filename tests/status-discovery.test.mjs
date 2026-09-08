import assert from "node:assert/strict";
import test from "node:test";

import {
  discoverThermoPilotStatusEntity,
  selectNumericPower,
  selectStatusEntity,
  StatusDiscoveryCache,
} from "../src/status-discovery.ts";

const climate = (entity_id, device_id) => ({ entity_id, device_id });
const sensor = (entity_id, device_id) => ({ entity_id, device_id });
const statusState = (role = "status") => ({
  attributes: { thermopilot_role: role },
});

test("manual status entity always takes precedence", () => {
  assert.equal(
    selectStatusEntity("sensor.manual", "sensor.discovered"),
    "sensor.manual",
  );
});

test("discovers the unique ThermoPilot status sensor on the climate device", () => {
  const registry = [
    climate("climate.office", "device-a"),
    sensor("sensor.office_status", "device-a"),
  ];
  const states = { "sensor.office_status": statusState() };
  assert.equal(
    discoverThermoPilotStatusEntity("climate.office", registry, states),
    "sensor.office_status",
  );
});

test("returns no candidate when the device has no ThermoPilot status sensor", () => {
  const registry = [climate("climate.office", "device-a")];
  assert.equal(
    discoverThermoPilotStatusEntity("climate.office", registry, {}),
    null,
  );
});

test("does not choose arbitrarily between multiple candidates", () => {
  const registry = [
    climate("climate.office", "device-a"),
    sensor("sensor.status_one", "device-a"),
    sensor("sensor.status_two", "device-a"),
  ];
  const states = {
    "sensor.status_one": statusState(),
    "sensor.status_two": statusState(),
  };
  assert.equal(
    discoverThermoPilotStatusEntity("climate.office", registry, states),
    null,
  );
});

test("changing climate invalidates the cached lookup key", () => {
  const cache = new StatusDiscoveryCache();
  const connection = {};
  cache.set("climate.office", connection, "sensor.office_status");
  assert.equal(
    cache.get("climate.office", connection),
    "sensor.office_status",
  );
  assert.equal(cache.get("climate.bedroom", connection), undefined);
});

test("changing connection or invalidating the registry cache forces discovery", () => {
  const cache = new StatusDiscoveryCache();
  const firstConnection = {};
  cache.set("climate.office", firstConnection, "sensor.office_status");
  assert.equal(cache.get("climate.office", {}), undefined);
  cache.invalidate();
  assert.equal(cache.get("climate.office", firstConnection), undefined);
});

test("ignores sensors without the ThermoPilot discovery marker", () => {
  const registry = [
    climate("climate.office", "device-a"),
    sensor("sensor.generic_status", "device-a"),
  ];
  const states = { "sensor.generic_status": statusState("diagnostics") };
  assert.equal(
    discoverThermoPilotStatusEntity("climate.office", registry, states),
    null,
  );
});

test("shows only numeric power and preserves the configured override", () => {
  assert.equal(selectNumericPower("123.4", 50, true), 123.4);
  assert.equal(selectNumericPower("unknown", 50, true), undefined);
  assert.equal(selectNumericPower(undefined, 50, false), 50);
  assert.equal(selectNumericPower(undefined, "", false), undefined);
});
