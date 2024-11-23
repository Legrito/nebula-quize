import { selectAnswerBySlug } from '@/store/features/user';
import { useAppSelector } from '@/store/hooks';
import capitalize from 'lodash.capitalize';

export const useDynamicContent = (template: string): string => {
  const gender = useAppSelector(selectAnswerBySlug('gender'));
  const parent = useAppSelector(selectAnswerBySlug('parent'));
  const singleParent = useAppSelector(selectAnswerBySlug('parent-single'));
  const hasChildren =
    parent?.toLowerCase() === 'yes' || singleParent?.toLowerCase() === 'yes';

  const genderText = !gender
    ? 'everyone'
    : gender.toLowerCase() === 'male'
      ? 'man'
      : 'woman';
  const parentText = hasChildren ? 'who have children' : '';

  return template
    .replace('{gender}', genderText)
    .replace('{Gender}', capitalize(genderText))
    .replace('{who have children (if have children)}', parentText);
};
