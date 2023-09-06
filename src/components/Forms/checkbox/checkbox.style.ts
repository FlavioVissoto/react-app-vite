import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  gap: ${(x) => x.theme.size['2xs']};
  ${(x) => x.theme.fonts.size.base}
`;

export const BoxCheckbox = styled.input`
  height: 1rem;
  width: 1rem;
`;

export const Label = styled.label``;
