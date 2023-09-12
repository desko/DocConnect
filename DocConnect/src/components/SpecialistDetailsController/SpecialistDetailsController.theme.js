export const cardContainer = {
  borderRadius: '1.5rem',
  overflow: 'hidden',
  bgColor: 'white',
  boxShadow: '0 .2rem .2rem 0 rgba(0,0,0, .25)',
  mb: '3.5rem',
};

export const cardContainerBanner = {
  pb: {
    base: '13rem',
    md: '18%',
    lg: '15%',
  },
  bgGradient: 'linear(to-r, red.400, red.500)',
};

export const cardContainerFlex = {
  flexDirection: {
    base: 'column',
    md: 'row',
  },
  justifyContent: 'space-between',
  padding: {
    base: '3rem 2rem',
    md: '3rem 2rem',
    lg: '4.8rem 4.5rem 3.5rem',
  },
};

export const cardContainerHeader = {
  flex: {
    md: '0 0 33%',
    lg: '0 0 25%',
    xl: '0 0 20%',
  },
  textAlign: {
    base: 'center',
    md: 'initial',
  },
  pb: {
    base: '2rem',
    md: '0',
  },
};

export const cardHeaderFigure = {
  position: 'relative',
  aspectRatio: '1',
  borderRadius: '50%',
  border: '1rem solid',
  borderColor: 'white',
  overflow: 'hidden',
  lineHeight: '0',
  maxW: {
    base: 'min(25rem, 100%)',
    md: 'unset',
  },
  mb: '1rem',
  mt: {
    base: '-12.5rem',
    md: '-65%',
    lg: '-75%',
    xl: '-85%',
  },
  mx: {
    base: 'auto',
    md: '0',
  },
};

export const cardHeaderImage = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

export const cardContainerContent = {
  flex: {
    md: '0 0 60%',
    lg: '0 0 65%',
    xl: '0 0 70%',
  },
};

export const cardAddress = {
  alignItems: 'center',
  justifyContent: {
    base: 'center',
    md: 'flex-start',
  },
  as: 'address',
  gap: '.5rem',
  pb: '2rem',
};

export const cardAbout = {
  borderRadius: '1.5rem',
  padding: '3rem',
  bgColor: 'white',
  boxShadow: '0 .2rem .2rem 0 rgba(0,0,0, .25)',
};
