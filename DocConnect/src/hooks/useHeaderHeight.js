import {useEffect, useRef} from 'react';


export const useHeaderHeight = () => {
  const headerRef = useRef(null);

  const updateHeaderHeight = () => {
    document.documentElement.style.setProperty('--header-height', `${headerRef.current.clientHeight}px`);
  };

  useEffect(() => {
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    return (() => {
      window.removeEventListener('resize', updateHeaderHeight);
    });
  }, []);

  return {headerRef};
};
