import styled from 'styled-components';

import { COLOR } from '../../../styles/theme/colors.theme';

export const BoxButton = styled.button`
  width: 100%;

  padding: ${(x) => x.theme.size['2xs']} ${(x) => x.theme.size.md};
  /* margin: ${(x) => x.theme.size['2xs']} ${(x) => x.theme.size['3xs']};
 */
  border-radius: ${(x) => x.theme.size['3xs']};

  cursor: pointer;

  ${(x) =>
    x.color == COLOR.blue && {
      'background-color': x.theme.colors.blue[700],
      color: x.theme.colors.white,
      ':hover': {
        'background-color': x.theme.colors.blue[800],
      },
      ':active': {
        'background-color': x.theme.colors.blue[600],
      },
      ':disabled': {
        'background-color': x.theme.colors.blue[300],
      },
    }};
`;
