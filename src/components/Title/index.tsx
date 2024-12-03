import { PropsWithChildren } from 'react';

export default function Title({ children }: PropsWithChildren) {
  return <h1 className="text-2xl font-bold dark:text-white">{children}</h1>;
}
