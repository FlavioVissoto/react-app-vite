import { Button } from '../../components/button/button';
import { Checkbox } from '../../components/checkbox/checkbox';
import { FormGroup } from '../../components/form-group/form-group';
import { InputText } from '../../components/input-text/input-text';
import { Line } from '../../components/line/line';
import { Link } from '../../components/link/link';
import { BoxPassword, BoxSocial, LoginCard, LoginMain, LoginSubTitle, LoginTitle, ShowPassword } from '../../styles/login.styles';

const LoginViewer = () => {
  return (
    <>
      <LoginCard>
        <LoginMain>
          <LoginTitle>Faça o login da conta</LoginTitle>
          <LoginSubTitle>Informe seu email e senha para acessar</LoginSubTitle>

          <FormGroup title="Endereço de email">
            <InputText type="email" placeholder="app@yourmail.com"></InputText>
          </FormGroup>

          <FormGroup title="Senha">
            <InputText type="password" placeholder="*********"></InputText>
            <ShowPassword>
              <span>show</span>
            </ShowPassword>
          </FormGroup>

          <FormGroup>
            <BoxPassword>
              <Checkbox label="Lembrar senha"></Checkbox>
              <Link href="#">Esqueceu a senha?</Link>
            </BoxPassword>
            <Button color="blue" type="button">
              Acessar
            </Button>
          </FormGroup>

          <Line title="Acesse usando" />

          <BoxSocial>
            <Button color="blue">Google +</Button>
            <Button color="blue">Facebook</Button>
            <Button color="blue">Twitter</Button>
          </BoxSocial>

          <FormGroup>
            Não tem uma conta? <Link href="#">Crie uma conta</Link>
          </FormGroup>
        </LoginMain>
      </LoginCard>
    </>
  );
};

export default LoginViewer;
