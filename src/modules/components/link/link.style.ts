import styled from 'styled-components';

export const BoxLink = styled.a`
  text-decoration: none;
  cursor: pointer;

  ${(x) => x.theme.fonts.size.base}

  color: ${(x) => x.theme.colors.blue[500]};

  :hover {
    text-decoration: underline;
  }
`;
