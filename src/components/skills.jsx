const Skills = () => {
    const skills = [
        { name: "HTML5", level: "%90", color: "text-orange-500" },
        { name: "CSS3 / Tailwind", level: "%85", color: "text-sky-400" },
        { name: "JavaScript", level: "%80", color: "text-yellow-400" },
        { name: "React", level: "%75", color: "text-cyan-400" },
        { name: "Git / Github", level: "%75", color: "text-white" },
        { name: "Next.js", level: "60", color: "text-slate-200" },
    ];
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="h-1 w-20 bg-sky-500 mx-auto rounded-full"></div>
        </div>
        {/* Talent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {skills.map((skill, index) => (
                <div
                key={index} 
                className="p-6 bg-slate-800-50 rounded-2xl border border-slate-700 hover:border-sky-500/50 transition-all group shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <span className={'text-xl font-bold ${skill-color}'}>{skill.name}"</span>
                        <span className="text-sm text-slate-400 font-mono">{skill.level}</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                        <div className="bg-sky-500 h-full rounded-full transition-all duration-1000 group-hover:bg-emerald-400" style={{ width: skill.level }}></div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Skills