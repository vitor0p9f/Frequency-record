import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import Button from '../../components/Button';
import AuthContext from '../../contexts/auth';
import Container,{ InputBlock, MailInput, PasswordInput } from './styles';

const Signin_page: React.FC = () => {
  const {signIn,loading} = useContext(AuthContext);
  const [email,setEmail] = useState<string>();
  const [password,setPassword] = useState<string>();
  const route = useRouter();

  async function handleSignIn(event){
    event.preventDefault();
    await signIn(email,password);

    if(!loading){
      route.push('/dashboard');
    }
  }

  return (
    <Container>
      <form onSubmit={handleSignIn}>
        <h1>Faça login em nossa plataforma para continuar !</h1>
        <InputBlock>
          <label>Email</label>
          <MailInput
            type="email" 
            placeholder="Digite aqui o seu email" 
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputBlock>
        <InputBlock>
          <label>Senha</label>
          <PasswordInput 
            type="password" 
            required
            onChange={(e)=> setPassword(e.target.value)}
            placeholder='Digite aqui a sua senha'
          />
        </InputBlock>
        <Button>Entrar</Button>
      </form>
    </Container>
  );
}

export default Signin_page;