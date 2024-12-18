import { PropsWithChildren } from 'react';

export default function Main({ children }: PropsWithChildren) {
  return (
    <main className="flex items-center justify-center pt-[15px] dark:bg-gray-900">
      {children}
    </main>
  );
}
