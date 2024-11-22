import Quote from '../Quote';
import Text from '../Text';
import Title from '../Title';
import { Screen } from '@/types';
import clsx from 'clsx';
import AnswerItem from '../AnswerItem';

interface Props {
  screen: Screen;
  slug: string;
}

export default function ContentBox({ screen, slug }: Props) {
  return (
    <>
      <div
        className={clsx(
          !!screen.quotes ? 'text-center' : 'text-left',
          'flex flex-col gap-[20px]',
        )}
      >
        <Title text={screen.title} />
        {!!screen.description && <Text text={screen.description} />}
        {!!screen.quotes && <Quote text={screen.quotes} />}
      </div>
      {screen.options.length > 0 && (
        <ul className="flex flex-col justify-center align-middle gap-[20px]">
          {screen.options.map((option) => (
            <li key={option.value} className="w-[100%]">
              <AnswerItem
                pageName={slug}
                answer={option.value}
                nextPage={option.nextSlug}
              >
                {option.value}
              </AnswerItem>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
