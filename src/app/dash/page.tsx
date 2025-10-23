import { auth } from "@/lib/auth";
import { AppBar } from "./_components/AppBar";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <pre className="p-6">{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
