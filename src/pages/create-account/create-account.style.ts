import styled from 'styled-components';

import { device } from '../../styles/theme/devices';
import { BoxCreateAccount, LoginCard, LoginContent, LoginMain, ShowPassword } from '../login/login.style';

export const CreateAccountCard = styled(LoginCard)``;

export const CreateAccountContent = styled(LoginContent)``;

export const CreateAccountForm = styled(LoginMain)``;

export const InLineItens = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (${device.tablet}) {
    flex-direction: row;
    /* column-gap: ${(x) => x.theme.size.md}; */
  }
  justify-content: space-between;
`;

export const InputPassContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${(x) => x.theme.size['2xs']};
`;

export const InputPass = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LabelShowPass = styled(ShowPassword)``;

export const Terms = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: ${(x) => x.theme.size['2xs']};

  label {
    @media only screen and (${device.mobileS}) {
      ${(x) => x.theme.fonts.size.sm}
    }
  }
`;

export const BoxLogin = styled(BoxCreateAccount)``;
