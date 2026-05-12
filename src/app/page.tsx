import Image from "next/image";

export default function Home() {
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
            DriftySinVR
          </span>
        </div>

        <nav className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold tracking-wide text-zinc-300">
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

        <main className="relative z-10 flex w-full flex-col items-center justify-center px-4 sm:px-6 text-center pt-32 pb-16">
          <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 max-w-4xl p-4 sm:p-12">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] leading-tight">
              Un Andaluz sin más
            </h1>
            <p className="max-w-2xl text-lg sm:text-xl md:text-2xl leading-relaxed text-zinc-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">
              Buenos Días, buenas tardes, y buenas noches. Soy Drifty y bienvenidos a esta Web mierdera :D
            </p>
          </div>
        </main>

        {/* Indicador de Scroll */}
        <div className="absolute bottom-4 sm:bottom-8 left-0 w-full flex justify-center items-center gap-2 sm:gap-8 px-2 text-zinc-300 opacity-90 animate-bounce z-10 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-8 sm:w-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span className="text-xs sm:text-base font-semibold tracking-wide text-center">Puedes bajar para ver más cosas, pishita :P</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-8 sm:w-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  Yo existo porque si no existiera no estaría existiendo pero como existo existiendo no puedo negar mi existencia cuando mi presencia confirma mi existencia y la falta de no existencia 🥀. - DriftySinVR 2020
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-6 drop-shadow-md">
              Novedades Novedosas
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Todo lo nuevo y reciente hecho/relacionado a mi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {[
              {
                id: 1,
                title: "Tipos De Jugadores en Rec Room #6",
                desc: "Una gran despedida a esta serie",
                url: "https://youtu.be/bqIHllSI1Tg?si=CFuoAC3G5OOTim-D",
                thumb: "https://img.youtube.com/vi/bqIHllSI1Tg/maxresdefault.jpg",
                date: "07 Mayo 2026"
              },
              {
                id: 2,
                title: "RecRoyaleHispano: La Última Edición",
                desc: "Llegó la hora de luchar entre todos por última vez",
                url: "https://www.youtube.com/watch?v=Bg0yslXzYjI",
                thumb: "https://img.youtube.com/vi/Bg0yslXzYjI/maxresdefault.jpg",
                date: "01 Mayo 2026"
              },
              {
                id: 3,
                title: "Rec Royale Importado a VRChat",
                desc: "Este está a mejor calidad gracias a mi nuevo método",
                url: "https://vrchat.com/home/world/wrld_543c2cb9-03c5-4e3b-80f5-3f005a9e1a1d/info",
                thumb: "https://api.vrchat.cloud/api/1/file/file_0cde9b87-992d-46aa-8aa5-67b56395499f/1/file",
                date: "29 Abril 2026"
              },
              {
                id: 4,
                title: "Completando los 5 Quests de RRO",
                desc: "Una última vez, por la risas esta vez...",
                url: "https://www.youtube.com/live/2nCQeio2-o8?si=WksvvdHNXcdEWBsw",
                thumb: "https://img.youtube.com/vi/2nCQeio2-o8/maxresdefault.jpg",
                date: "25 Abril 2026"
              },
              {
                id: 5,
                title: "Rec Center Importado a VRChat",
                desc: "También es mi primer mapa, necesita mejoras",
                url: "https://vrchat.com/home/world/wrld_cc537de5-d540-407d-ae06-dfe0352a0cb9/info",
                thumb: "https://api.vrchat.cloud/api/1/file/file_b0f40e1a-8705-4021-8a5b-930ae454a8f3/3/file",
                date: "24 Abril 2026"
              },
              {
                id: 6,
                title: "Directos antes del Cierre de Rec Room",
                desc: "Con Rec Room cerrando el 1 de Junio, haré directos más seguidos jugándolo",
                url: "https://www.youtube.com/live/LAy55NU57ns?si=UpVOV7XAuhCtgsnr",
                thumb: "https://img.youtube.com/vi/LAy55NU57ns/maxresdefault.jpg",
                date: "3 Abril 2026"
              },
            ].map((video) => (
              <a href={video.url} target="_blank" rel="noopener noreferrer" key={video.id} className="flex flex-col bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:bg-zinc-800/80 transition-all hover:scale-[1.02] cursor-pointer shadow-lg group h-full relative">
                <div className="relative w-full h-40 shrink-0 bg-[#0a0f1a] rounded-xl mb-4 flex items-center justify-center text-zinc-600 border border-zinc-800/50 overflow-hidden">
                  {video.thumb ? (
                    <img src={video.thumb} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <span className="text-4xl">🎮</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-green-400 transition-colors">{video.title}</h3>
                <p className="text-zinc-400 text-sm mb-6">{video.desc}</p>
                <div className="mt-auto flex justify-end">
                  <span className="text-xs text-zinc-500/80 font-medium tracking-wide">{video.date}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Sección de Redes Sociales */}
          <div className="flex flex-col items-center mt-24 pt-12 border-t border-zinc-800/50 w-full">
            <h3 className="text-2xl font-bold text-white mb-8 drop-shadow-sm">Mis Redes Sociales</h3>
            <div className="flex gap-8 sm:gap-12 items-center">
              <a href="#" title="YouTube" className="relative w-12 h-12 sm:w-16 sm:h-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(255,0,0,0.6)] transition-all duration-300">
                <Image src="/Youtube_logo.png" alt="YouTube" fill className="object-contain" />
              </a>
              <a href="#" title="X" className="relative w-10 h-10 sm:w-14 sm:h-14 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all duration-300">
                <Image src="/X_icon.png?v=2" alt="X" fill className="object-contain" unoptimized />
              </a>
              <a href="#" title="Instagram" className="relative w-10 h-10 sm:w-14 sm:h-14 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(225,48,108,0.6)] transition-all duration-300">
                <Image src="/Instagram_logo_2022.webp" alt="Instagram" fill className="object-contain" />
              </a>
              <a href="#" title="Discord" className="relative w-12 h-12 sm:w-16 sm:h-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(88,101,242,0.6)] transition-all duration-300">
                <Image src="/discord.png?v=2" alt="Discord" fill className="object-contain" unoptimized />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
