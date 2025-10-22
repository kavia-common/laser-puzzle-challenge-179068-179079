# Light Weaver Backend (Express)

Minimal Express backend providing health, version, and level endpoints for the Light Weaver MVP.

## Getting Started

```bash
npm install
# Development with auto-reload
npm run dev
# Or start without nodemon
npm start
```

By default the server listens on:
- HOST: 0.0.0.0
- PORT: 3001

You can override with environment variables:
```
HOST=127.0.0.1 PORT=3001 npm start
```

## API

- GET `/` – Health status
- GET `/version` – Version/build metadata
- GET `/levels` – List available levels
- GET `/levels/:id` – Level detail by id

OpenAPI:
- Swagger UI: `/docs`
- Raw OpenAPI JSON: `/openapi.json` (generated at `interfaces/openapi.json`, the server injects server URL at runtime for the UI)

## CORS

CORS is enabled for all origins for simplicity in development. The frontend typically runs on port 3000 and calls this backend on 3001.

## Notes

- Version info uses environment variables if present: `APP_VERSION`, `BUILD_TIME`. Defaults are provided otherwise.
- This service is stateless and in-memory; future work can back levels with a database or files.
