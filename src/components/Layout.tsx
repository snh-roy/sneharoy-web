import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
  backgroundImage?: string;
}

const Layout = ({ children, backgroundImage }: LayoutProps) => {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: 'hsl(var(--background))' }}>
      {backgroundImage && (
        <div 
          className="fixed top-0 left-0 w-full h-[60vh] z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>
      )}
      <Navigation />
      <main className="relative z-10 pt-16 sm:pt-20">
        {children}
      </main>
    </div>
  );
};

export default Layout;