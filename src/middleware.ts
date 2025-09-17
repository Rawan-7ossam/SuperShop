import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export async function middleware(request: NextRequest) {

    const token = await getToken({req:request , secret: process.env.NEXTAUTH_SECRET})
    if(!token){
         return NextResponse.redirect(new URL('/signin', request.url))
    }else{
          return NextResponse.next();
    }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/products" , "/" , "/categories" , "/brands" , "/cart" , "/wishlist"],
}