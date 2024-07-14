import { NextResponse, type NextRequest } from 'next/server'


export function middleware(req: NextRequest) {
    if(req.nextUrl.pathname === '/backend') {
        return NextResponse.redirect(new URL('/dashboard', req.url))
    }
}
