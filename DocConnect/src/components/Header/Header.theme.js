export const headerStyle = {
  position: 'fixed',
  isolation: 'isolate',
  zIndex: '100',
  top: '0',
  left: '0',
  w: '100%',
  py: '1.7rem',
  bgColor: 'red.1000',
  color: 'lavender.400',
};

export const headerInnerStyle = {
  display: {
    base: 'flex',
    lg: 'block',
  },
  flexDirection: {
    base: 'column-reverse',
    lg: 'initial',
  },
  justifyContent: {
    base: 'flex-end',
    lg: 'initial',
  },
  gap: {
    base: '2rem',
    lg: 'initial',
  },
  position: {
    base: 'absolute',
    lg: 'static',
  },
  width: {
    base: '100%',
    lg: 'auto',
  },
  top: {
    base: 'var(--header-height)',
    lg: 'auto',
  },
  transition: {
    base: 'opacity .4s',
    lg: '0',
  },
  left: {
    base: '0',
    lg: 'auto',
  },
  bottom: {
    base: 'calc((100vh - var(--header-height)) * -1)',
    lg: 'auto',
  },
  opacity: {
    base: '0',
    lg: '1',
  },
  pointerEvents: {
    base: 'none',
    lg: 'all',
  },
  zIndex: {
    base: '-1',
    lg: 'initial',
  },
  bgColor: {
    base: 'red.1000',
    lg: 'transparent',
  },
  padding: {
    base: '4rem 2rem',
    lg: '0',
  },
  ml: {
    base: '0',
    lg: 'auto',
  },
  borderTop: {
    base: '.1rem solid',
    lg: '0',
  },
  borderColor: 'currentColor',
  _groupChecked: {
    opacity: {
      base: '1',
      lg: '1',
    },
    pointerEvents: 'all',
  },
};

export const hamburgerButtonChild = {
  position: 'absolute',
  left: '0',
  top: '50%',
  transform: 'translateY(-50%)',
  height: '.2rem',
  width: '100%',
  bgColor: 'currentColor',
  transition: 'opacity .4s',
  _groupChecked: {
    opacity: '0',
  },
};
