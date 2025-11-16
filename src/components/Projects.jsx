export default function Projects() {
  const items = [
    { name: 'Industrieportfolio', tag: 'Web', result: ' +120% Anfragen', color: 'from-blue-500 to-cyan-400' },
    { name: 'SaaS-Dashboard', tag: 'App', result: ' +35% Aktivität', color: 'from-indigo-500 to-purple-500' },
    { name: 'Automatisierung', tag: 'Ops', result: ' -40% Aufwand', color: 'from-emerald-500 to-lime-400' },
  ]

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Ausgewählte Projekte</h2>
            <p className="mt-3 text-gray-600">Konkrete Ergebnisse – messbar, nachhaltig, überzeugend.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-2 text-sm font-medium hover:bg-black transition">Mit uns sprechen</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((p) => (
            <div key={p.name} className="rounded-2xl overflow-hidden border bg-white shadow-sm">
              <div className={`h-40 bg-gradient-to-tr ${p.color}`} />
              <div className="p-6">
                <div className="text-xs uppercase tracking-wide text-gray-500">{p.tag}</div>
                <h3 className="mt-1 text-xl font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-3 inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium">Ergebnis: {p.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
