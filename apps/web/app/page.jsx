import { rifas } from "../lib/rifas";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Rifas disponibles</h1>

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {rifas.map((r) => (
          <a
            key={r.id}
            href={`/rifa/${r.id}`}
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: 16,
              width: 250,
              textDecoration: "none",
              color: "black",
            }}
          >
            <img src={r.imagen} style={{ width: "100%", borderRadius: 6 }} />
            <h3>{r.titulo}</h3>
            <p>${r.precio} por ticket</p>
          </a>
        ))}
      </div>
    </main>
  );
}
