import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getUserToken(){

    const encodeToken = (await cookies()).get("next-auth.session-token")?.value;
    
        const decodeToken = await  decode({token:encodeToken , secret:process.env.AUTH_SECRET!});
    
        const token = decodeToken?.token

        return token
}