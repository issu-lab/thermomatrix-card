export interface EntityRegistryEntry {
  entity_id: string;
  device_id?: string | null;
}

export interface DiscoverableEntityState {
  attributes: Record<string, unknown>;
}

export function discoverThermoPilotStatusEntity(
  climateEntity: string,
  registry: readonly EntityRegistryEntry[],
  states: Record<string, DiscoverableEntityState | undefined>,
): string | null {
  const climate = registry.find((entry) => entry.entity_id === climateEntity);
  if (!climate?.device_id) {
    return null;
  }

  const candidates = registry.filter((entry) =>
    entry.device_id === climate.device_id &&
    entry.entity_id.startsWith("sensor.") &&
    states[entry.entity_id]?.attributes.thermopilot_role === "status"
  );

  return candidates.length === 1 ? candidates[0].entity_id : null;
}

export function selectStatusEntity(
  configuredEntity: string | undefined,
  discoveredEntity: string | null | undefined,
): string | undefined {
  return configuredEntity || discoveredEntity || undefined;
}

function finiteNumber(value: unknown): number | undefined {
  if (
    value === null ||
    value === undefined ||
    (typeof value === "string" && value.trim() === "")
  ) {
    return undefined;
  }
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : undefined;
}

export function selectNumericPower(
  configuredPowerState: unknown,
  discoveredPower: unknown,
  hasConfiguredOverride: boolean,
): number | undefined {
  return finiteNumber(
    hasConfiguredOverride ? configuredPowerState : discoveredPower,
  );
}

export class StatusDiscoveryCache {
  private _climateEntity?: string;
  private _connection?: unknown;
  private _result?: string | null;

  public get(climateEntity: string, connection: unknown): string | null | undefined {
    return this._climateEntity === climateEntity && this._connection === connection
      ? this._result
      : undefined;
  }

  public set(
    climateEntity: string,
    connection: unknown,
    result: string | null,
  ): void {
    this._climateEntity = climateEntity;
    this._connection = connection;
    this._result = result;
  }

  public invalidate(): void {
    this._climateEntity = undefined;
    this._connection = undefined;
    this._result = undefined;
  }
}
