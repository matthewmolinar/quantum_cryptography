# Quantum DAO

A post-quantum secure DAO platform built with Rust/Axum backend and Next.js frontend.

## Architecture

- **Backend**: Rust with Axum web framework
- **Frontend**: Next.js 14+ with TypeScript and Tailwind CSS v4
- **Database**: PostgreSQL 16

## Quick Start

### Prerequisites

- Docker and Docker Compose
- Rust 1.75+ (for local development)
- Node.js 20+ (for local development)

### Running with Docker

```bash
# Copy environment template
cp .env.example .env

# Start all services
docker compose up --build
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8080

### Local Development

#### Backend

```bash
cd backend
cp .env.example .env  # or create .env with required vars
cargo run
```

The backend will start on http://localhost:8080

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will start on http://localhost:3000

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check endpoint |

## Project Structure

```
quantum_cryptography/
├── backend/          # Rust/Axum backend
├── frontend/         # Next.js frontend
├── docs/             # Documentation
└── docker-compose.yml
```

## License

Apache 2.0 - See [LICENSE](LICENSE) for details.
