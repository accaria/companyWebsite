// app/blog/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/authOptions";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/logout";

export default async function LogOutView() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <div className="p-10 space-y-5">
      <h1 className="text-3xl">Welcome to the Blog Page</h1>
      <p>You are logged in as <span className="text-amber-600"> {session.user?.name}</span></p>
      <LogoutButton /> 
    </div>
  );
}
