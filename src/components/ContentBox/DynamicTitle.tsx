'use client';

import { useDynamicContent } from '@/hooks/useDynamicContent';
import Title from '../Title';

interface Props {
  text: string;
}

export default function DynamicTitle({ text }: Props) {
  const dynamicText = useDynamicContent(text);

  return <Title text={dynamicText} />;
}
