import {Heading} from '@chakra-ui/react';

const CardContent = ({content}) => {
  return (
    <Heading
      as='h3'
      size='md'
    >{content}</Heading>
  );
};

export default CardContent;
