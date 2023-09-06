import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { Form } from '../../components/Forms';
import { Line } from '../../components/line/line';
import { Subtitle } from '../../components/subtitle/subtitle';
import { Title } from '../../components/title/title';
import { ToastContext } from '../../components/toast/toast.context';
import { AuthContext } from '../../contexts/auth/auth.context';
import { BoxCreateAccount, BoxPassword, BoxSocial, InputPass, LoginCard, LoginContent, LoginMain, ShowPassword } from './login.style';

const createLoginFormSchema = z.object({
  email: z.string().nonempty('Email obrigatório').email('Formato de email inválido').toLowerCase(),
  pass: z.string().min(6, 'A senha precisa no mínimo 6 caracteres'),
});

type CreateLoginFormData = z.infer<typeof createLoginFormSchema>;

const LoginViewer = () => {
  const toast = useContext(ToastContext);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const loginForm = useForm<CreateLoginFormData>({
    resolver: zodResolver(createLoginFormSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = loginForm;

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
          <FormProvider {...loginForm}>
            <LoginMain onSubmit={handleSubmit(createLogin)}>
              <Title>Faça o login da conta</Title>
              <Subtitle>Informe seu email e senha para acessar</Subtitle>

              <Form.FormGroup title="Endereço de email" labelFor="email">
                <Form.InputText
                  {...register('email', { required: true })}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="email@seuemail.com"></Form.InputText>
                {/* {errors.email && <span>{errors.email.message}</span>} */}
              </Form.FormGroup>

              <Form.FormGroup title="Senha" labelFor="pass">
                <InputPass>
                  <Form.InputText
                    {...register('pass')}
                    name="pass"
                    id="pass"
                    type={showPass ? 'text' : 'password'}
                    placeholder="*********"></Form.InputText>
                  <ShowPassword>
                    <span onClick={handleShowPass}>{showPass ? 'Ocultar' : 'Mostrar'}</span>
                  </ShowPassword>
                  {/* {errors.pass && <span>{errors.pass.message}</span>} */}
                </InputPass>
              </Form.FormGroup>

              <Form.FormGroup>
                <BoxPassword>
                  {/* <Form.Checkbox id="rememberPassword" label="Lembrar senha"></Form.Checkbox> */}
                  <Form.Link href="#">Esqueceu a senha?</Form.Link>
                </BoxPassword>
              </Form.FormGroup>

              <Form.FormGroup>
                <Form.Button name="acessar" color="blue" type="submit">
                  Acessar
                </Form.Button>
              </Form.FormGroup>
            </LoginMain>
          </FormProvider>
          <Line title="Acesse usando" />

          <BoxSocial>
            <Form.Button name="google" color="blue">
              Google +
            </Form.Button>
            <Form.Button name="facebook" color="blue">
              Facebook
            </Form.Button>
            <Form.Button name="twitter" color="blue">
              Twitter
            </Form.Button>
          </BoxSocial>

          <BoxCreateAccount>
            Não tem uma conta? <Form.Link href="/create-account">Crie uma conta</Form.Link>
          </BoxCreateAccount>
        </LoginContent>
      </LoginCard>
    </>
  );
};

export default LoginViewer;
