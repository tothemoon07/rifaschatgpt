export default function NumeroPage({ params }) {
  const { id, num } = params;

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h1>Comprar número #{num}</h1>

      <a
        href={`/api/comprar?id=${id}&numero=${num}`}
        style={{
          padding: 15,
          background: "black",
          color: "white",
          borderRadius: 8,
          textDecoration: "none",
          fontSize: 20,
        }}
      >
        Proceder al pago
      </a>
    </div>
  );
}
