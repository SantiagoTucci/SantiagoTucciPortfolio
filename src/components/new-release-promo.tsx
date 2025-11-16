"use client"

export function NewReleasePromo() {
  return (
    <section id="faq" className="pb-120 pt-24">
      <section className="mt-3 w-full">
        <div className="mx-auto max-w-4xl rounded-[40px] border border-black/5 dark:border-white/20 p-2 shadow-sm">
          <div className="relative mx-auto h-[400px] max-w-4xl overflow-hidden rounded-[38px] border border-black/5 dark:border-white/20 bg-cyan-600 p-2 shadow-sm">

            {/* Glow cyan suave */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(8, 145, 178, 0.25), transparent 70%)",
            }}
          />

          {/* Film grain */}
          <div
            className="absolute inset-0 z-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10">
            <div className="mt-12 text-center">
              <h2 className="text-4xl font-semibold text-white mb-4">
                ¿Querés tu Página Web o Software?
              </h2>

              <p className="text-white/70 mb-10 text-lg">
                Desarrollo sitios modernos, rápidos y con alto impacto visual.
              </p>

              {/* Icono minimal animado: FLECHA HACIA ABAJO */}
              <svg
                width="70"
                height="70"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto mb-6 stroke-white/80"
              >
                <path
                  d="M12 5v14M5 12l7 7 7-7"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* CTA */}
              <div className="flex items-center justify-center">
                <a href="https://wa.me/1127082987" target="_blank">
                  <div className="group border-white/40 bg-white/20 backdrop-blur-sm flex h-[64px] cursor-pointer items-center gap-2 rounded-full border p-[11px] mt-6 transition-all">
                    <div className="bg-gray-600 flex h-[43px] items-center justify-center rounded-full px-4">
                      <p className="flex items-center gap-2 font-medium tracking-tight text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="animate-spin"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                        Contactame
                      </p>
                    </div>
                    <div className="flex size-[26px] items-center justify-center rounded-full border-2 border-white/40 transition-all ease-in-out group-hover:ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all ease-in-out group-hover:rotate-45"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Texteado grande, estilo marca */}
            <h1
              className="absolute inset-x-0 mt-[120px] text-center text-[100px] font-semibold text-transparent pointer-events-none sm:mt-[50px] sm:text-[180px]"
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.2)",
              }}
              aria-hidden="true"
            >
              contactame
            </h1>

            <h1
              className="absolute inset-x-0 mt-[120px] text-center text-[100px] font-semibold text-white/10 pointer-events-none sm:mt-[50px] sm:text-[180px]"
              aria-hidden="true"
            >
              contactame
            </h1>
          </div>
        </div>
      </div>
    </section>
    </section>
  )
}
