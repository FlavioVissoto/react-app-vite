import styled from 'styled-components';

import { device } from '../../styles/theme/devices';
import { SizeType } from '../../styles/theme/size.theme';

interface CheckboxStyleType {
  'font-size'?: SizeType;
}

export const CheckboxContainer = styled.div<CheckboxStyleType>`
  width: auto;
  display: flex;
  align-items: center;
  gap: ${(x) => x.theme.size['2xs']};
  ${(x) => x.theme.fonts.size.base}
`;

export const BoxCheckbox = styled.input<CheckboxStyleType>`
  height: 1rem;
  width: 1rem;
`;

export const Label = styled.label<CheckboxStyleType>`
  ${(x) => x.theme.fonts.size.sm}

  @media only screen and (${device.mobileL}) {
    ${(x) => x.theme.fonts.size.base}
  }
`;
