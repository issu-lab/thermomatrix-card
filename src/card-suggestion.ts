export interface ThermoMatrixEntitySuggestion {
  config: {
    type: "custom:thermomatrix-card";
    entity: string;
    show_presets: true;
    border_mode: "state";
  };
}

export function getThermoMatrixEntitySuggestion(
  entityId: string,
): ThermoMatrixEntitySuggestion | null {
  if (!entityId.startsWith("climate.")) {
    return null;
  }

  return {
    config: {
      type: "custom:thermomatrix-card",
      entity: entityId,
      show_presets: true,
      border_mode: "state",
    },
  };
}
