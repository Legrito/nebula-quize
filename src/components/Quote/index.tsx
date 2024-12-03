import { PropsWithChildren } from 'react';

export default function QuoteBox({ children }: PropsWithChildren) {
  return (
    <blockquote className="font-bold text-lg text-blockquote before:content-['“'] after:content-['”']">
      {children}
    </blockquote>
  );
}
