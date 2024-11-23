import { selectAnswerBySlug } from '@/store/features/user';
import { useAppSelector } from '@/store/hooks';

export const useDynamicContent = (template: string): string => {
  const gender = useAppSelector(selectAnswerBySlug('gender'));
  const hasChildren = useAppSelector(selectAnswerBySlug('parent'));

  console.log(gender, hasChildren);

  const genderText = !gender
    ? 'Everyone'
    : gender.toLowerCase() === 'male'
      ? 'Man'
      : 'Woman';
  const parentText = hasChildren?.toLowerCase() === 'yes' ? 'who have children' : '';

  return template
    .replace('{Gender}', genderText)
    .replace('{who have children (if have children)}', parentText);
};
