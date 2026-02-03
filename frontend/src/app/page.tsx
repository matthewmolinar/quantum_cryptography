import HealthCheck from "@/components/health/HealthCheck";
import BottomNav from "@/components/layout/BottomNav";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-white animate-pulse-soft" />
        <span className="scroll-indicator text-white/70 text-xs tracking-widest uppercase">
          Scroll
        </span>
      </div>

      <div className="relative min-h-screen flex items-center justify-center">
        <div className="text-center px-8 z-10">
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] text-white leading-[0.9] tracking-tight">
            <span className="block animate-slide-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <span className="italic font-normal">Post-Quantum</span>
            </span>
            <span className="block animate-slide-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              <span className="font-bold">Security</span>
            </span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl mt-8 md:mt-12 max-w-md mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            Post-Quantum Threshold Signatures for DAOs
          </p>

          <div className="mt-8 animate-fade-in opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            <HealthCheck />
          </div>
        </div>
      </div>

      <BottomNav />

      <button className="fixed bottom-8 right-8 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl flex items-center justify-center transition-colors z-40">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    </div>
  );
}
