import { NextResponse } from 'next/server'
import { auth } from './lib/auth' 
import { headers } from "next/headers";

// Rename the function from 'middleware' to 'proxy'
export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers() 
    })

    if (!session) {
        // Redirecting to your non-hyphenated signup/signin path
        return NextResponse.redirect(new URL('/signin', request.url))
    }

    // Crucial: allow the request to proceed if session exists
    return NextResponse.next();
}

export const config = {
    // Specifically protecting the profile route
    matcher: ['/profile'],
}