import { rifas } from "../../../lib/rifas";

export default function RifaPage({ params }) {
  const rifa = rifas.find((r) => r.id === params.id);

  if (!rifa) {
    return <div className="p-6">Rifa no encontrada</div>;
  }

  return (
    <main className="space-y-8">
      <img
        src={rifa.imagen}
        className="w-full h-72 object-cover rounded-2xl shadow-md"
      />

      <h1 className="text-3xl font-bold">{rifa.titulo}</h1>

      <p className="text-gray-700">{rifa.descripcion}</p>

      <p className="text-xl font-semibold">
        Precio por ticket: ${rifa.precio}
      </p>

      <a
        href={`/comprar?rifa=${rifa.id}`}
        className="inline-block py-3 px-6 bg-black text-white rounded-xl hover:bg-gray-800 transition"
      >
        Comprar ticket
      </a>
    </main>
  );
}
