import "./globals.css";

export const metadata = {
  title: "Rifas Pro",
  description: "Compra tickets para ganar premios increíbles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="max-w-4xl mx-auto p-6">{children}</body>
    </html>
  );
}
