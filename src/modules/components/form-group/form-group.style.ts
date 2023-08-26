import styled from 'styled-components';

export const FormGroupContainer = styled.div`
  position: relative;
  margin-bottom: ${(x) => x.theme.size.md};
  margin-top: ${(x) => x.theme.size.md};
`;

export const FormGroupTitle = styled.label`
  ${(x) => x.theme.fonts.size.sm}
`;
