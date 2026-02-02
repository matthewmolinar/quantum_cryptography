export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-500 text-sm">
            © 2024 Quantum DAO. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Documentation
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
