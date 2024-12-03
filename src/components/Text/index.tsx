import { PropsWithChildren } from 'react';

export default function Text({ children }: PropsWithChildren) {
  return <p className="text-sm text-secondary">{children}</p>;
}
