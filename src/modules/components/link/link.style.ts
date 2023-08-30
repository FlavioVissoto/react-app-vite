import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { device } from '../../styles/theme/devices';

export const BoxLink = styled(Link)`
  width: auto;
  text-decoration: none;
  cursor: pointer;

  ${(x) => x.theme.fonts.size.sm}

  color: ${(x) => x.theme.colors.blue[500]};

  :hover {
    text-decoration: underline;
  }

  @media only screen and (${device.mobileL}) {
    ${(x) => x.theme.fonts.size.base}
  }
`;
