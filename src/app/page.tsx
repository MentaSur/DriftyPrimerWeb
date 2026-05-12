import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans text-zinc-50 dark:bg-[#080b12] min-h-screen">
      {/* Navbar fija */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 sm:px-12 dark:bg-[#0a0a0a]/80 dark:backdrop-blur-md border-b dark:border-white/10 shadow-lg">
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

      {/* Hero Section con la imagen */}
      <section className="relative flex flex-col items-center justify-center min-h-screen dark:bg-[url('/ElFInal.jpg')] dark:bg-cover dark:bg-bottom dark:bg-no-repeat">
        <div className="absolute inset-0 dark:bg-black/60 dark:backdrop-blur-[2px] pointer-events-none z-0"></div>
        {/* Degradado para transición suave al color de abajo */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#080b12] to-transparent pointer-events-none z-0"></div>

        <main className="relative z-10 flex w-full flex-col items-center justify-center px-6 text-center pt-24 pb-12">
          <div className="flex flex-col items-center justify-center gap-8 max-w-4xl p-8 sm:p-12">
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              Un Andaluz sin más
            </h1>
            <p className="max-w-2xl text-xl sm:text-2xl leading-relaxed text-zinc-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">
              Buenos Días, buenas tardes, y buenas noches. Soy Drifty y bienvenidos a esta Web mierdera :D
            </p>
          </div>
        </main>

        {/* Indicador de Scroll */}
        <div className="absolute bottom-8 left-0 w-full flex justify-center items-center gap-8 text-zinc-300 opacity-90 animate-bounce z-10 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span className="text-sm sm:text-base font-semibold tracking-wide">Puedes bajar para ver más cosas, pishita :P</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Sección inferior con color sólido que continúa el fondo */}
      <section className="relative z-10 w-full min-h-screen bg-[#080b12] flex flex-col items-center py-20 px-6">
        <div className="max-w-5xl w-full flex flex-col gap-24">

          {/* Sección ¿Quién Soy? */}
          <div className="flex flex-col gap-10">
            <h2 className="text-4xl sm:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-md">
              ¿Quién Soy?
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 mt-8">
              {/* Placeholder Foto de Perfil */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 shrink-0 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border-4 border-zinc-700/50 flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(74,222,128,0.15)] hover:scale-105 transition-transform duration-500">
                <Image
                  src="/PlaceHolder Perfil.jpg"
                  alt="DriftySinVR Foto de Perfil"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Descripción */}
              <div className="flex flex-col gap-8 text-center lg:text-left max-w-2xl">
                <p className="text-xl sm:text-2xl text-zinc-200 leading-relaxed font-medium drop-shadow-md">
                  Os habla un chaval de 18 años Español de ESPAÑAAAA. Estudiante de Ingeniería Informática y próximo creador de Reke Rum. Me gusta la naturaleza y jugar, me llaman cachofaifa y me gusta el pan 🥖.
                </p>
                <p className="text-xl sm:text-2xl text-zinc-400 leading-relaxed italic drop-shadow-md">
                  Yo existo porque si no existiera no estaría existiendo pero como existo existiendo no puedo negar mi existencia cuando mi presencia confirma mi existencia y la falta de no existencia 🥀.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-6 drop-shadow-md">
              Explora mi contenido
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Aquí encontrarás los mejores momentos, trolleos y locuras en Realidad Virtual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:bg-zinc-800/80 transition-all hover:scale-[1.02] cursor-pointer shadow-lg">
                <div className="w-full h-40 bg-[#0a0f1a] rounded-xl mb-4 flex items-center justify-center text-zinc-600 border border-zinc-800/50">
                  <span className="text-4xl">🎮</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-100 mb-2">Trolleo Épico #{i}</h3>
                <p className="text-zinc-400 text-sm">Las mejores risas en VRChat y Rec Room.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
