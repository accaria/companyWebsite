"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

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

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <div className="w-full max-w-md bg-white bg-opacity-90 rounded-xl shadow-lg p-8 border border-gray-200">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Enter Username and Password
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <input
            className="border-4 border-amber-600 rounded-lg px-4 py-2 text-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
            name="username"
            placeholder="Username"
          />
          <input
            className="border-4 border-amber-600 rounded-lg px-4 py-2 text-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button
            className="border-4 border-amber-600 bg-amber-600 text-white font-semibold py-2 rounded-lg hover:bg-amber-700 transition duration-300"
            type="submit"
          >
            Login
          </button>

          {error && (
            <p className="text-red-600 text-center font-medium mt-2">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
}
