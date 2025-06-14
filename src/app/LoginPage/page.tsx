"use client"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage(){
    const router = useRouter();
    const [error, setError] = useState('');

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      username: e.target.username.value,
      password: e.target.password.value,
    });

    if (res?.error) {
      setError("Invalid credentials");
    } else {
      router.push("/BlogListPage");
    }
  };


    return(
      <>
      <div className="p-10 text-3xl flex flex-col">
      <form onSubmit={handleLogin}>
      <h2>Enter Username and Password</h2>
      <input className="border-4 border-amber-600" name="username" placeholder="Username" />
      <input className="border-4 border-amber-600" type="password" name="password" placeholder="Password" />
      <div ><button className="border-4 border-amber-600" type="submit">Login</button></div>
      {error && <p>{error}</p>}
      </form>
      </div>
      </>
    )
}