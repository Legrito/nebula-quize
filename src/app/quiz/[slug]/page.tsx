import quizConfig from '@/data/quiz.json';
import clsx from 'clsx';
import ThemeContainer from '@/components/ThemeContainer';
import ContentBox from '@/components/ContentBox';
import { Screen } from '@/types';

export async function generateStaticParams() {
  return quizConfig.screens.map((screen) => ({
    slug: screen.slug,
  }));
}

export default function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const screen = quizConfig.screens.find((s) => s.slug === params.slug) as Screen;

  if (!screen) {
    return <p>Page not found</p>;
  }

  return (
    <article
      className={clsx(
        screen.type.name === 'info' ? 'gap-[40px]' : 'gap-[30px]',
        'flex flex-col w-[100%] lg:w-[330px] px-[20px] lg:px-0',
      )}
    >
      <ThemeContainer theme={screen.type.theme}>
        <ContentBox screen={screen} slug={params.slug} />
      </ThemeContainer>
    </article>
  );
}
