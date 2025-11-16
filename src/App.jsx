import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
        <footer className="py-10 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} hmd services gmbh. Alle Rechte vorbehalten.</p>
            <div className="flex gap-4 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">Impressum</a>
              <a href="#" className="hover:text-gray-900">Datenschutz</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
