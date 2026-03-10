const Projects = () => {
    const projects = [
        {
            title: "My portfolio",
            description: "React ve Tailwind CSS v4 kullanarak hazırladığım modern portfolyo sistem.",
            tags: ["React", "Tailwind", "Vite"],
            link: "#"
        },
        {
            title: "Hava Durumu Uygulaması",
            description: "API kullanarak anlık hava durumu verilerini çeken şık bir uygulama",
            tags: ["JavaScript", "API", "CSS"],
            link: "#"
        },
        {
            title:"E-ticaret Arayüzü",
            description: "Kullanıcı dostu, modern bir alışveriş sitesi arayüz tasarımı",
            tags: ["React", "Context API"],
            link: "#"
        }
    ];

  return (
    <section id="projects" className="py-20 px-6 mx-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-emerald-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <div key={index} className="bg-slate-800/40 rounded-3xl border border-slate-700 overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 group">
                    {/* Project Visual Area */}
                    <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center group-hover:from-sky-500/20 group-hover:to-emerald-500/20 transition-all">
                        <span className="text-4xl group-hover:scale-110 transition-transform">💻</span>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                        <p className="text-slate-400 tezt-sm mb-4 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="text-[10px] uppercase tracking-wider fond-bold px-2 py-1 bg-slate-900 text-sky-400 rounded-md border border-sky-500/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a href={project.link} className="text-sm fond-bold text-white flex items-center gap-2 hover:text-sky-400 transition-colors">
                            Review the Project <span>→</span>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </section>
    );
};

export default Projects;