export const Footer = () => {
    return (
        <footer className="py-20 px-8 border-t border-border bg-background">
            <div className="max-w-[1240px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
                    <div className="w-full">
                        <div className="font-display text-[6rem] md:text-[10rem] lg:text-[15rem] text-foreground leading-[0.8] mb-12 select-none opacity-10 tracking-tighter w-full text-center md:text-left">
                            ADITYA KUMAR
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                            <div>
                                <p className="text-muted-foreground/60 font-mono text-[0.8rem] uppercase tracking-[0.2em] mb-4">
                                    Software Engineer · Full Stack Developer · Distributed Systems · AI/ML
                                </p>
                                {/* <p className="text-muted-foreground/40 font-mono text-[0.7rem] leading-relaxed max-w-sm">
                                    Designed with a focus on typography and high-performance engineering aesthetics. Built with Next.js & Framer Motion.
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-border/50 gap-6">
                    <div className="text-[0.85rem] text-muted-foreground/60 font-mono">
                        © {new Date().getFullYear()} · Aditya Kumar
                    </div>
                    <div className="flex gap-8">
                        {[
                            { n: 'LinkedIn', h: 'https://www.linkedin.com/in/aditya-kumar-8b141516a/' },
                            { n: 'GitHub', h: 'https://github.com/Aditya0Kumar' },
                            { n: 'Twitter', h: '#' }
                        ].map(s => (
                            <a key={s.n} href={s.h} target="_blank" rel="noreferrer" className="font-mono text-[0.7rem] text-muted-foreground/60 uppercase tracking-[0.1em] hover:text-primary transition-colors">
                                {s.n}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
