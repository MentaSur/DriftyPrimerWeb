import Image from "next/image";

export default function Explorar() {
  return (
    <div className="font-sans text-zinc-50 dark:bg-[#080b12] min-h-screen">
      {/* Navbar fija */}
      <header className="fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row items-center justify-between px-4 py-3 sm:px-12 dark:bg-[#0a0a0a]/80 dark:backdrop-blur-md border-b dark:border-white/10 shadow-lg gap-2 md:gap-0">
        <div className="flex items-center gap-3 sm:gap-4">
          <Image
            src="/DriftAle.png"
            alt="DriftAle logo"
            width={48}
            height={48}
            className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] sm:w-[56px] sm:h-[56px]"
            priority
          />
          <span className="text-xl sm:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Búnker Virtigital
          </span>
        </div>

        <nav className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold tracking-wide text-zinc-300">
          <a href="/#inicio" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">INICIO</a>
          <a href="/explorar" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">HUB</a>
          <a href="/#novedades" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">NOVEDADES</a>
        </nav>
      </header>

      <main className="relative z-10 w-full min-h-screen bg-[#080b12] flex flex-col items-center py-32 px-6">
        <div className="max-w-5xl w-full flex flex-col gap-24">
          <div className="flex flex-col gap-10">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-md">
                HUB
              </h1>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto mt-4">
                El Hub central para navegar por el Búnker
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              {/* Card 1 */}
              <a href="/#inicio" className="flex flex-col items-center justify-center border border-zinc-800 rounded-2xl p-6 transition-all hover:scale-[1.02] hover:border-zinc-600 cursor-pointer shadow-lg group h-80 relative overflow-hidden">
                <img src="/narices.jpg" alt="Quién narices" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-all duration-500 z-0 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-transparent to-transparent z-10 pointer-events-none"></div>
                
                <div className="relative z-20 flex flex-col items-center w-full mt-auto mb-4">
                  <h3 className="text-2xl font-bold text-zinc-100 text-center group-hover:text-green-400 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">¿Quién narices es DriftySinVR?</h3>
                </div>
              </a>

              {/* Card 2 */}
              <div className="flex flex-col items-center justify-center border border-zinc-800 rounded-2xl p-6 transition-all hover:scale-[1.02] hover:border-zinc-600 cursor-pointer shadow-lg group h-80 relative overflow-hidden">
                <img src="/proxi_1.png" alt="Próximamente 1" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all duration-500 z-0 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500 z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-transparent to-transparent z-10 pointer-events-none"></div>

                <div className="relative z-20 flex flex-col items-center w-full mt-auto mb-4">
                  <h3 className="text-2xl font-bold text-zinc-300 text-center group-hover:text-blue-400 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Próximamente</h3>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center justify-center border border-zinc-800 rounded-2xl p-6 transition-all hover:scale-[1.02] hover:border-zinc-600 cursor-pointer shadow-lg group h-80 relative overflow-hidden">
                <img src="/proxi_2.png" alt="Próximamente 2" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all duration-500 z-0 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500 z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-transparent to-transparent z-10 pointer-events-none"></div>

                <div className="relative z-20 flex flex-col items-center w-full mt-auto mb-4">
                  <h3 className="text-2xl font-bold text-zinc-300 text-center group-hover:text-blue-400 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Próximamente</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
