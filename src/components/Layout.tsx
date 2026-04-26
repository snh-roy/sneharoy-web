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
          className="absolute top-0 left-0 w-full h-[100dvh] sm:h-[85vh] z-0 bg-black flex flex-col justify-end items-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className="font-typewriter text-white/60 text-[10px] sm:text-sm mb-40 sm:mb-4 tracking-wider px-4 text-center">
            Artemis II crew looks back at Earth on their way to the Moon
          </p>
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
