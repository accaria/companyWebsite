import axios from "axios";
import { setCookie } from "cookies-next";
import { ILogin } from "@/interface/user.interface";

export async function LoginService(params:ILogin){
    try{
        const { data, headers } = await axios.post(
      `${process.env.BACKENDLESS_API}/users/login`,
      {
        login: params.email,
        password: params.password,
      }
    );

    
    const userToken = headers["user-token"];
    if (userToken) {
      setCookie("user-token", userToken);
    }

    return {
      user: data,
      token: userToken,
    };
  } catch (error: any) {
    const message = error?.response?.data?.message || "Login failed";
    throw new Error(message);
  }
}


/*

export async function LoginService(params:ILogin){
    try{
        const {data} = await axios.get(
            `${process.env.BACKENDLESS_API_URL}/Users?where=email%3D'${params.email}'%20and%20password%3D'${params.password}'`
        );
        if (data.length === 0) throw new Error("User not Found");
        const secret = process.env.NEXT_PUBLIC_SECRET_KEY || "";
*/