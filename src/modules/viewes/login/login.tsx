import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { AuthContext } from '../../../contexts/auth/auth.context';
import { ToastContext } from '../../../contexts/toast/toast.context';
import { Button } from '../../components/button/button';
import { Checkbox } from '../../components/checkbox/checkbox';
import { FormGroup } from '../../components/form-group/form-group';
import InputText from '../../components/input-text/input-text';
import { Line } from '../../components/line/line';
import { Link } from '../../components/link/link';
import { Subtitle } from '../../components/subtitle/subtitle';
import { Title } from '../../components/title/title';
import { BoxCreateAccount, BoxPassword, BoxSocial, LoginCard, LoginContent, LoginMain, ShowPassword } from './login.style';

const createLoginFormSchema = z.object({
  email: z.string().nonempty('Email obrigatório').email('Formato de email inválido').toLowerCase(),
  pass: z.string().min(6, 'A senha precisa no mínimo 6 caracteres'),
});

type CreateLoginFormData = z.infer<typeof createLoginFormSchema>;

const LoginViewer = () => {
  const toast = useContext(ToastContext);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateLoginFormData>({
    resolver: zodResolver(createLoginFormSchema),
  });

  const [showPass, setShowPass] = useState(false);

  const createLogin = (data: any) => {
    console.log(data);
  };

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <>
      <LoginCard>
        <LoginContent>
          <LoginMain onSubmit={handleSubmit(createLogin)}>
            <Title>Faça o login da conta</Title>
            <Subtitle>Informe seu email e senha para acessar</Subtitle>

            <FormGroup title="Endereço de email" labelFor="email">
              <InputText
                {...register('email', { required: true })}
                name="email"
                id="email"
                type="email"
                placeholder="email@seuemail.com"></InputText>
              {/* {errors.email && <span>{errors.email.message}</span>} */}
            </FormGroup>

            <FormGroup title="Senha" labelFor="pass">
              <InputText
                {...register('pass')}
                name="pass"
                id="pass"
                type={showPass ? 'text' : 'password'}
                placeholder="*********"></InputText>
              <ShowPassword>
                <span onClick={handleShowPass}>{showPass ? 'Ocultar' : 'Mostrar'}</span>
              </ShowPassword>
              {/* {errors.pass && <span>{errors.pass.message}</span>} */}
            </FormGroup>

            <FormGroup>
              <BoxPassword>
                <Checkbox id="rememberPassword" label="Lembrar senha"></Checkbox>
                <Link href="#">Esqueceu a senha?</Link>
              </BoxPassword>
            </FormGroup>

            <FormGroup>
              <Button color="blue" type="submit">
                Acessar
              </Button>
            </FormGroup>
          </LoginMain>
          <Line title="Acesse usando" />

          <BoxSocial>
            <Button color="blue">Google +</Button>
            <Button color="blue">Facebook</Button>
            <Button color="blue">Twitter</Button>
          </BoxSocial>

          <BoxCreateAccount>
            Não tem uma conta? <Link href="/create-account">Crie uma conta</Link>
          </BoxCreateAccount>
        </LoginContent>
      </LoginCard>
    </>
  );
};

export default LoginViewer;
