"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import type { HealthResponse } from "@/types";

export default function HealthCheck() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await api.get<HealthResponse>("/health");
        setHealth(response);
        setIsConnected(true);
        setLastChecked(new Date());
      } catch {
        setIsConnected(false);
        setLastChecked(new Date());
      }
    };

    checkHealth();
    const interval = setInterval(checkHealth, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
      <div className="relative">
        <div
          className={`w-2.5 h-2.5 rounded-full ${
            isConnected ? "bg-green-400" : "bg-red-400"
          }`}
        />
        {isConnected && (
          <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-400 animate-ping opacity-75" />
        )}
      </div>
      <div className="text-sm">
        <span className={isConnected ? "text-white" : "text-white/70"}>
          {isConnected ? "Backend Connected" : "Disconnected"}
        </span>
        {health && isConnected && (
          <span className="text-white/50 ml-2">
            v{health.version}
          </span>
        )}
      </div>
      {lastChecked && (
        <span className="text-white/40 text-xs">
          {lastChecked.toLocaleTimeString()}
        </span>
      )}
    </div>
  );
}
