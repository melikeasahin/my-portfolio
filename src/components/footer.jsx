const Footer = () => {
  return (
    <footer className="py-10 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>{new Date().getFullYear()} Melike Şahin. All rights reserved.</p>
        <p className="mt-2 fond-medium text-slate-600 italic"> Lovingly developed with React & Tailwind CSS. ✨</p>
    </footer>
  );
};

export default Footer;