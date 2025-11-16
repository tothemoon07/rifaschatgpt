import { rifas } from "../../../lib/rifas";

export default function RifaPage({ params }) {
  const rifa = rifas.find((r) => r.id === params.id);

  if (!rifa) {
    return <div style={{ padding: 24 }}>Rifa no encontrada</div>;
  }

  return (
    <main style={{ padding: 24 }}>
      <img src={rifa.imagen} style={{ width: 400, borderRadius: 8 }} />
      <h1>{rifa.titulo}</h1>
      <p>{rifa.descripcion}</p>
      <p><strong>Precio por ticket: ${rifa.precio}</strong></p>

      <a
        href={`/comprar?rifa=${rifa.id}`}
        style={{
          display: "inline-block",
          marginTop: 20,
          padding: "10px 20px",
          background: "black",
          color: "white",
          borderRadius: 6,
          textDecoration: "none",
        }}
      >
        Comprar ticket
      </a>
    </main>
  );
}
