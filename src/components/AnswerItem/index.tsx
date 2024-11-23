'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { PropsWithChildren } from 'react';
import { addAnswer, selectNextSlug, setNextSlug } from '../../store/features/user'; // Import your action
import Link from 'next/link';
import { ScreenTypeName } from '@/types';

interface Props extends PropsWithChildren {
  pageType: ScreenTypeName;
  pageName: string;
  answer: string;
  nextPage: string;
  nextInfoPage: string;
}

export default function AnswerItem({
  pageType,
  pageName,
  answer,
  nextPage,
  nextInfoPage,
  children,
}: Props) {
  const dispatch = useAppDispatch();
  const nextPagePersisted = useAppSelector(selectNextSlug);

  const handleAddAnswer = () => {
    dispatch(addAnswer({ slug: pageName, answer }));
    console.log(pageType);
    if (pageType === 'quiz') {
      dispatch(setNextSlug(nextPage));
    }
  };

  return (
    <Link
      href={`/quiz/${nextInfoPage || nextPage || nextPagePersisted}`}
      className={
        'w-[100%] inline-block text-center border-1 border-buttonBorder bg-buttonDefault font-normal text-button-text text-buttonText px-5 py-3 rounded-2xl shadow-shadowDefault active:bg-gradient-to-r active:from-primary active:to-accent active:text-white'
      }
      onClick={handleAddAnswer}
    >
      {children}
    </Link>
  );
}
