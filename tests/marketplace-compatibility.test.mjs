import assert from "node:assert/strict";
import test from "node:test";

import { getThermoMatrixEntitySuggestion } from "../src/card-suggestion.ts";

test("suggests a complete Home Assistant card config for climate entities", () => {
  assert.deepEqual(getThermoMatrixEntitySuggestion("climate.office"), {
    config: {
      type: "custom:thermomatrix-card",
      entity: "climate.office",
      show_presets: true,
      border_mode: "state",
    },
  });
});

test("does not suggest ThermoMatrix for unrelated entities", () => {
  assert.equal(getThermoMatrixEntitySuggestion("sensor.office"), null);
});
