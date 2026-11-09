![ThermoMatrix Card](assets/thermomatrix-banner.png)

<div align="center">

[![Status](https://img.shields.io/badge/status-stable-2EA44F?style=flat-square)](#project-status)
[![Home Assistant](https://img.shields.io/badge/Home%20Assistant-dashboard-41BDF5?style=flat-square&logo=homeassistant&logoColor=white)](https://www.home-assistant.io/)
[![Marketplace](https://img.shields.io/badge/Home%20Assistant-Marketplace-C346F4?style=flat-square)](https://contributors.home-assistant.io/marketplace/)
[![License](https://img.shields.io/badge/license-MIT-C346F4?style=flat-square)](https://github.com/issu-lab/thermomatrix-card/blob/main/LICENSE)

**An LCD-inspired climate card for Home Assistant.**

ThermoMatrix provides a clear climate control interface with seven-segment temperatures, automatic HVAC controls, presets and optional power monitoring.

</div>

---

## Project Status

| Field | Current state |
|---|---|
| **Maturity** | 🟢 Stable |
| **Used in my homelab** | ✅ Yes |
| **Recommended for production** | ✅ Yes |
| **Setup difficulty** | 🟢 Beginner |
| **Documentation** | ✅ Complete |
| **Current version** | `1.5.0` |

> [!NOTE]
> **Beginner setup:** on Home Assistant 2026.11 or later, installation is handled by Marketplace. After adding the custom repository, select a climate entity in the visual card editor.

> [!NOTE]
> Version 1.5.0 prepares ThermoMatrix for Home Assistant 2026.11 Marketplace, updates card suggestions to the current Home Assistant API and adds standard or large LCD sizing plus an optional classic green LCD theme. ThermoPilot status autodiscovery and manual overrides remain supported.

---

## Why It Exists

ThermoMatrix was created for my own Home Assistant dashboards. I wanted a climate card that was compact, easy to read and visually different from standard controls.

The card is built for daily use first, then shared so other Home Assistant users can install and adapt it.

---

## Features

- 🌡️ Seven-segment room and target temperatures.
- 🔄 HVAC buttons generated automatically from the entity's `hvac_modes`.
- 🎛️ Automatic preset controls that can be disabled.
- 🟢 LCD-style `ON`, `IDLE` and `OFF` indicators.
- 🎞️ Optional mechanical wheel status display.
- ⚡ Optional power monitoring integrated into the compact lower LCD row.
- 📋 Optional extended status from a separate entity.
- 🔎 Automatic discovery of the unified ThermoPilot status sensor on the climate device.
- 🎨 Dynamic or neutral borders.
- 🌓 Automatic light and vivid state-aware dark theme support.
- 🌍 Automatic Home Assistant language detection.
- 🖱️ Visual configuration editor.
- ♿ Accessible labels, tooltips and reduced-motion support.

---

## Interface

The gallery below shows the current card in real Home Assistant dashboards with light and dark themes.

![ThermoMatrix Card in Home Assistant](assets/thermomatrix-gallery.png)

---

## Installation with Home Assistant Marketplace

ThermoMatrix is installed as a custom dashboard repository in Home Assistant Marketplace. Manual copying of the JavaScript file is not required.

<div align="center">

[![Open your Home Assistant instance and add ThermoMatrix Card to Marketplace.](https://my.home-assistant.io/badges/marketplace_repository.svg)](https://my.home-assistant.io/redirect/marketplace_repository/?owner=issu-lab&repository=thermomatrix-card&category=plugin)

</div>

The button opens ThermoMatrix Card directly as a custom dashboard repository in Marketplace. Alternatively, add it manually:

1. Open **Marketplace** in Home Assistant.
2. Open the menu in the top-right corner.
3. Select **Custom repositories**.
4. Add this repository URL:

```text
https://github.com/issu-lab/thermomatrix-card
```

5. Select **Dashboard** as the repository type. Depending on the interface language or HACS version, it may appear as **Plancia** or use the older name **Plugin**.
6. Select **Add**.
7. Search for **ThermoMatrix Card** in Marketplace.
8. Open it and select **Download**.
9. Refresh the Home Assistant browser page after installation.

Marketplace manages the dashboard resource automatically.

> [!TIP]
> On Home Assistant versions before 2026.11, add the same URL to HACS as a custom **Dashboard** repository. The package remains compatible with the established HACS format.

> [!TIP]
> Marketplace repository requirements are documented in the official [Home Assistant dashboard repository guide](https://contributors.home-assistant.io/marketplace/guides/dashboard/).

---

## Add the Card

1. Open a Home Assistant dashboard.
2. Enter dashboard edit mode.
3. Select **Add card**.
4. Search for **ThermoMatrix Card**.
5. Select the climate entity and, optionally, enter a custom name. All other settings are available in the collapsed **Advanced** panel.

A minimal YAML configuration is also available:

```yaml
type: custom:thermomatrix-card
entity: climate.living_room
```

---

## Configuration Example

```yaml
type: custom:thermomatrix-card
entity: climate.living_room
show_presets: true
show_consumption: false
show_climate_status: true
show_advanced_status: false
border_mode: state
temperature_step: 0.1
language: en
hvac_button_labels: hide
preset_button_labels: hide
status_display: indicators
display_font: lcd
display_size: standard
display_theme: state
tap_action:
  action: none
```

The visual editor keeps only **Climate entity** and **Custom name** visible initially. The following options remain available in its collapsed **Advanced** panel and through YAML.

### Configuration options

| Option | Purpose |
|---|---|
| `entity` | Climate entity controlled by the card. |
| `show_presets` | Shows presets reported by the climate entity. |
| `show_consumption` | Enables the optional power module. |
| `power_entity` | Optional power-sensor override. ThermoPilot can provide numeric power through its discovered status sensor. |
| `status_entity` | Optional manual override for translated extended operating states. |
| `show_climate_status` | Shows the standard `ON`, `IDLE` or `OFF` status. |
| `show_advanced_status` | Shows the advanced status in the compact lower row when `status_entity` is configured. |
| `border_mode` | Uses a state-based or neutral border. |
| `temperature_step` | Temperature adjustment step. |
| `language` | Uses automatic or manually selected translations. |
| `hvac_button_labels` | Controls HVAC button text visibility. |
| `preset_button_labels` | Controls preset button text visibility. |
| `status_display` | Selects the mechanical wheel or LCD indicators. |
| `display_font` | Selects the original LCD, condensed or monospace display style. |
| `display_size` | Selects the standard layout or a larger LCD for tablets and wall displays. |
| `display_theme` | Selects state-colored LCD backgrounds or a fixed classic green LCD. |
| `tap_action` | Enables an optional action when the LCD display is tapped. |

---

## Responsive Button Labels

HVAC and preset labels can be configured independently:

```yaml
hvac_button_labels: auto
preset_button_labels: auto
```

Available values:

- `auto` — shows the icon and text when they fit, otherwise keeps only the icon.
- `show` — always shows both icon and text.
- `hide` — shows only the icon.

The complete name remains available as a tooltip and accessible label.

---

## Display tap action

The display does nothing when tapped by default. Enable **Display tap action** in the Advanced panel, or use YAML, to open the climate entity's Home Assistant more-info dialog:

```yaml
tap_action:
  action: more-info
```

The LCD becomes keyboard accessible when this action is enabled. Pressing Enter or Space opens the same dialog.

---

## Status Display

The default `indicators` display keeps the three compact `ON`, `IDLE` and `OFF` boxes. The active `ON` or `IDLE` label blinks as before.

The mechanical alphabet wheel remains available as an optional legacy style:

```yaml
status_display: wheel
```

Available values are `wheel` and `indicators`.

The standard climate status and the optional advanced status can be shown independently or together. With ThermoPilot 0.3.0 or later, enable the advanced status without specifying a sensor:

```yaml
type: custom:thermomatrix-card
entity: climate.living_room
show_advanced_status: true
```

ThermoMatrix reads the Home Assistant entity registry, finds the device associated with the configured climate entity and selects a sensor on the same device only when exactly one candidate exposes `thermopilot_role: status`. No candidate or multiple candidates leave the optional row hidden. The result is cached and refreshed when the climate, Home Assistant connection or entity registry changes.

`status_entity` remains available as an explicit override and always takes precedence:

```yaml
type: custom:thermomatrix-card
entity: climate.living_room
status_entity: sensor.climate_status
show_climate_status: true
show_advanced_status: true
```

Set either selector to `false` to hide that part of the display. When both are enabled, the three essential status boxes remain between the temperatures while the translated advanced state appears in the compact lower row. Its animation runs only when the value changes and is disabled when reduced motion is requested.

The unified ThermoPilot states `initializing`, `degraded`, `error`, `off`, `on`, `starting`, `stopping`, `waiting`, `retrying` and `unknown` have compact translations in all six supported languages. Existing values such as `online`, `idle`, `cooling`, `heating` and `drying` remain supported for manually configured sensors. Unknown values remain available through a humanized fallback.

When the sensor exposes `state_quality`, confirmed values retain the normal emphasis while estimated physical state is shown with a subtle reduction in intensity. The localized quality remains available in the status tooltip and accessible label.

### Display font

Values can use one of three display styles:

```yaml
display_font: lcd
```

- `lcd` — original seven-segment temperatures and power values.
- `condensed` — compact proportional values.
- `mono` — technical monospaced values.

### Display size and theme

The default `standard` size preserves the original card proportions. Select
`large` for a taller LCD with larger current and target temperatures on tablets,
wall panels and wide dashboard views:

```yaml
display_size: large
```

All three display fonts remain available in both sizes. The optional classic
theme keeps a fixed old-style green LCD while the state-colored card border and
active power button continue to behave normally:

```yaml
display_theme: classic_green
border_mode: state
```

Available display themes are `state` and `classic_green`.

### Recommended companion: ThermoPilot

[ThermoPilot](https://github.com/issu-lab/thermopilot) is a native Home Assistant climate controller designed to work especially well with ThermoMatrix. From ThermoPilot 0.3.0, ThermoMatrix can discover its unified status sensor automatically through the shared Home Assistant device and use it for advanced state and optional numeric power. Manual `status_entity` and `power_entity` overrides remain supported.

ThermoPilot is optional: ThermoMatrix remains compatible with any Home Assistant `climate` entity.

---

## Power Monitoring

Enable the optional consumption module with a compatible power sensor:

```yaml
type: custom:thermomatrix-card
entity: climate.living_room
show_consumption: true
power_entity: sensor.climate_power
border_mode: state
```

Power shares the compact lower row with the advanced status. It is hidden automatically when the configured sensor does not exist, and the whole lower row disappears when neither optional module is available.

With an autodiscovered ThermoPilot 0.3.0 status sensor, `power_entity` may be omitted:

```yaml
type: custom:thermomatrix-card
entity: climate.living_room
show_consumption: true
```

Power is rendered only when the selected power entity state or the discovered sensor's `power` attribute is numeric.

---

## Languages

The default value is:

```yaml
language: en
```

Set `language: auto` to follow the Home Assistant profile language. The default language and fallback are English.

Included translations:

- English
- Italian
- Spanish
- French
- German
- Portuguese

A language can also be selected manually:

```yaml
language: it
```

Supported values are `auto`, `en`, `it`, `es`, `fr`, `de` and `pt`.

---

## Development

```shell
npm install
npm run build
```

The Home Assistant Marketplace and HACS distributable is generated at:

```text
dist/thermomatrix-card.js
```

---

## Known Limitations

- Additional customization options may be introduced in future releases.
- ThermoMatrix is not yet in the default Marketplace catalog, so it must be added through the direct button or as a custom repository.
- Automated checks cover packaging, card suggestions and a reproducible build; live validation still depends on the Home Assistant version in use.
- The visual result depends on the features exposed by the selected climate entity.

---

## License

Released under the [MIT License](https://github.com/issu-lab/thermomatrix-card/blob/main/LICENSE).

---

<div align="center">

This project is part of the **iSSU Open Homelab ecosystem**.

<a href="https://github.com/issu-lab/Open-Homelab">
  <img src="https://raw.githubusercontent.com/issu-lab/thermomatrix-card/main/assets/issu-open-homelab-badge.png"
       alt="Explore iSSU Open Homelab"
       width="480">
</a>

</div>
