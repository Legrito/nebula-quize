import Quote from '../Quote';
import Text from '../Text';
import { Screen } from '@/types';
import clsx from 'clsx';
import AnswerItem from '../AnswerItem';
import DynamicTitle from './DynamicTitle';

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
        <DynamicTitle text={screen.title} />
        {!!screen.description && <Text>{screen.description}</Text>}
        {!!screen.quotes && <Quote>{screen.quotes}</Quote>}
      </div>
      {screen.options.length > 0 && (
        <ul className="flex flex-col justify-center align-middle gap-[20px]">
          {screen.options.map((option) => (
            <li key={option.value} className="w-[100%]">
              <AnswerItem
                pageType={screen.type.name}
                pageName={slug}
                answer={option.value}
                nextPage={option.nextSlug}
                nextInfoPage={screen.nextPage}
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
