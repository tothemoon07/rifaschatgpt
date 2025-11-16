import { rifas } from "../../lib/rifas";

export default function ComprarPage({ searchParams }) {
  const rifa = rifas.find((r) => r.id === searchParams.rifa);

  if (!rifa) {
    return <div style={{ padding: 24 }}>Rifa no encontrada</div>;
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Compra exitosa</h1>
      <p>Has comprado un ticket para:</p>
      <h2>{rifa.titulo}</h2>

      <a href="/" style={{ marginTop: 20, display: "inline-block" }}>
        Volver al inicio
      </a>
    </main>
  );
}
