
import Resim1 from '../assets/read-cv.png'
import Resim2 from '../assets/bento-box.png'
import Resim3 from '../assets/multistep.png'
const Projects = () => {
    const projects = [
        {
            title: "Read CV",
            description: "RA simple, static single-page CV / portfolio template built with HTML and CSS.",
            tags: ["HTML", "CSS"],
            link: "https://melikeasahin.github.io/READ-CV/index.html",
            image: Resim1
        },
        {
            title: "Hava Durumu Uygulaması",
            description: "API kullanarak anlık hava durumu verilerini çeken şık bir uygulama",
            tags: ["HTML", "CSS"],
            link: "#https://melikeasahin.github.io/devchallenges-example/bento-box-layout-feature-section/",
            image: Resim2
        },
        {
            title:"Multistep Register Form ",
            description: "A step-by-step registration form that optimises user registration processes. A modern and aesthetically pleasing dark-themed interface design.",
            tags: ["HTML", "CSS", "JavaScript"],
            link: "#https://melikeasahin.github.io/devchallenges-example/multistep-register-form/",
            image: Resim3        
        },
        {
            title:"E-ticaret Arayüzü",
            description: "Kullanıcı dostu, modern bir alışveriş sitesi arayüz tasarımı",
            tags: ["React", "Context API"],
            link: "#https://melikeasahin.github.io/devchallenges-example/multistep-register-form/",
            image: Resim3        
        },
        {
            title:"E-ticaret Arayüzü",
            description: "Kullanıcı dostu, modern bir alışveriş sitesi arayüz tasarımı",
            tags: ["React", "Context API"],
            link: "#https://melikeasahin.github.io/devchallenges-example/multistep-register-form/",
            image: Resim3        
        },
        {
            title:"E-ticaret Arayüzü",
            description: "Kullanıcı dostu, modern bir alışveriş sitesi arayüz tasarımı",
            tags: ["React", "Context API"],
            link: "#https://melikeasahin.github.io/devchallenges-example/multistep-register-form/",
            image: Resim3        
        }
    ];

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="h-1.5 w-20 bg-emerald-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <div key={index} className="bg-slate-800/40 rounded-3xl border border-slate-700 overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 group">
                    {/* Project Visual Area */}
                    <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center group-hover:from-sky-500/20 group-hover:to-emerald-500/20 transition-all">
                        <img 
                        src={project.image} 
                        alt={project.title} 
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'/>
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