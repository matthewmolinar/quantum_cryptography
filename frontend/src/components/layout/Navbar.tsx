export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-white tracking-tight">
          Quantum
        </a>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
              <path strokeWidth="1.5" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="text-sm font-medium">EN</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <button className="text-white/90 hover:text-white text-sm font-medium transition-colors px-4 py-2">
            Log in
          </button>

          <button className="bg-white text-[#e85a4f] text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-white/90 transition-colors shadow-lg shadow-black/10">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}
