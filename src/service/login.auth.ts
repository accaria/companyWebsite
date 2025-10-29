import axios from "axios";
import { setCookie } from "cookies-next";
import { ILogin } from "@/interface/user.interface";

export async function LoginService(params: ILogin) {
  try {
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
