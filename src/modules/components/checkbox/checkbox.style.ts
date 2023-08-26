import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

export const BoxCheckbox = styled.input`
  height: 1rem;
  width: 1rem;
  line-height: 1.5rem;
`;

export const Label = styled.label`
  ${(x) => x.theme.fonts.size.base}
`;
