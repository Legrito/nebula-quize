'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  pageName: string;
  isActive?: boolean;
}

export default function Button({ pageName, isActive, children }: Props) {
  const router = useRouter();

  const handleClick = () => router.push(`/quize/${pageName}`);

  return (
    <button
      className={clsx(
        isActive ? 'bg-button-gradient text-buttonText' : 'text-textPrimary',
        'bg-buttonDefault font-medium text-button-text p-4 rounded-lg shadow-button',
        'hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all',
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
