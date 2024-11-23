'use client';

import { useAppSelector } from '@/store/hooks';

export default function FinalPage() {
  const answers = useAppSelector((state) => state.user.quiz);

  return (
    <div className="final-page p-6 bg-backgroundLight dark:bg-backgroundDark">
      <h1 className="text-2xl font-semibold text-textPrimary mb-4">Your answers:</h1>
      <ul className="answers-list space-y-4">
        {answers.map((quizItem) => (
          <li
            key={quizItem.slug}
            className="answer-item p-4 border border-buttonBorder rounded-lg shadow-shadowDefault bg-white dark:bg-foreground"
          >
            <strong className="text-lg text-textPrimary capitalize">
              {quizItem.slug.replaceAll('-', ' ')}
            </strong>
            <div className="mt-2 text-textSecondary">
              {quizItem.answer || 'No answer'}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
