import { selectAnswerBySlug } from '@/store/features/user';
import { useAppSelector } from '@/store/hooks';
import capitalize from 'lodash.capitalize';

export const useDynamicContent = (template: string): string => {
  const gender = useAppSelector(selectAnswerBySlug('gender'));
  const hasChildren = useAppSelector(selectAnswerBySlug('parent'));

  const genderText = !gender
    ? 'everyone'
    : gender.toLowerCase() === 'male'
      ? 'man'
      : 'woman';
  const parentText = hasChildren?.toLowerCase() === 'yes' ? 'who have children' : '';

  return template
    .replace('{gender}', genderText)
    .replace('{Gender}', capitalize(genderText))
    .replace('{who have children (if have children)}', parentText);
};
