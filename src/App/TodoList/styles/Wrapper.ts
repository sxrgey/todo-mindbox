import { Box, styled } from '@mui/material';

const Wrapper = styled(Box)`
  max-height: 320px;
  overflow: auto;

  @media (max-width: 600px) {
    max-height: 400px;
  }
`;

export default Wrapper;
