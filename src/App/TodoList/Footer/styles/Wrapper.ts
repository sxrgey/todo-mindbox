import { Box, styled } from '@mui/material';

const Wrapper = styled(Box)`
  display: flex;
  gap: 1rem;

  @media (max-width: 600px) {
    gap: 0.25rem;
  }
`;

export default Wrapper;
