# ThermoMatrix Card roadmap

## Identità

- Nome: **ThermoMatrix Card**
- Elemento Lovelace: `custom:thermomatrix-card`
- Bundle HACS: `dist/thermomatrix-card.js`

## Principi

- Card autonoma, senza dipendenza da `custom:button-card`.
- Compatibile con qualsiasi entità `climate`.
- Controlli generati esclusivamente dalle capacità dichiarate dall'entità.
- Moduli opzionali che non compromettono la card quando non configurati.
- Configurazione YAML ed editor visuale.
- Layout responsive e coerente con temi chiari e scuri.

## Display

- Temperature con cifre LCD a sette segmenti e segmenti spenti visibili.
- Indicatori rettangolari `ON`, `IDLE` e `OFF` a matrice di pixel.
- `ON` lampeggia durante `heating`, `cooling`, `drying` o `fan`.
- `IDLE` lampeggia quando `hvac_action` è `idle`.
- `OFF` resta fisso quando il climatizzatore è spento.
- Nome del dispositivo in fondo alla card, come marchio in rilievo.
- Sfondo legato alla modalità, tenue nel tema chiaro e intenso nel tema scuro.

## Moduli

- Preset attivabili o disattivabili.
- Pulsanti preset generati da `preset_modes`.
- `none` viene presentato come `Manuale`.
- Consumo attivabile con un sensore di potenza dedicato.
- Autodiscovery del sensore di stato ThermoPilot tramite device condiviso e
  marker stabile `thermopilot_role: status`, con override manuale compatibile.
- Riutilizzo opzionale dell'attributo numerico `power` del sensore ThermoPilot.
- Bordo colorato secondo modalità oppure neutro.

## Layout responsive

- Pulsanti HVAC e preset con etichette adattive alla larghezza disponibile.
- Comportamento predefinito `auto`: icona e testo su schermi normali, sola
  icona quando lo spazio non consente di mostrare correttamente la traduzione.
- Opzione futura `button_labels: auto | show | hide`.
- Tooltip e nome accessibile sempre presenti anche quando il testo visibile
  viene nascosto.
- Spaziatura e dimensione del testo ridotte gradualmente prima di passare alla
  modalità con sole icone.

## Fasi

1. **Fondazione** — componente Lit/TypeScript, bundle e manifest HACS.
2. **Parità visiva** — confronto con il prototipo `button-card` in Home
   Assistant.
3. **Editor** — rifinitura della configurazione visuale e anteprima.
4. **Robustezza** — test con capacità HVAC diverse, entità mancanti e layout
   stretti.
5. **Distribuzione** — repository GitHub pubblico, licenza, immagini,
   automazioni di controllo e prima release.
6. **HACS** — installazione come repository personalizzato e successiva
   candidatura al catalogo predefinito.
