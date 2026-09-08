export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  themes?: {
    darkMode?: boolean;
  };
  locale?: {
    language?: string;
  };
  callService(
    domain: string,
    service: string,
    data?: Record<string, unknown>,
  ): Promise<unknown>;
  callWS<T>(message: Record<string, unknown>): Promise<T>;
  connection?: {
    subscribeEvents<T>(
      callback: (event: T) => void,
      eventType: string,
    ): Promise<() => void>;
  };
}

export type BorderMode = "state" | "neutral";
export type ButtonLabelMode = "auto" | "show" | "hide";
export type StatusDisplayMode = "wheel" | "indicators";
export type DisplayFont = "lcd" | "condensed" | "mono";

export interface TapActionConfig {
  action: "more-info" | "none";
}

export interface ThermoMatrixConfig {
  type: string;
  entity: string;
  name?: string;
  show_presets?: boolean;
  show_consumption?: boolean;
  power_entity?: string;
  status_entity?: string;
  show_climate_status?: boolean;
  show_advanced_status?: boolean;
  language?: "auto" | "en" | "it" | "es" | "fr" | "de" | "pt";
  border_mode?: BorderMode;
  hvac_button_labels?: ButtonLabelMode;
  preset_button_labels?: ButtonLabelMode;
  status_display?: StatusDisplayMode;
  display_font?: DisplayFont;
  temperature_step?: number;
  tap_action?: TapActionConfig;
}

declare global {
  interface Window {
    customCards?: Array<Record<string, unknown>>;
  }
}
