import { Navbar } from "ui";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar header="Admin" links={[]} />
        {children}
      </body>
    </html>
  );
}
