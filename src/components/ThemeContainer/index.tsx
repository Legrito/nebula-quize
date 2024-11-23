'use client';

import React, { PropsWithChildren, useEffect } from 'react';
import useApplyTheme from '@/hooks/useApplyTheme';
import { ScreenTypeTheme } from '@/types';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectTheme, setTheme } from '@/store/features/user';

interface Props extends PropsWithChildren {
  theme: ScreenTypeTheme;
}

export default function PageThemeContainer({ theme, children }: Props) {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(selectTheme);
  useApplyTheme(theme);

  useEffect(() => {
    if (currentTheme !== theme) {
      dispatch(setTheme(theme));
    }
  }, [theme]);

  return <>{children}</>;
}
