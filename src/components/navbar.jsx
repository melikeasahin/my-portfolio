const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="text-xl font-bold bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                    MS.
                </div>
                <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
                    <a href="#home" className="hover:text-sky-400 transition-colors">Home</a>
                    <a href="#about" className="hover:text-sky-400 transition-colors">Skills</a>
                    <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
                    <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
                </div>
                <button className="px-3 py-2 text-sm bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-all">
                    CV
                </button>
            </div>
        </nav>
    );
};

export default Navbar;