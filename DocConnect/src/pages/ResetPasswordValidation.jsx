
import {useParams} from 'react-router-dom';
import SectionWave from '../components/SectionWave/SectionWave';
import SystemMessage from '../components/SystemMessage/SystemMessage';

const ResetPasswordValidation = () => {
  const {status} = useParams();
  return (
    <SectionWave>
      <SystemMessage type={status === 'success' ? 'SUCCESSFUL_PASSWORD_RESET' : 'INVALID_TOKEN_PASSWORD_RESET'}/>
    </SectionWave>
  );
};

export default ResetPasswordValidation;
