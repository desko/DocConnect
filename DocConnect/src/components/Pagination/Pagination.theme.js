export const paginatorStyle ={
  margin: '2rem 0',
  gap: {
    base: '.8rem',
    md: '1.6rem',
  },
  justifyContent: 'center',
};

export const numberButtonStyle = {
  backgroundColor: 'transparent',
  padding: '.2rem',
  fontSize: {
    base: '1.2rem',
    md: '1.6rem',
  },
  lineHeight: '1',
  color: 'red.500',
  borderRadius: '50%',
  width: '2.4rem',
  height: '2.4rem',
  minWidth: 'unset',
  minHeight: 'unset',
  _hover: {
    backgroundColor: 'red.100',
  },
  _active: {
    backgroundColor: 'red.500',
    color: '#fff',
  },
  cursor: 'pointer',
};

export const arrowButtonStyle = {
  display: 'flex',
  backgroundColor: 'transparent',
  padding: '.2rem',
  fontSize: {
    base: '1.2rem',
    md: '1.6rem',
  },
  color: 'red.500',
  borderRadius: '50%',
  width: '2.4rem',
  height: '2.4rem',
  minWidth: 'unset',
  minHeight: 'unset',
  cursor: 'pointer',
  _hover: {
    backgroundColor: 'red.100',
  },
};

export const iconButtonStyle = {
  width: 'var(--icon-width, 100%)',
  height: 'auto',
  lineHeight: '0',
};
