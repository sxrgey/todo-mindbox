import { Box, styled } from '@mui/material';

const Container = styled(Box)`
  width: 60%;
  min-width: 600px;
  padding: 1rem;

  @media (max-width: 600px) {
    width: 100%;
    min-width: 0;
  }
`;

export default Container;
