import { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../contexts/auth/auth.context';
import { ToastContext } from '../../../contexts/toast/toast.context';
import { Button } from '../../components/button/button';
import { Checkbox } from '../../components/checkbox/checkbox';
import { FormGroup } from '../../components/form-group/form-group';
import { InputText } from '../../components/input-text/input-text';
import { Line } from '../../components/line/line';
import { Link } from '../../components/link/link';
import { BoxCreateAccount, BoxPassword, BoxSocial, LoginCard, LoginMain, LoginSubTitle, LoginTitle, ShowPassword } from './login.styles';

const LoginViewer = () => {
  const toast = useContext(ToastContext);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePassInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setPass(e.target.value);
  };

  const handleLogin = async () => {
    if (!email || !pass) {
      toast.open({
        content: 'Informe o email e senha!',
        icon: 'alert',
      });
      return;
    }

    try {
      const userData = await auth.signin(email, pass);
      if (userData) {
        navigate('/');
      } else {
        toast.open({
          content: 'Email ou senha incorretos ou email não cadastrado!',
        });
      }
    } catch (error: Error) {
      toast.open({
        icon: 'error',
        content: 'Erro desconhecido.',
      });
    }
  };

  return (
    <>
      <LoginCard>
        <LoginMain>
          <LoginTitle>Faça o login da conta</LoginTitle>
          <LoginSubTitle>Informe seu email e senha para acessar</LoginSubTitle>

          <FormGroup title="Endereço de email">
            <InputText onChange={handleEmailInput} type="email" placeholder="email@seuemail.com"></InputText>
          </FormGroup>

          <FormGroup title="Senha">
            <InputText onChange={handlePassInput} type="password" placeholder="*********"></InputText>
            <ShowPassword>
              <span>Mostrar</span>
            </ShowPassword>
          </FormGroup>

          <FormGroup>
            <BoxPassword>
              <Checkbox id="rememberPassword" themeSize="md" label="Lembrar senha"></Checkbox>
              <Link href="#">Esqueceu a senha?</Link>
            </BoxPassword>
            <Button onClick={handleLogin} color="blue" type="button">
              Acessar
            </Button>
          </FormGroup>

          <Line title="Acesse usando" />

          <BoxSocial>
            <Button color="blue">Google +</Button>
            <Button color="blue">Facebook</Button>
            <Button color="blue">Twitter</Button>
          </BoxSocial>

          <BoxCreateAccount>
            Não tem uma conta? <Link href="/create-account">Crie uma conta</Link>
          </BoxCreateAccount>
        </LoginMain>
      </LoginCard>
    </>
  );
};

export default LoginViewer;
