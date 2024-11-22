'use client';

import { useAppDispatch } from '@/store/hooks';
import { PropsWithChildren } from 'react';
import { addAnswer } from '../../store/features/user'; // Import your action
import Link from 'next/link';

interface Props extends PropsWithChildren {
  pageName: string;
  answer: string;
  nextPage: string;
}

export default function AnswerItem({ pageName, answer, nextPage, children }: Props) {
  const dispatch = useAppDispatch();

  const handleAddAnswer = () => {
    dispatch(addAnswer({ slug: pageName, answer }));
  };

  return (
    <Link
      href={`/quiz/${nextPage}`}
      className={
        'w-[100%] inline-block text-center border-1 border-buttonBorder bg-buttonDefault font-normal text-button-text text-textPrimary px-5 py-3 rounded-2xl shadow-shadowDefault active:bg-gradient-to-r active:from-primary active:to-accent active:text-white'
      }
      onClick={handleAddAnswer}
    >
      {children}
    </Link>
  );
}
