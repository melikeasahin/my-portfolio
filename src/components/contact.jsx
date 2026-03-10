const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] p-12 border border-slate-700 shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Got a project? ☕️</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">I am always open to new opportunities and collaborations. 
          Do not hesitate to contact me!</p>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Email Button  */}
            <a href="mailto:melikeshn006@gmail.com" className="group flex items-center gap-3 px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white fond-bold rounded-xl transition-all shadow-lg shaddow-sky-500/20">
            <span>📧</span>
            Send me an email
            </a>
            {/* Email Button  */}
            <a href="https://github.com/melikeasahin" target="_blank" className="flex items-center gap-3 px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white fond-bold rounded-2xl border border-slate-600 transition-all"> 
            <span>🐙</span>
            Follow on GitHub
            </a>
          </div>
        </div>
    </section>
  );
};

export default Contact;