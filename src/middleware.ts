import { FIRST_QUESTION_SLUG } from '@/constants';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL(`/quiz/${FIRST_QUESTION_SLUG}`, request.url));
}

export const config = {
  matcher: ['/', '/quiz'],
};
