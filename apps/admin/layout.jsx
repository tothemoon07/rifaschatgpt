export const metadata = {
  title: "Panel de Administración",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
