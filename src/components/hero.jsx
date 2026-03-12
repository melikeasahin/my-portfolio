import ProfilePhoto from '../assets/melike.jpeg';
const Hero = () => {
    return (
        <section id='home' className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-24">
            {/* Profile Picture*/}
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-sky-400 to-emerald-400 p-1 mb-8 shadow-xl shadow-sky-500/20 group overflow-hidden">
                <img 
                src={ProfilePhoto}
                alt="Melike Şahin Photo" 
                className="w-full h-full rounded-full objeckt-cover group-hover:scale-110 transition-transform duration-500"/>
            </div> 
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
                Hello, I'm <span className="bg-gradient-to-r from-sky-400 to-emarald-400 bg-clip-text text-transparent">Melike Şahin</span>
            </h1>
            {/* Subheading / Expertise */}
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed">I develop projects for the modern and user-friendly <span className="text-white font-medium">Front-end</span> world.
            I design digital experiences using React and Tailwind.</p>
            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
                <a href="#projects" className="px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white fond-bold rounded-2xl transition-all hover:scale-95 shadow-lg shadow-sky-500/25">
                View My Projects
                </a>
                <a href="#contact" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl border border-slate-700 transition-all hover:scale-105">
                Get In Touch
                </a>
            </div>
        </section>
    );
};

export default Hero;