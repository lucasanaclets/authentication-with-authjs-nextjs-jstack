import { RegisterForm } from "@/components/register-form";
import { db } from "@/lib/db";
import { hash } from "bcryptjs";
import z from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.email(),
  password: z.string().min(8),
});

export default function Page() {
  async function registerAction(formData: FormData) {
    "use server";

    const { success, data, error } = schema.safeParse(
      Object.fromEntries(formData)
    );

    if (!success) {
      return;
    }

    const { name, email, password } = data;

    const hashedPassowrd = await hash(password, 12);

    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassowrd,
      },
    });
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <RegisterForm registerAction={registerAction} />
      </div>
    </div>
  );
}
