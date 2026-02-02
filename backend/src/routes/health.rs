use axum::{routing::get, Json, Router};
use chrono::Utc;
use serde::Serialize;

#[derive(Serialize)]
pub struct HealthResponse {
    status: String,
    timestamp: String,
    version: String,
}

async fn health_check() -> Json<HealthResponse> {
    Json(HealthResponse {
        status: "ok".to_string(),
        timestamp: Utc::now().to_rfc3339(),
        version: "0.1.0".to_string(),
    })
}

pub fn health_router() -> Router {
    Router::new().route("/health", get(health_check))
}
