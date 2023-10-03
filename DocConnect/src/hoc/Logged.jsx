import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {HOME_PAGE} from '../common/routes';

export const Logged = ({children}) => {
  const {token} = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() =>{
    if (token) {
      navigate(HOME_PAGE);
    }
  }, [token, navigate]);


  return children;
};
