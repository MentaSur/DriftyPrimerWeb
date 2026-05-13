import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans text-zinc-50 min-h-screen relative overflow-hidden bg-[#e6e2d8]">
      {/* Fondo de pantalla cálido (Daytime interior) */}
      <div className="absolute inset-0 bg-[url('/iniciooo.jpg')] bg-cover bg-center bg-no-repeat z-0"></div>
      
      {/* Filtros: un poco borroso, apagado y con un tono cálido para encajar con el suelo de madera y la luz de día */}
      <div className="absolute inset-0 bg-amber-900/30 backdrop-blur-[3px] pointer-events-none z-0 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-none z-0"></div>

      {/* Navbar fija */}
      <header className="fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row items-center justify-between px-4 py-3 sm:px-12 bg-white/5 backdrop-blur-md border-b border-white/20 shadow-lg gap-2 md:gap-0">
        <div className="flex items-center gap-3 sm:gap-4">
          <Image
            src="/DriftAle.png"
            alt="DriftAle logo"
            width={48}
            height={48}
            className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] sm:w-[56px] sm:h-[56px]"
            priority
          />
          <span className="text-xl sm:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-100 to-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Búnker Virtigital
          </span>
        </div>

        <nav className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold tracking-wide text-zinc-100">
          <a href="/" className="hover:text-amber-200 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">INICIO</a>
          <a href="/explorar" className="hover:text-amber-200 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">HUB</a>
          <a href="/driftysinvr#novedades" className="hover:text-amber-200 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">NOVEDADES</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex w-full flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center pt-20">
        <div className="flex flex-col items-center justify-center gap-6 max-w-4xl p-8 sm:p-12 bg-black/20 backdrop-blur-sm rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] leading-tight">
            ¿Cómo están muchachos?
          </h1>
          <p className="max-w-2xl text-xl sm:text-2xl leading-relaxed text-amber-50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] font-medium">
            Welcum to Búnker Virtigital
          </p>
          
          <a href="/explorar" className="mt-6 px-8 py-4 bg-amber-600/80 hover:bg-amber-500 text-white rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(217,119,6,0.4)] border border-amber-400/50 backdrop-blur-md">
            Entrar al HUB
          </a>
        </div>
      </main>
    </div>
  );
}
