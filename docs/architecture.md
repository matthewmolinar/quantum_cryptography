# Quantum DAO Architecture

## Overview

Quantum DAO is a post-quantum secure decentralized autonomous organization platform built with modern web technologies and designed for long-term security against quantum computing threats.

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         Client Layer                             │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                    Next.js Frontend                      │    │
│  │  • React 18 with Server Components                       │    │
│  │  • Tailwind CSS v4 for styling                          │    │
│  │  • TypeScript for type safety                           │    │
│  │  • Real-time health monitoring                          │    │
│  └─────────────────────────────────────────────────────────┘    │
│                              │                                   │
│                              ▼                                   │
│                    ┌─────────────────┐                          │
│                    │  API Rewrites   │                          │
│                    │  /api/* → :8080 │                          │
│                    └─────────────────┘                          │
└─────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                        Backend Layer                             │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                   Rust/Axum Backend                      │    │
│  │  • Axum web framework                                    │    │
│  │  • Tower middleware (CORS, logging)                      │    │
│  │  • Async runtime (Tokio)                                │    │
│  │  • Structured logging (tracing)                         │    │
│  └─────────────────────────────────────────────────────────┘    │
│                              │                                   │
│                              ▼                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                    PostgreSQL 16                         │    │
│  │  • Persistent data storage                               │    │
│  │  • ACID compliance                                       │    │
│  │  • Connection pooling                                    │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

## Component Details

### Frontend (Next.js)

| Component | Description |
|-----------|-------------|
| `layout.tsx` | Root layout with dark theme, Inter font, nav shell |
| `page.tsx` | Landing page with health status indicator |
| `Navbar.tsx` | Top navigation with logo and wallet connect |
| `Footer.tsx` | Simple footer with links |
| `HealthCheck.tsx` | Real-time backend connection status |
| `api.ts` | Typed fetch wrapper for API calls |

### Backend (Rust/Axum)

| Module | Description |
|--------|-------------|
| `main.rs` | Entry point, router setup, server binding |
| `config.rs` | Environment configuration loading |
| `error.rs` | Centralized error handling |
| `routes/health.rs` | Health check endpoint |
| `middleware/mod.rs` | CORS configuration |

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check with status, timestamp, version |

## Docker Services

| Service | Port | Description |
|---------|------|-------------|
| `postgres` | 5432 | PostgreSQL database |
| `backend` | 8080 | Rust/Axum API server |
| `frontend` | 3000 | Next.js web application |

## Security Considerations

### Current Implementation
- CORS configuration restricting origins
- Environment-based configuration
- Typed error responses

### Future Post-Quantum Features
- Lattice-based cryptography for signatures
- Hash-based signature schemes (SPHINCS+)
- Quantum-resistant key exchange (Kyber)
- Multi-party computation for treasury

## Development Workflow

```bash
# Local development
cd backend && cargo run
cd frontend && npm run dev

# Docker deployment
docker compose up --build
```

## Environment Variables

### Backend
- `DATABASE_URL` - PostgreSQL connection string
- `RUST_LOG` - Logging level (info, debug, trace)
- `CORS_ORIGIN` - Allowed CORS origin
- `PORT` - Server port (default: 8080)

### Frontend
- `NEXT_PUBLIC_API_URL` - API base URL for client-side requests
