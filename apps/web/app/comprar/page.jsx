import { rifas } from "../../lib/rifas";

export default function ComprarPage({ searchParams }) {
  const rifa = rifas.find((r) => r.id === searchParams.rifa);

  if (!rifa) {
    return <div className="p-6">Rifa no encontrada</div>;
  }

  return (
    <main className="space-y-6 text-center">
      <h1 className="text-3xl font-bold">🎉 Compra Exitosa</h1>
      <p className="text-lg">Has comprado un ticket para:</p>

      <h2 className="text-2xl font-semibold">{rifa.titulo}</h2>

      <a
        href="/"
        className="inline-block mt-6 py-3 px-6 bg-black text-white rounded-xl hover:bg-gray-800 transition"
      >
        Volver al inicio
      </a>
    </main>
  );
}
