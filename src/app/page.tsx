import { FIRST_QUESTION_SLUG } from '@/constants';
import { redirect } from 'next/navigation';

export default function Home() {
  redirect(`/quiz/${FIRST_QUESTION_SLUG}`);
}
