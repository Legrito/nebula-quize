'use client';

import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  pageName: string;
}

export default function Button({ pageName, children }: Props) {
  const router = useRouter();

  const handleClick = () => router.push(`/quiz/${pageName}`);

  return (
    <button
      className={
        'w-[100%] border-1 border-buttonBorder bg-buttonDefault font-normal text-button-text text-textPrimary px-5 py-3 rounded-2xl shadow-shadowDefault active:bg-gradient-to-r active:from-primary active:to-accent active:text-white'
      }
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
