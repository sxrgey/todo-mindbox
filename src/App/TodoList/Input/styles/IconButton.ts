import { IconButton as MuiIconButton, styled } from '@mui/material';

const IconButton = styled(MuiIconButton)`
  padding: 0 10px 0 12px;
  svg {
    height: 36px;
    width: auto;
    fill: black;
    opacity: 0.2;
  }

  &:hover {
    background-color: inherit;
    svg {
      transform: scale(1.15);
    }
  }
`;

export default IconButton;
