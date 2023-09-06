import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form } from '../../components/Forms';
import { Subtitle } from '../../components/subtitle/subtitle';
import { Title } from '../../components/title/title';
import { ValidatorCPF } from '../../shared/validators/cpf.validator';
import {
  BoxLogin,
  CreateAccountCard,
  CreateAccountContent,
  CreateAccountForm,
  InLineItens,
  InputPass,
  LabelShowPass,
  Terms,
} from './create-account.style';

const createAccountFormSchema = z
  .object({
    name: z.string().nonempty('Nome obrigatório'),
    email: z
      .string()
      .nonempty('Email obrigatório')
      .email('Formato invalido de email')
      .refine(
        async (value: string) => {
          return true;
        },
        {
          message: 'Email já cadastrado',
        }
      ),
    cpf: z
      .string()
      .nonempty('CPF obrigatório')
      .refine(
        (value: string) => {
          return ValidatorCPF(value);
        },
        {
          message: 'CPF inválido',
        }
      ),
    phone: z.string().nonempty('Telefone obrigatório'),
    password: z.string().nonempty('Senha obrigatório').min(6, 'Mínimo de 6 caracteres'),
    confirmPassword: z.string().nonempty('Senha obrigatório').min(6, 'Mínimo de 6 caracteres'),
    terms: z.literal(true, {
      errorMap: () => ({ message: 'Você deve aceitar os Termos e Condições' }),
    }),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      path: ['confirmPassword'],
      message: 'As senhas não conferem',
    }
  );

type CreateAccountFormData = z.infer<typeof createAccountFormSchema>;

const CreateAccount = () => {
  const createAccountForm = useForm<CreateAccountFormData>({
    resolver: zodResolver(createAccountFormSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = createAccountForm;

  const [showPass, setShowPass] = useState(false);

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const createAccount = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <CreateAccountCard>
        <CreateAccountContent>
          <FormProvider {...createAccountForm}>
            <CreateAccountForm onSubmit={handleSubmit(createAccount)}>
              <Title>Criar uma conta</Title>
              <Subtitle>Insira seus dados pessoais para criar uma conta</Subtitle>

              <Form.FormGroup title="Nome" labelFor="name" error={{ show: errors.name ? true : false, message: errors.name?.message }}>
                <Form.InputText
                  {...register('name', { required: true })}
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Seu nome"></Form.InputText>
              </Form.FormGroup>

              <Form.FormGroup title="Email" labelFor="email" error={{ show: errors.email ? true : false, message: errors.email?.message }}>
                <Form.InputText
                  {...register('email', { required: true })}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="email@seuemail.com"></Form.InputText>
              </Form.FormGroup>

              <InLineItens>
                <Form.FormGroup title="CPF" labelFor="cpf" error={{ show: errors.cpf ? true : false, message: errors.cpf?.message }}>
                  <Form.InputText
                    {...register('cpf', { required: true })}
                    name="cpf"
                    id="cpf"
                    type="text"
                    placeholder="xxx.xxx.xxx-xx"></Form.InputText>
                </Form.FormGroup>
                <Form.FormGroup
                  title="Telefone"
                  labelFor="phone"
                  error={{ show: errors.phone ? true : false, message: errors.phone?.message }}>
                  <Form.InputText
                    {...register('phone', { required: true })}
                    name="phone"
                    id="phone"
                    type="text"
                    placeholder="+55 (xx) xxxxx-xxxx"></Form.InputText>
                </Form.FormGroup>
              </InLineItens>

              <Form.FormGroup
                title="Senha"
                labelFor="pass"
                error={{ show: errors.password ? true : false, message: errors.password?.message }}>
                <InputPass>
                  <Form.InputText
                    {...register('password')}
                    name="password"
                    id="password"
                    type={showPass ? 'text' : 'password'}
                    placeholder="*********"></Form.InputText>
                  <LabelShowPass>
                    <span onClick={handleShowPass}>{showPass ? 'Ocultar' : 'Mostrar'}</span>
                  </LabelShowPass>
                </InputPass>
              </Form.FormGroup>

              <Form.FormGroup
                labelFor="confirmPassword"
                error={{ show: errors.confirmPassword ? true : false, message: errors.confirmPassword?.message }}>
                <Form.InputText
                  {...register('confirmPassword')}
                  name="confirmPassword"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirme a senha"></Form.InputText>
              </Form.FormGroup>

              <Form.FormGroup error={{ show: errors.terms ? true : false, message: errors.terms?.message }}>
                <Terms>
                  <Form.Checkbox
                    id="terms"
                    label="Estou ciente e CONCORDO com os termos de aceite e poíticas de privacidade"
                    {...register('terms')}></Form.Checkbox>
                  <Form.Link href="/privacy-policy">Política de Privacidade</Form.Link>
                </Terms>
              </Form.FormGroup>

              <Form.FormGroup>
                <Form.Button name="submit" color="blue" type="submit">
                  Cadastrar
                </Form.Button>
              </Form.FormGroup>
            </CreateAccountForm>
          </FormProvider>

          <BoxLogin>
            Já tem uma conta? <Form.Link href="/login">Faça o login</Form.Link>
          </BoxLogin>
        </CreateAccountContent>
      </CreateAccountCard>
    </>
  );
};

export default CreateAccount;
