<<<<<<< HEAD
# FreshGuard — Smart Food Freshness Intelligence

A GitHub Pages-ready static prototype for produce inventory, cold-chain journey traceability, refrigerated truck telemetry visualisation and Q10-based shelf-life estimation.

## Included experience
- Executive dashboard with inventory health, alerts and temperature trends
- Animated refrigerated truck on the overview screen
- Dedicated fleet tracking page with a schematic route, moving vehicle marker, distance, ETA and speed
- Cargo cutaway showing produce crates and the insulated compartment
- Separate internal cargo temperature and external ambient temperature
- Humidity, GPS gateway and sensor-node identifiers
- Batch inventory, batch journey timeline and smart recommendations
- Q10 what-if simulator and analytics charts
- CSV export and browser LocalStorage persistence
- Responsive layout for laptop and mobile

## Data provenance and demonstration mode
The interface uses a **prototype telemetry stream** generated locally in the browser. The stream is labelled with realistic device/gateway identifiers (for example, FG-TRK-204 and FG-TEMP-204) so the intended data flow is clear. These are not readings from a connected physical truck, GPS receiver, ESP32 or DHT22 sensor. Do not present the displayed values as actual measured field data.

For a live demonstration, connect a real ESP32/DHT22 device and GPS source through an API or MQTT/WebSocket gateway, then replace the local telemetry generator in `js/app.js` with the received readings. GitHub Pages can host the frontend but cannot run a private backend.

## Q10 estimation
Relative deterioration rate:

`rate = Q10 ^ ((temperature - referenceTemperature) / 10)`

Equivalent age at reference temperature:

`equivalentAgeDays = Σ (exposureHours / 24) × rate`

Remaining shelf-life estimate:

`remainingDays = referenceShelfLifeDays - equivalentAgeDays`

The seeded batches use illustrative parameters and declared accumulated ages. Obtain produce- and cultivar-specific parameters from credible food-science sources and validate them experimentally before making operational decisions. Humidity is displayed but is not currently included as a mathematical multiplier. Q10 is a simplified temperature model and does not certify food safety or quality.

## Run locally
Open `index.html` in a browser, or use VS Code Live Server.

## Deploy to GitHub Pages
1. Create a GitHub repository named `freshguard`.
2. Upload the files and folders from this project.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. Wait for GitHub Pages to publish the site.

All project assets use relative paths and work from a repository subpath.


## FreshGuard presentation upgrade

- DSEU opening screen with the supplied university logo and FreshGuard project identity.
- Fleet movement is driven by one shared route-progress value. The truck now moves only from Warehouse A towards Warehouse B and stops at the destination; it no longer reverses or jumps back to the origin.
- Decision Center translates the estimated remaining shelf life into suggested operational actions: urgent quality inspection (under 1 day), immediate dispatch (1–3 days), priority dispatch (3–7 days), and normal monitoring/storage review (7+ days).
- Project Team page contains editable placeholders for team members, roll numbers, subject, campus and project guide. Update these directly in `index.html`.
- The dashboard uses a locally generated prototype telemetry stream. No physical ESP32, DHT22 or GPS device is connected in this build. The UI is structured for future hardware integration.

### Shelf-life action thresholds

These are configurable prototype decision-support thresholds, not food-safety rules. A physical quality inspection and the organisation's validated handling procedures must take precedence over model estimates.
=======
# Freshguard
Iot Based Food Processing Application
>>>>>>> bc588c0861cfe5de04487cb97e0dda9bdbec0295
