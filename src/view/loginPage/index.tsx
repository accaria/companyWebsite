"use client"
import LoginPage from "@/components/login"

export default function LoginView(){


    return (
        <>
        <div className="p-10">
        <h1 className="text-3xl mt-5">Login to access Blog List</h1>
        <h1 className="text-2xl mt-5">ログインしてください</h1>
        <div className="flex flex-col justify-center items-start">
        <div className="mt-10">
        </div>
        </div>
        </div>
        </>
    )
}


/*
"use client"
import { LoginService } from "@/service/login.auth"
import { ILogin } from "@/interface/user.interface"
import { useState,useEffect } from "react"
import { getCookie } from "cookies-next"
import { useRouter } from "next/router"

export default function LoginView(){
  const [loginForm, setLoginForm] = useState<ILogin>({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

   useEffect(() => {
    const token = getCookie("user-token");
    if (token) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await LoginService(loginForm);
      console.log("Welcome:", result.user);
      router.push("/BlogListPage");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

    return (
        <>
        <div className="p-10">
        <h1 className="text-3xl mt-5">Login to access Blog List</h1>
        <h1 className="text-2xl mt-5">ログインしてください</h1>
        <div className="flex flex-col justify-center items-start">
        <div className="mt-10">
        <input
        name="email"
        type="email"
        placeholder="Email"
        value={loginForm.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={loginForm.password}
        onChange={handleChange}
      />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
        
        </div>
        </div>
        </div>
        </>
    )
}
*/