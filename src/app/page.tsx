
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#181818] font-sans">
      <header className="w-full py-6 px-4 flex items-center justify-between bg-gradient-to-r from-red-600 to-white dark:from-red-700 dark:to-gray-900 shadow-md">
        <div className="flex items-center gap-3">
          <Image src="/globe.svg" alt="Logo Perú" width={40} height={40} />
          <span className="text-2xl font-bold text-red-700 tracking-tight">Informalidad Perú</span>
        </div>
        <nav className="hidden md:flex gap-8 text-base font-medium">
          <a href="#dashboard" className="hover:text-red-700 transition-colors">Dashboard</a>
          <a href="#analisis" className="hover:text-red-700 transition-colors">Análisis</a>
          <a href="#ia" className="hover:text-red-700 transition-colors">IA</a>
          <a href="#herramientas" className="hover:text-red-700 transition-colors">Herramientas</a>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 gap-10">
        <section className="max-w-2xl text-center flex flex-col items-center gap-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-red-700 mb-2">Plataforma Integral para Combatir la Informalidad</h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200">
            Usamos <span className="font-semibold text-red-700">Inteligencia Artificial</span> y datos públicos para impulsar la formalización en Perú.<br />
            Descubre métricas, análisis geográfico, predicciones y herramientas prácticas para tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a href="#dashboard" className="bg-red-700 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-red-800 transition">Ver Dashboard</a>
            <a href="#calculadora" className="bg-white border border-red-700 text-red-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-red-50 transition">Calculadora de Beneficios</a>
          </div>
        </section>

        <section id="dashboard" className="w-full max-w-4xl mt-12">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Métricas de Informalidad</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-red-50 dark:bg-gray-900 rounded-lg p-6 flex flex-col items-center shadow">
              <span className="text-3xl font-bold text-red-700">72%</span>
              <span className="text-gray-700 dark:text-gray-200 mt-2">Tasa de informalidad laboral</span>
            </div>
            <div className="bg-red-50 dark:bg-gray-900 rounded-lg p-6 flex flex-col items-center shadow">
              <span className="text-3xl font-bold text-red-700">18 regiones</span>
              <span className="text-gray-700 dark:text-gray-200 mt-2">Cobertura nacional</span>
            </div>
            <div className="bg-red-50 dark:bg-gray-900 rounded-lg p-6 flex flex-col items-center shadow">
              <span className="text-3xl font-bold text-red-700">+1M</span>
              <span className="text-gray-700 dark:text-gray-200 mt-2">Empresas analizadas</span>
            </div>
          </div>
        </section>

        <section id="analisis" className="w-full max-w-4xl mt-16">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Análisis Geográfico</h2>
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow flex flex-col sm:flex-row gap-8 items-center">
            <Image src="/globe.svg" alt="Mapa Perú" width={120} height={120} />
            <div className="flex-1 text-left">
              <p className="text-gray-700 dark:text-gray-200 mb-2">Visualiza la informalidad por regiones y descubre dónde enfocar esfuerzos de formalización.</p>
              <a href="#mapa" className="text-red-700 font-semibold hover:underline">Ver mapa interactivo</a>
            </div>
          </div>
        </section>

        <section id="ia" className="w-full max-w-4xl mt-16">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Predicciones de IA</h2>
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow flex flex-col gap-4">
            <p className="text-gray-700 dark:text-gray-200">Nuestra IA analiza tendencias y te recomienda acciones para formalizar tu empresa.</p>
            <a href="#recomendaciones" className="text-red-700 font-semibold hover:underline">Ver recomendaciones personalizadas</a>
          </div>
        </section>

        <section id="herramientas" className="w-full max-w-4xl mt-16">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Herramientas para la Formalización</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-red-50 dark:bg-gray-900 rounded-lg p-6 shadow flex flex-col gap-2">
              <span className="font-semibold text-red-700">Registro Empresarial</span>
              <span className="text-gray-700 dark:text-gray-200">Guía paso a paso para formalizar tu negocio en Perú.</span>
            </div>
            <div className="bg-red-50 dark:bg-gray-900 rounded-lg p-6 shadow flex flex-col gap-2">
              <span className="font-semibold text-red-700">Calculadora de Beneficios</span>
              <span className="text-gray-700 dark:text-gray-200">Descubre los beneficios económicos y legales de formalizarte.</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 px-4 flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-red-600 to-white dark:from-red-700 dark:to-gray-900 mt-8">
        <span className="text-gray-100 font-medium">&copy; 2025 Informalidad Perú. Todos los derechos reservados.</span>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#" className="hover:underline text-gray-100">Contacto</a>
          <a href="#" className="hover:underline text-gray-100">Privacidad</a>
        </div>
      </footer>
    </div>
  );
}
