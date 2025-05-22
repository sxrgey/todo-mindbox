import { Button as MuiButton,styled } from '@mui/material';

const Button = styled(MuiButton)`
  min-width: min-content;
  padding: 0 6px;

  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  text-transform: capitalize;

  border-color: rgb(235, 217, 216);
`;

export default Button;
