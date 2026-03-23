"use client";

const TECH_STACK = [
  "Software Dev", "React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", 
  "C++", "Python", "Data Structures", "Supabase", "Git/Github", "Agile", "Docker"
];

export const Marquee = () => {
  return (
    <div className="overflow-hidden border-y border-border py-2.5 bg-background relative z-20">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex shrink-0">
            {TECH_STACK.map((tech, j) => (
              <div key={j} className="flex items-center">
                <span className="font-mono text-[0.56rem] text-muted-foreground/60 tracking-[0.2em] px-8 uppercase uppercase">
                  {tech}
                </span>
                <span className="text-muted-foreground/30 font-mono text-[0.56rem] mr-2">·</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
