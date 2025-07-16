import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#181818] font-sans">
      <header className="w-full py-6 px-4 flex items-center justify-between bg-gray-900 text-white shadow-md">
        <div className="flex items-center gap-3">
          <Image src="/globe.svg" alt="Logo Perú" width={40} height={40} />
          <span className="text-2xl font-bold text-white tracking-tight">Informalidad Perú</span>
        </div>
        <nav className="hidden md:flex gap-8 text-base font-medium">
          <a href="/" className="hover:text-red-400 transition-colors">Inicio</a>
          <a href="/dashboard" className="text-red-400 font-bold">Dashboard</a>
          <a href="/calculadora" className="hover:text-red-400 transition-colors">Calculadora</a>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 gap-10">
        <section className="max-w-2xl text-center flex flex-col items-center gap-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-red-700 mb-2">Dashboard de Informalidad</h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200">
            Visualiza las principales métricas y tendencias sobre la informalidad en Perú.
          </p>
        </section>

        <section className="w-full max-w-4xl mt-12">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Métricas Clave</h2>
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

        <section className="w-full max-w-4xl mt-16">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Tendencia de Formalización</h2>
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow flex flex-col items-center">
            <span className="text-gray-700 dark:text-gray-200 mb-2">(Aquí irá un gráfico de tendencia próximamente)</span>
            <div className="w-full h-48 bg-red-100 dark:bg-gray-800 rounded flex items-center justify-center text-red-700 font-semibold">
              Gráfico de línea (placeholder)
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
