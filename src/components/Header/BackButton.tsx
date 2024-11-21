'use client';

import { useRouter } from 'next/navigation';
import ChevronIcon from './ChevronIcon';

export default function BackButton() {
  const router = useRouter();

  const handleGoBack = () => router.back();

  return (
    <button onClick={handleGoBack}>
      <ChevronIcon />
    </button>
  );
}
