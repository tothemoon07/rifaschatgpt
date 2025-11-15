import { NextResponse } from "next/server";
import { supabase } from "@/app/web/lib/supabase";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const numero = parseInt(searchParams.get("numero"));

  // Verificar si la rifa existe
  const { data: rifa } = await supabase
    .from("rifas")
    .select("*")
    .eq("id", id)
    .single();

  if (!rifa) {
    return NextResponse.json({ error: "Rifa no encontrada" });
  }

  // Verificar si está ocupado
  if (rifa.numeros_ocupados.includes(numero)) {
    return NextResponse.json({ error: "Número ya ocupado" });
  }

  // Marcar número como ocupado (simulación de pago)
  const nuevos = [...rifa.numeros_ocupados, numero];

  await supabase
    .from("rifas")
    .update({ numeros_ocupados: nuevos })
    .eq("id", id);

  return NextResponse.redirect(`/rifa/${id}?ok=1`);
}
