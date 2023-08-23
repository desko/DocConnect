import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import SectionWave from '../components/SectionWave/SectionWave';
import SystemMessage from '../components/SystemMessage/SystemMessage';


const UserVerification = () => {
  const {token} = useParams();
  const [type, setType] = useState('SUCCESSFUL_VERIFICATION');

  useEffect(() => {
    // token verification
  }, [token]);


  return (
    <SectionWave>
      <SystemMessage type={type}/>
    </SectionWave>

  );
};

export default UserVerification;
