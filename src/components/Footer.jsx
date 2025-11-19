export default function Footer() {
  return (
    <footer className="w-full px-12 flex items-center justify-between bg-black border-t border-white/10 mt-20">
      <div className="px-6 py-10">
        
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} World Fashion Now — India-first, global fashion intelligence.
        </p>

        <nav className="mt-4 flex flex-wrap gap-6 text-xs text-gray-500">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/fashion-guide" className="hover:text-white">Fashion Guide</a>
          <a href="/india-fashion-guide" className="hover:text-white">India Fashion</a>
          <a href="/global-fashion-trends" className="hover:text-white">Global Trends</a>
        </nav>
      </div>
      <div className="text-gray-400 text-sm">
        <p>hello@epfdesk.com</p>
        <p>+919945933333</p>
        62/63 Church Street, Bengaluru Karnataka, 560001
      </div>
    </footer>
  );
}
