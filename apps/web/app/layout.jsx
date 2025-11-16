export const metadata = { title: "Rifas" };

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: 'Inter, system-ui, Arial' }}>
        {children}
      </body>
    </html>
  );
}
