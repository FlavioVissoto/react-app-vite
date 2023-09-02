import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '../../components/button/button';
import { Checkbox } from '../../components/checkbox/checkbox';
import { FormGroup } from '../../components/form-group/form-group';
import InputText from '../../components/input-text/input-text';
import { Link } from '../../components/link/link';
import { Subtitle } from '../../components/subtitle/subtitle';
import { Title } from '../../components/title/title';
import {
  BoxLogin,
  CreateAccountCard,
  CreateAccountContent,
  CreateAccountForm,
  InLineItens,
  LabelShowPass,
  Terms,
} from './create-account.style';

const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
          <CreateAccountForm onSubmit={handleSubmit(createAccount)}>
            <Title>Criar uma conta</Title>
            <Subtitle>Insira seus dados pessoais para criar uma conta</Subtitle>

            <FormGroup title="Nome" labelFor="name">
              <InputText {...register('name', { required: true })} name="name" id="name" type="text" placeholder="Seu nome"></InputText>
            </FormGroup>

            <FormGroup title="Email" labelFor="email">
              <InputText
                {...register('email', { required: true })}
                name="email"
                id="email"
                type="email"
                placeholder="email@seuemail.com"></InputText>
            </FormGroup>

            <InLineItens>
              <FormGroup title="CPF" labelFor="cpf">
                <InputText
                  {...register('cpf', { required: true })}
                  name="cpf"
                  id="cpf"
                  type="text"
                  placeholder="xxx.xxx.xxx-xx"></InputText>
              </FormGroup>
              <FormGroup title="Telefone" labelFor="phone">
                <InputText
                  {...register('phone', { required: true })}
                  name="phone"
                  id="phone"
                  type="text"
                  placeholder="+55 (xx) xxxxx-xxxx"></InputText>
              </FormGroup>
            </InLineItens>

            <FormGroup title="Senha" labelFor="pass">
              <InputText
                {...register('pass')}
                name="pass"
                id="pass"
                type={showPass ? 'text' : 'password'}
                placeholder="*********"></InputText>
              <div>
                <LabelShowPass>
                  <span onClick={handleShowPass}>{showPass ? 'Ocultar' : 'Mostrar'}</span>
                </LabelShowPass>
              </div>
            </FormGroup>

            <FormGroup>
              <Terms>
                <Checkbox id="privacy-policy" label="Estou ciente e CONCORDO com os termos de aceite e poíticas de privacidade"></Checkbox>
                <Link href="/privacy-policy">Política de Privacidade</Link>
              </Terms>
            </FormGroup>

            <FormGroup>
              <Button color="blue" type="submit">
                Cadastrar
              </Button>
            </FormGroup>
          </CreateAccountForm>

          <BoxLogin>
            Já tem uma conta? <Link href="/login">Faça o login</Link>
          </BoxLogin>
        </CreateAccountContent>
      </CreateAccountCard>
    </>
  );
};

export default CreateAccount;
