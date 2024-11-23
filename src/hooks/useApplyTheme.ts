import { useEffect } from 'react';

function useApplyTheme(screenTheme: 'light' | 'dark') {
  useEffect(() => {
    if (screenTheme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, [screenTheme]);
}

export default useApplyTheme;
