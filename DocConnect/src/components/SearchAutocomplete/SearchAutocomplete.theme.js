export const autocompleteDropdown = {
  border: '.1rem solid',
  position: 'absolute',
  zIndex: '2',
  top: '100%',
  left: '0',
  width: '100%',
  maxH: '30rem',
  overflowY: 'auto',
  borderTop: '0',
  borderColor: 'currentColor',
  borderBottomRadius: '.4rem',
  bgColor: 'white',
  transition: 'opacity .4s',
};

export const autocompleteDropdownItem = {
  width: '100%',
  height: 'auto',
  padding: '.5rem',
  textAlign: 'left',
  justifyContent: 'flex-start',
  fontSize: 'inherit',
  bgColor: 'transparent',
  transition: 'background-color .4s',
  _hover: {
    bgColor: 'red.200',
  },
};

export const autocompleteCoverButton = {
  bgColor: 'red.200',
  _hover: {
    bgColor: 'red.100',
  },
};

export const autocompleteCover = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  bgColor: 'white',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 1rem',
  borderRadius: '.4rem',
  border: '.1rem solid',
  borderColor: 'quicksilver.400',
  _hover: {
    borderColor: 'bodyText',
  },
};
