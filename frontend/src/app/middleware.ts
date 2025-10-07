import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Daftar route yang valid/ada
  const validRoutes = [
    '/',
    '/about',
    '/products',
    '/contact',
    '/blog',
    '/gallery',
    '/investment',
    '/not-found'
  ];

  // Cek apakah route valid (termasuk dynamic routes)
  const isValidRoute = validRoutes.some(route => {
    if (route === pathname) return true;
    // Untuk dynamic routes seperti /blog/[slug]
    if (route.includes('[') && pathname.startsWith(route.split('[')[0])) return true;
    return false;
  });

  // Jika route tidak valid, redirect ke /not-found
  if (!isValidRoute) {
    const url = request.nextUrl.clone();
    url.pathname = '/not-found';
    return NextResponse.redirect(url);
  }

  // Tambahkan header untuk menandai halaman 404
  const response = NextResponse.next();
  if (pathname === '/not-found') {
    response.headers.set('x-hide-layout', 'true');
  }
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};