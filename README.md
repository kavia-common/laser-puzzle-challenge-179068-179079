# Light Weaver Workspace

This workspace contains:

- `backend/` – Express API serving health, version, and levels
- The frontend lives in sibling workspace `../laser-puzzle-challenge-179068-179078/light_weaver_frontend`

## Run Both Containers Locally

1) Backend (API)
```
cd backend
npm install
npm run dev  # starts at http://localhost:3001
```

2) Frontend (React)
```
cd ../laser-puzzle-challenge-179068-179078/light_weaver_frontend
npm install
npm start  # opens http://localhost:3000
```

The frontend shows an API status badge that pings the backend `/version` endpoint. The game is offline-capable; API is optional.