'use client';

import { useParams, useRouter } from 'next/navigation';
import ChevronIcon from './ChevronIcon';
import { FIRST_QUESTION_SLUG } from '@/constants';

export default function BackButton() {
  const router = useRouter();
  const { slug } = useParams();

  if (slug && slug === FIRST_QUESTION_SLUG) {
    return null;
  }

  const handleGoBack = () => router.back();

  return (
    <button onClick={handleGoBack}>
      <ChevronIcon />
    </button>
  );
}
