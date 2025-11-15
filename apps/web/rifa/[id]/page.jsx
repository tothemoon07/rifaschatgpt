import { supabase } from "@/app/web/lib/supabase";

export default async function RifaPage({ params }) {
  const { id } = params;

  // Obtener la rifa por ID
  const { data: rifa } = await supabase
    .from("rifas")
    .select("*")
    .eq("id", id)
    .single();

  if (!rifa) {
    return <p>Rifa no encontrada</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>{rifa.titulo}</h1>
      <p>{rifa.descripcion}</p>
      <img src={rifa.imagen} width="300" />

      <h2>Números disponibles</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 10,
          marginTop: 20,
        }}
      >
        {Array.from({ length: rifa.total_numeros }).map((_, index) => {
          const numero = index + 1;
          const ocupado = rifa.numeros_ocupados?.includes(numero);

          return (
            <a
              key={numero}
              href={`/rifa/${id}/numero/${numero}`}
              style={{
                padding: "10px",
                borderRadius: 8,
                background: ocupado ? "#ff7d7d" : "#7dffa1",
                textAlign: "center",
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
            >
              {numero}
            </a>
          );
        })}
      </div>
    </div>
  );
}
