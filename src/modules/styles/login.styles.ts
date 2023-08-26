import styled from 'styled-components';

import { device } from './theme/devices';

export const LoginCard = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 30px ${(x) => x.theme.size['2xs']};

  @media only screen and (${device.tablet}) {
    padding: 40px;
    background: url('assets/img/login_bg.jpg');
    background-position: center;
  }
`;

export const LoginMain = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 20px ${(x) => x.theme.colors.gray[400]};
  margin: 0 auto;
  background-color: ${(x) => x.theme.colors.white};
  padding: ${(x) => x.theme.size['2xl']} ${(x) => x.theme.size.md};

  @media only screen and (${device.tablet}) {
    width: 420px;
  }
`;

export const LoginTitle = styled.h3`
  ${(props) => props.theme.fonts.size['2xl']};
  margin-bottom: 5px;
`;

export const LoginSubTitle = styled.p`
  margin-bottom: ${(x) => x.theme.size.md};
  color: ${(props) => props.theme.colors.gray[400]};
  ${(props) => props.theme.fonts.size.sm};
`;

export const ShowPassword = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;

  span {
    cursor: pointer;
    ${(x) => x.theme.fonts.size.xs}
    color: ${(x) => x.theme.colors.purple[500]};
  }
`;

export const BoxPassword = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${(x) => x.theme.size.xs};

  margin-bottom: ${(x) => x.theme.size.md};
`;

export const BoxSocial = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${(x) => x.theme.size['2xs']};
`;
