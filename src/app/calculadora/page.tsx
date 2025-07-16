import { useState } from "react";
import Image from "next/image";

export default function Calculadora() {
  const [ingresos, setIngresos] = useState(0);
  const [empleados, setEmpleados] = useState(1);
  const [result, setResult] = useState<null | { ahorro: number; acceso: string[] }> (null);

  const beneficios = [
    "Acceso a créditos y financiamiento",
    "Cobertura de salud y pensión para empleados",
    "Participación en licitaciones públicas",
    "Protección legal y reducción de multas",
    "Mejora de imagen y confianza de clientes"
  ];

  function calcular() {
    // Ejemplo simple: ahorro estimado por formalización
    const ahorro = Math.round(ingresos * 0.08 + empleados * 500);
    setResult({
      ahorro,
      acceso: beneficios
    });
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#181818] font-sans">
      <header className="w-full py-6 px-4 flex items-center justify-between bg-gray-900 text-white shadow-md">
        <div className="flex items-center gap-3">
          <Image src="/globe.svg" alt="Logo Perú" width={40} height={40} />
          <span className="text-2xl font-bold text-white tracking-tight">Informalidad Perú</span>
        </div>
        <nav className="hidden md:flex gap-8 text-base font-medium">
          <a href="/" className="hover:text-red-400 transition-colors">Inicio</a>
          <a href="/dashboard" className="hover:text-red-400 transition-colors">Dashboard</a>
          <a href="/calculadora" className="text-red-400 font-bold">Calculadora</a>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 gap-10">
        <section className="max-w-xl w-full bg-white dark:bg-gray-900 rounded-lg shadow p-8 flex flex-col gap-6">
          <h1 className="text-3xl font-extrabold text-red-700 mb-2 text-center">Calculadora de Beneficios de Formalización</h1>
          <p className="text-gray-700 dark:text-gray-200 text-center">Descubre cuánto podrías ahorrar y qué beneficios obtienes al formalizar tu empresa.</p>

          <div className="flex flex-col gap-4">
            <label className="font-medium text-gray-700 dark:text-gray-200">Ingresos mensuales estimados (S/):
              <input
                type="number"
                min={0}
                value={ingresos}
                onChange={e => setIngresos(Number(e.target.value))}
                className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                placeholder="Ej: 5000"
              />
            </label>
            <label className="font-medium text-gray-700 dark:text-gray-200">Número de empleados:
              <input
                type="number"
                min={1}
                value={empleados}
                onChange={e => setEmpleados(Number(e.target.value))}
                className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                placeholder="Ej: 3"
              />
            </label>
            <button
              onClick={calcular}
              className="mt-4 bg-red-700 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-red-800 transition"
            >
              Calcular beneficios
            </button>
          </div>

          {result && (
            <div className="mt-8 bg-red-50 dark:bg-gray-800 rounded-lg p-6 flex flex-col gap-4">
              <h2 className="text-xl font-bold text-red-700">Resultados estimados</h2>
              <p className="text-gray-700 dark:text-gray-200">Ahorro anual estimado: <span className="font-semibold text-red-700">S/ {result.ahorro}</span></p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
                {result.acceso.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          )}
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
