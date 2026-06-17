export default function Footer() {
  return (
    <footer className="relative z-30 py-8 border-t border-white/5 bg-darkBg text-center text-xs text-gray-500 font-mono pointer-events-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>&copy; 2026 Philipp Dachtler. All Systems Operational.</div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-accentPurp transition-colors">Privacy Node</a>
          <a href="#" className="hover:text-accentPurp transition-colors">Imprint</a>
        </div>
      </div>
    </footer>
  );
}
