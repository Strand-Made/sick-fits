import styled from 'styled-components';
import RequestReset from '../components/RequestReset';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const GridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const LoginPage = () => {
  let hello;
  return (
    <GridStyled>
      <SignIn />
      <SignUp />
      <RequestReset />
    </GridStyled>
  );
};

export default LoginPage;
