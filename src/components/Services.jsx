export default function Services() {
  const services = [
    {
      title: 'Webentwicklung',
      desc: 'Moderne Websites und Webapps mit Fokus auf Performance und UX.',
      features: ['React & Tailwind', 'Headless CMS', 'SEO-Optimierung'],
    },
    {
      title: 'Automatisierung',
      desc: 'Workflows digitalisieren und Prozesse beschleunigen.',
      features: ['Integrationen', 'APIs & Webhooks', 'No-/Low-Code'],
    },
    {
      title: 'Cloud & Infrastruktur',
      desc: 'Skalierbare, sichere Setups für zuverlässige Anwendungen.',
      features: ['CI/CD', 'Monitoring', 'Best Practices'],
    },
  ]

  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Unsere Leistungen</h2>
        <p className="mt-3 text-gray-600 max-w-2xl">Wir liefern ganzheitliche Lösungen – von der Strategie bis zum Live-Betrieb.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-gray-700">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
