import { styled, Typography } from '@mui/material';

type Props = {
  completed: boolean;
};

const options = {
  shouldForwardProp: (prop: unknown) => prop !== 'completed',
};

const Text = styled(Typography, options)<Props>`
  font-size: 1.5rem;
  font-weight: 300;

  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  opacity: ${({ completed }) => (completed ? 0.5 : 1)};
`;

export default Text;
