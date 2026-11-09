import { css } from "lit";

export const thermoMatrixStyles = css`
  :host {
    display: block;
    --tm-heat: #f97316;
    --tm-cool: #1d4ed8;
    --tm-dry: #10b981;
    --tm-fan: #0891b2;
    --tm-off: #94a3b8;
    --tm-neutral-border: rgba(156, 163, 175, 0.45);
    color: var(--primary-text-color);
  }

  ha-card {
    min-height: 420px;
    padding: 18px 20px;
    overflow: hidden;
    border: 2px solid var(--tm-border-color, var(--tm-neutral-border));
    border-radius: 18px;
    box-shadow: var(--tm-card-shadow, 0 4px 14px rgba(0, 0, 0, 0.1));
    box-sizing: border-box;
    background: var(--ha-card-background, var(--card-background-color));
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .layout {
    display: flex;
    min-height: 380px;
    flex-direction: column;
    gap: 10px;
  }

  .button-grid {
    display: grid;
    grid-template-columns: repeat(var(--columns, 1), minmax(0, 1fr));
    gap: 8px;
  }

  button {
    position: relative;
    min-width: 0;
    min-height: 50px;
    padding: 7px 8px;
    border: 2px solid var(--tm-neutral-border);
    border-radius: 14px;
    box-sizing: border-box;
    color: var(--primary-text-color);
    background: transparent;
    font: inherit;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease,
      box-shadow 0.2s ease, transform 0.1s ease;
  }

  button:active {
    transform: scale(0.97);
  }

  button.active {
    border-color: var(--button-color);
    background: color-mix(in srgb, var(--button-color) 38%, transparent);
    box-shadow: 0 0 15px
      color-mix(in srgb, var(--button-color) 55%, transparent);
  }

  ha-card.dark button {
    border-color: rgba(148, 163, 184, 0.38);
    background: rgba(255, 255, 255, 0.025);
  }

  ha-card.dark button.active {
    border-color: color-mix(in srgb, var(--button-color) 82%, white);
    color: #ffffff;
    background: linear-gradient(
      145deg,
      color-mix(in srgb, var(--button-color) 74%, #0b1020),
      color-mix(in srgb, var(--button-color) 48%, #0b1020)
    );
    box-shadow: 0 0 18px
        color-mix(in srgb, var(--button-color) 72%, transparent),
      inset 0 0 12px color-mix(in srgb, white 8%, transparent);
  }

  .mode-button {
    min-height: 58px;
  }

  .mode-icon {
    display: block;
    margin-bottom: 3px;
    font-size: 20px;
    line-height: 1;
  }

  .label-hide .button-label,
  .label-auto.labels-compact .button-label {
    position: absolute;
    width: max-content;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  .label-hide .mode-icon,
  .label-auto.labels-compact .mode-icon,
  .label-hide .preset-icon,
  .label-auto.labels-compact .preset-icon {
    margin-bottom: 0;
  }

  .lcd-panel {
    width: 100%;
    container-type: inline-size;
    overflow: hidden;
    padding: 14px;
    border: 2px solid color-mix(in srgb, currentColor 34%, transparent);
    border-radius: 14px;
    box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.2),
      0 3px 10px rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    color: #111827;
    background: var(--lcd-background);
    transition: background 0.3s ease, color 0.3s ease;
  }

  .lcd-panel.dark {
    color: #f8fafc;
    border-color: color-mix(in srgb, white 52%, transparent);
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.28),
      0 0 16px color-mix(in srgb, var(--lcd-background) 52%, transparent);
  }

  .lcd-panel.classic-green,
  .lcd-panel.dark.classic-green {
    color: #1d281b;
    border-color: rgba(45, 58, 39, 0.42);
    box-shadow: inset 0 2px 9px rgba(32, 44, 27, 0.28),
      0 3px 10px rgba(0, 0, 0, 0.12);
  }

  .display-size-large .lcd-panel {
    padding: 20px 18px;
  }

  .display-size-large .lcd-reading.current {
    font-size: clamp(62px, 17cqi, 82px);
  }

  .display-size-large .lcd-reading.target {
    font-size: clamp(42px, 12cqi, 58px);
  }

  .display-size-large .lcd-reading-label {
    margin-bottom: 11px;
    font-size: 12px;
  }

  .display-size-large .status-stack {
    gap: 7px;
  }

  .display-size-large .status-box {
    min-height: 24px;
  }

  .display-size-large .lcd-supplemental {
    margin-top: 18px;
  }

  .display-size-large .lcd-supplemental-label {
    font-size: 11px;
  }

  .display-size-large .lcd-advanced-value {
    min-height: 29px;
    padding-top: 8px;
    font-size: 16px;
  }

  .display-size-large .lcd-power-value,
  .display-size-large .lcd-power-value .lcd-number,
  .display-size-large .lcd-power-value .power-text {
    font-size: 25px;
  }

  .lcd-panel.actionable {
    cursor: pointer;
  }

  .lcd-panel.actionable:focus-visible {
    outline: 2px solid var(--primary-color, currentColor);
    outline-offset: 3px;
  }

  .lcd-values {
    display: grid;
    grid-template-columns: minmax(0, 1.12fr) 54px minmax(0, 0.66fr);
    gap: 8px;
    align-items: center;
  }

  .lcd-values.external {
    grid-template-columns: minmax(0, 1.12fr) minmax(0, 0.66fr);
    gap: 18px;
  }

  .lcd-reading {
    display: inline-flex;
    min-width: 0;
    flex-direction: column;
    align-items: center;
    justify-self: start;
  }

  .lcd-reading.current {
    font-size: clamp(44px, 13vw, 54px);
    text-align: left;
  }

  .lcd-reading.target {
    justify-self: end;
    font-size: clamp(26px, 7.2vw, 30px);
    text-align: right;
  }

  .lcd-reading-label {
    display: block;
    margin-bottom: 7px;
    font: 700 10px/1 sans-serif;
    letter-spacing: 0.06em;
    opacity: 0.68;
  }

  .lcd-display {
    display: inline-flex;
    align-items: flex-end;
    gap: 0.055em;
    height: 1em;
  }

  .text-display {
    display: inline-flex;
    align-items: flex-start;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.045em;
    line-height: 0.92;
    text-shadow: 0 0 5px color-mix(in srgb, currentColor 44%, transparent);
  }

  .text-degree {
    margin: 0.04em 0 0 0.08em;
    font-size: 0.4em;
    font-style: normal;
    letter-spacing: 0;
  }

  .lcd-digit {
    position: relative;
    display: inline-block;
    width: 0.58em;
    height: 1em;
  }

  .lcd-segment {
    position: absolute;
    display: block;
    border-radius: 0.035em;
    background: currentColor;
    opacity: 0.1;
  }

  .lcd-segment.on {
    opacity: 1;
  }

  .lcd-segment.a,
  .lcd-segment.d,
  .lcd-segment.g {
    left: 0.105em;
    width: 0.37em;
    height: 0.105em;
    clip-path: polygon(
      9% 0,
      91% 0,
      100% 50%,
      91% 100%,
      9% 100%,
      0 50%
    );
  }

  .lcd-segment.a {
    top: 0.02em;
  }
  .lcd-segment.g {
    top: 0.462em;
  }
  .lcd-segment.d {
    bottom: 0.02em;
  }

  .lcd-segment.b,
  .lcd-segment.c,
  .lcd-segment.e,
  .lcd-segment.f {
    width: 0.105em;
    height: 0.35em;
    clip-path: polygon(
      50% 0,
      100% 9%,
      100% 91%,
      50% 100%,
      0 91%,
      0 9%
    );
  }

  .lcd-segment.b {
    top: 0.09em;
    right: 0.025em;
  }
  .lcd-segment.c {
    right: 0.025em;
    bottom: 0.09em;
  }
  .lcd-segment.e {
    bottom: 0.09em;
    left: 0.025em;
  }
  .lcd-segment.f {
    top: 0.09em;
    left: 0.025em;
  }

  .lcd-dot {
    width: 0.1em;
    height: 0.1em;
    margin: 0 0.015em 0.02em;
    border-radius: 50%;
    background: currentColor;
  }

  .lcd-degree {
    width: 0.2em;
    height: 0.2em;
    margin: 0 0 0.75em 0.015em;
    border: 0.045em solid currentColor;
    border-radius: 50%;
    box-sizing: border-box;
  }

  .status-wheel {
    position: relative;
    left: 4px;
    display: grid;
    grid-template-columns: repeat(4, 11px);
    gap: 2px;
    width: 54px;
    height: 30px;
    padding: 1px 2px;
    overflow: hidden;
    border: 1px solid color-mix(in srgb, currentColor 58%, transparent);
    border-radius: 4px;
    box-sizing: border-box;
    background: color-mix(in srgb, currentColor 10%, transparent);
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.18),
      0 0 7px color-mix(in srgb, currentColor 24%, transparent);
  }

  .wheel-window {
    position: relative;
    height: 26px;
    overflow: hidden;
    border-right: 1px solid color-mix(in srgb, currentColor 18%, transparent);
    mask-image: linear-gradient(
      to bottom,
      transparent 0,
      black 28%,
      black 72%,
      transparent 100%
    );
  }

  .wheel-window:last-child {
    border-right: 0;
  }

  .wheel-strip {
    position: absolute;
    inset: 0 auto auto 0;
    display: flex;
    width: 100%;
    flex-direction: column;
    transform: translateY(var(--wheel-offset));
    animation: wheel-roll 5s cubic-bezier(0.16, 0.72, 0.22, 1)
      var(--wheel-delay) both;
    will-change: transform;
  }

  .wheel-strip > i {
    display: flex;
    width: 100%;
    height: 14px;
    flex: 0 0 14px;
    align-items: center;
    justify-content: center;
    font-style: normal;
    opacity: 0.28;
  }

  .wheel-strip > i.selected {
    opacity: 1;
  }

  .wheel-strip .matrix-char {
    --matrix-pixel-size: 1.25px;
    --matrix-pixel-gap: 0.4px;
  }

  @keyframes wheel-roll {
    from {
      transform: translateY(6px);
    }
    to {
      transform: translateY(var(--wheel-offset));
    }
  }

  .status-stack {
    position: relative;
    left: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  .status-box {
    width: 50px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid currentColor;
    border-radius: 3px;
    box-sizing: border-box;
    opacity: 0.24;
  }

  .status-box.active {
    background: color-mix(in srgb, currentColor 13%, transparent);
    box-shadow: inset 0 0 0 1px currentColor,
      0 0 8px color-mix(in srgb, currentColor 42%, transparent);
    opacity: 1;
  }

  .status-box.active.blink .status-text {
    animation: status-text-blink 1.15s ease-in-out infinite;
  }

  .status-text {
    font: 700 10px/1 Arial, Helvetica, sans-serif;
    letter-spacing: 0.05em;
  }

  @keyframes status-text-blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.22;
    }
  }

  .lcd-supplemental {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(76px, 0.45fr);
    gap: 16px;
    width: 100%;
    min-width: 0;
    margin-top: 12px;
    align-items: end;
  }

  .lcd-supplemental.power-only {
    grid-template-columns: minmax(0, 1fr);
  }

  .lcd-advanced-status,
  .lcd-power {
    display: inline-grid;
    min-width: 0;
    justify-items: center;
  }

  .lcd-advanced-status {
    justify-self: start;
  }

  .lcd-advanced-value.quality-estimated {
    opacity: 0.78;
  }

  .lcd-power {
    justify-self: end;
  }

  .lcd-supplemental-label {
    display: block;
    margin-bottom: 7px;
    font: 700 10px/1 sans-serif;
    letter-spacing: 0.06em;
    opacity: 0.68;
  }

  .lcd-advanced-value {
    position: relative;
    display: grid;
    min-width: min(100%, 118px);
    min-height: 25px;
    padding-top: 6px;
    place-items: center;
    overflow: hidden;
    box-sizing: border-box;
    font: 700 13px/1 Arial, Helvetica, sans-serif;
    letter-spacing: 0.04em;
    white-space: nowrap;
  }

  .lcd-advanced-value::before {
    position: absolute;
    top: 0;
    left: 4%;
    width: 92%;
    height: 3px;
    border-radius: 2px;
    background: currentColor;
    box-shadow: 0 0 7px currentColor;
    content: "";
    opacity: 0.9;
  }

  .external-status-slide {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    animation: external-status-roll 560ms cubic-bezier(0.2, 0.72, 0.22, 1)
      both;
  }

  .lcd-power-value {
    display: inline-flex;
    min-height: 25px;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 20px;
    line-height: 1;
    white-space: nowrap;
  }

  .lcd-power-value .lcd-number {
    height: 20px;
    font-size: 20px;
  }

  .lcd-power-value .power-text {
    font-size: 20px;
  }

  @keyframes external-status-roll {
    from {
      opacity: 0;
      transform: perspective(80px) translateY(18px) rotateX(-42deg);
    }
    to {
      opacity: 1;
      transform: perspective(80px) translateY(0) rotateX(0);
    }
  }

  .matrix-word {
    display: inline-flex;
    gap: 2px;
  }

  .matrix-char {
    display: grid;
    grid-template-columns: repeat(5, var(--matrix-pixel-size, 1.4px));
    grid-template-rows: repeat(7, var(--matrix-pixel-size, 1.4px));
    gap: var(--matrix-pixel-gap, 0.55px);
  }

  .matrix-pixel {
    width: var(--matrix-pixel-size, 1.4px);
    height: var(--matrix-pixel-size, 1.4px);
    border-radius: 0.3px;
    background: currentColor;
    opacity: 0.1;
  }

  .matrix-pixel.on {
    opacity: 1;
  }

  .temperature-controls {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .temperature-controls button {
    min-height: 30px;
    padding: 2px 8px;
    border-width: 1px;
    border-radius: 10px;
    background: color-mix(
      in srgb,
      var(--primary-text-color) 8%,
      transparent
    );
    box-shadow: none;
    font-size: 19px;
    line-height: 1;
  }

  .preset-icon {
    display: block;
    margin-bottom: 3px;
    font-size: 17px;
    line-height: 1;
  }

  .lcd-consumption-unit {
    padding-bottom: 0;
    font: 800 9px/1 Arial, sans-serif;
    letter-spacing: 0.06em;
  }

  .unavailable {
    font: 700 11px/1.2 Arial, sans-serif;
  }

  .lcd-number {
    font-size: 29px;
  }

  .matrix-space {
    display: inline-block;
    width: 4px;
  }

  .display-font-condensed .text-display,
  .display-font-condensed .status-text,
  .display-font-condensed .lcd-advanced-value {
    font-family: "Arial Narrow", "Roboto Condensed", Arial, sans-serif;
    font-stretch: condensed;
  }

  .display-font-mono .text-display,
  .display-font-mono .status-text,
  .display-font-mono .lcd-advanced-value {
    font-family: ui-monospace, "SFMono-Regular", Consolas, monospace;
  }

  .brand {
    display: flex;
    min-height: 18px;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    color: var(--secondary-text-color);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.16em;
    line-height: 1.2;
    text-align: center;
    text-overflow: ellipsis;
    text-shadow: 0 -1px 0 var(--ha-card-background),
      0 1px 0 color-mix(in srgb, var(--primary-text-color) 28%, transparent);
    text-transform: uppercase;
    white-space: nowrap;
  }

  .warning {
    padding: 16px;
    color: var(--error-color, #db4437);
    text-align: center;
  }

  @media (prefers-reduced-motion: reduce) {
    .wheel-strip,
    .external-status-slide,
    .status-box.active.blink .status-text {
      animation: none;
    }
  }
`;
