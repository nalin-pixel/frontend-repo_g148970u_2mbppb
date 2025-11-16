import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sende ...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const formData = Object.fromEntries(new FormData(e.currentTarget))
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('Danke! Wir melden uns zeitnah.')
        e.currentTarget.reset()
      } else {
        setStatus('Es gab ein Problem. Bitte erneut versuchen.')
      }
    } catch (err) {
      setStatus('Es gab ein Problem. Bitte erneut versuchen.')
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Lassen Sie uns sprechen</h2>
            <p className="mt-3 text-gray-600">Beschreiben Sie Ihr Vorhaben – wir kommen mit konkreten Ideen und einem klaren Plan auf Sie zurück.</p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="rounded-xl border p-4"><div className="text-gray-500">E-Mail</div><div className="font-medium">hello@hmd-services.de</div></div>
              <div className="rounded-xl border p-4"><div className="text-gray-500">Standort</div><div className="font-medium">Deutschland</div></div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border bg-white p-6 shadow-sm space-y-4">
            <div>
              <label className="block text-sm text-gray-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-gray-700">E-Mail</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Nachricht</label>
              <textarea name="message" required rows="4" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button className="w-full rounded-full bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition">Nachricht senden</button>
            {status && <p className="text-sm text-gray-600">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
