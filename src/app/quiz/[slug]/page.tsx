import Button from '@/components/Button';

import quizConfig from '../../../data/quiz.json';
import Title from '@/components/Title';
import Text from '@/components/Text';
import QuoteBox from '@/components/QuoteBox';
import clsx from 'clsx';

export async function generateStaticParams() {
  return quizConfig.screens.map((screen) => ({
    slug: screen.slug,
  }));
}

export default function Page({
  params,
}: {
  params: {
    slug: string; // slug of the page
  };
}) {
  const screen = quizConfig.screens.find((s) => s.slug === params.slug);

  if (!screen) {
    return <p>Page not found</p>;
  }

  return (
    <article className="flex flex-col gap-[30px] w-[100%] lg:w-[330px] px-[20px] lg:px-0">
      <div
        className={clsx(
          !!screen.quotes ? 'text-center' : 'text-left',
          'flex flex-col gap-[20px]',
        )}
      >
        <Title text={screen.title} />
        {!!screen.description && <Text text={screen.description} />}
        {!!screen.quotes && <QuoteBox text={screen.quotes} />}
      </div>
      {screen.options.length > 0 && (
        <ul className="flex flex-col justify-center align-middle gap-[20px]">
          {screen.options.map((option) => (
            <li key={option.value} className="w-[100%]">
              <Button pageName={option.nextSlug}>{option.value}</Button>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
