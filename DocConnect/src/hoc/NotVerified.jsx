import {useSelector} from 'react-redux';


export const NotVerified = ({children}) => {
  const {isVerified} = useSelector((store) => store.user);

  if (isVerified === 'False') {
    return children;
  }
  return '';
};
