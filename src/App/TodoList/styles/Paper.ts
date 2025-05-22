import { Box, styled } from '@mui/material';

const Paper = styled(Box)`
  width: 100%;
  position: relative;
  background-color: white;

  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.1),
    0 4px 12px rgba(0, 0, 0, 0.1);

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    box-shadow: inherit;
    background-color: inherit;
    transition: all 0.3s ease;
    box-shadow: inherit;
  }

  &::before {
    top: 6px;
    transform: scale(0.99);
    z-index: -1;
  }

  &::after {
    top: 12px;
    transform: scale(0.98);
    z-index: -2;
  }
`;

export default Paper;
