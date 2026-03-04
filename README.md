# Backend

Quick start & testing instructions

1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Create a `.env` file (optional):
   - If you have a MongoDB instance, set `MONGO_URI` in `backend/.env`.
   - If not, the server will try a local MongoDB at `mongodb://127.0.0.1:27017/book`, and if that's not available it will automatically start an **in-memory MongoDB** for development.

3. Start the server in dev mode:
   ```bash
   npm run dev
   ```

4. Run the CRUD smoke test (requires server running):
   ```bash
   npm run test:crud
   ```

Notes:
- The in-memory MongoDB is for development purposes only — data will be lost when the process exits.
- Ensure your system's PowerShell execution policy allows running `npm` scripts if you encounter errors on Windows.
