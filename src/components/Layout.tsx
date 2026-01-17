import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
  backgroundImage?: string;
}

const Layout = ({ children, backgroundImage }: LayoutProps) => {
  return (
    <div 
      className="min-h-screen"
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      } : { backgroundColor: 'hsl(var(--background))' }}
    >
      {backgroundImage && <div className="fixed inset-0 bg-black/30 pointer-events-none" />}
      <Navigation />
      <main className="relative z-10 pt-20">
        {children}
      </main>
    </div>
  );
};

export default Layout;