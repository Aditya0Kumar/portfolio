export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/50 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        <div className="font-mono text-muted-foreground mb-4">
          <p>Built by Aditya Kumar</p>
          <p className="mt-1 text-sm">Software Engineer | Full Stack Developer | AI Engineer</p>
        </div>
        <div className="flex items-center text-primary font-mono text-sm group">
          <span className="text-secondary mr-2">{">"}</span>
          <span className="group-hover:animate-pulse">exit</span>
        </div>
      </div>
    </footer>
  );
};
