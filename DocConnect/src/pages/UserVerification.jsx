import {useSearchParams} from 'react-router-dom';
import {useEffect, useCallback, useRef, useState} from 'react';
import SectionWave from '../components/SectionWave/SectionWave';
import SystemMessage from '../components/SystemMessage/SystemMessage';
import {emailVarificationUser} from '../services/servicesUsers';
import {useDispatch} from 'react-redux';
import {logOut} from '../store/features/userSlice';

const UserVerification = () => {
  const dispatch = useDispatch();
  dispatch(logOut());
  const effectRan = useRef(false);
  const [searchParams] = useSearchParams();
  const [type, setType] = useState('LOADING');
  const userId = searchParams.get('userId');
  const token = searchParams.get('token').replace(/ /g, '+');

  const verificationResponse = useCallback(async () => {
    try {
      const response = await emailVarificationUser(userId, token);
      setType(response?.result);
    } catch (error) {
      if (
        error.response?.data.errorMessage === 'INVALID_TOKEN' ||
      error.response?.data.errorMessage === 'ALREADY_VERIFIED'
      ) {
        setType(error.response.data.errorMessage);
      } else {
        setType('ERROR');
      }
    }
  }, [userId, token]);


  useEffect(() => {
    if (!effectRan.current) {
      verificationResponse();
      effectRan.current = true;
    }
  }, [verificationResponse]);

  return (
    <SectionWave>
      <SystemMessage type={type}/>
    </SectionWave>

  );
};

export default UserVerification;


