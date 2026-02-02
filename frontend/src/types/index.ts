export interface HealthResponse {
  status: string;
  timestamp: string;
  version: string;
}

export interface ApiError {
  status: number;
  message: string;
  error: string;
}
