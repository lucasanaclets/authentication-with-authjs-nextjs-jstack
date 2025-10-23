"use client";

import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { signOutAction } from "../_actions/signOutAction";

export function AppBar() {
  const session = useSession();

  return (
    <header className="h-20 flex justify-between border-b items-center px-6">
      <span>Olá, {session.data?.user?.name}</span>
      <Button size="lg" onClick={signOutAction}>
        Sair
      </Button>
    </header>
  );
}
