import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-[url('/ElFInal.jpg')] dark:bg-cover dark:bg-center dark:bg-no-repeat dark:bg-fixed">
      <header className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-6 py-4 sm:px-12 dark:bg-[#0a0a0a]/50 dark:backdrop-blur-md border-b dark:border-white/10 shadow-lg">
        <div className="flex items-center gap-4">
          <Image
            src="/DriftAle.png"
            alt="DriftAle logo"
            width={56}
            height={56}
            className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
            priority
          />
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            DriftySinVR
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-zinc-300">
          <a href="#" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">INICIO</a>
          <a href="#" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">EXPLORAR</a>
          <a href="#" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">NOVEDADES</a>
        </nav>
      </header>
      <div className="absolute inset-0 dark:bg-black/60 dark:backdrop-blur-[2px] pointer-events-none z-0"></div>
      <main className="relative z-10 flex flex-1 w-full flex-col items-center justify-center py-20 px-6 text-center mt-16">
        <div className="flex flex-col items-center justify-center gap-8 max-w-4xl p-8 sm:p-12">
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            Un Andaluz sin más
          </h1>
          <p className="max-w-2xl text-xl sm:text-2xl leading-relaxed text-zinc-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">
            Buenos Días, buenas tardes, y buenas noches. Soy Drifty y bienvenidos a esta Web mierdera :D
          </p>
        </div>
      </main>
    </div>
  );
}
