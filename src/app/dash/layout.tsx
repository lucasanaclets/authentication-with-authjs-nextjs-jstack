import { SessionProvider } from "next-auth/react";
import { AppBar } from "./_components/AppBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
}
