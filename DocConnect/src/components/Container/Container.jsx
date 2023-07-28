import {Container as ContainerChakra} from '@chakra-ui/react';

const Container = ({children}) => {
  return (
    <ContainerChakra
      maxW='138rem'
      px='2rem'
      w='100%'
      mx='auto'
    >
      {children}
    </ContainerChakra>
  );
};

export default Container;
