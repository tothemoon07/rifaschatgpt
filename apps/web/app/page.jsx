import { rifas } from "../lib/rifas";

export default function Home() {
  return (
    <main className="space-y-10">
      <h1 className="text-4xl font-bold text-center">
        Rifas Disponibles
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {rifas.map((r) => (
          <a
            key={r.id}
            href={`/rifa/${r.id}`}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
          >
            <img
              src={r.imagen}
              className="w-full h-48 object-cover"
            />

            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold">{r.titulo}</h3>
              <p className="text-gray-600">${r.precio} por ticket</p>

              <button className="mt-2 w-full py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition">
                Ver detalles
              </button>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
