import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-xs text-blue-700 backdrop-blur">Tech • Portfolio • Modern</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900">
            Digitale Services, die begeistern
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            hmd services gmbh entwickelt moderne, skalierbare Lösungen – von Webauftritten bis zu individuellen Business-Tools. Interaktiv. Zukunftssicher. Nutzerzentriert.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-full bg-blue-600 text-white px-6 py-3 text-sm font-medium shadow hover:bg-blue-700 transition">
              Projekt starten
            </a>
            <a href="#projects" className="inline-flex items-center rounded-full bg-white/80 backdrop-blur text-gray-900 px-6 py-3 text-sm font-medium shadow border hover:bg-white transition">
              Referenzen ansehen
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white" />
    </section>
  )
}
