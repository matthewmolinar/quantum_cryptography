use http::Method;
use tower_http::cors::{Any, CorsLayer};

use crate::config::Config;

pub fn cors_layer(config: &Config) -> CorsLayer {
    CorsLayer::new()
        .allow_origin(config.cors_origin.parse::<http::HeaderValue>().unwrap())
        .allow_methods([Method::GET, Method::POST, Method::PUT, Method::DELETE])
        .allow_headers([
            http::header::CONTENT_TYPE,
            http::header::AUTHORIZATION,
        ])
        .allow_credentials(true)
}
