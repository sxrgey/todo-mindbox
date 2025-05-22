import { styled,TextField as MuiTextField } from '@mui/material';

const TextField = styled(MuiTextField)`
  input {
    height: 3.5rem;
    font-size: 1.5rem;
  }

  & ::placeholder {
    font-size: 1.5rem;
    font-weight: 300;
    font-style: italic;

    color: black;
    opacity: 0.2;
  }

  .MuiInput-underline:after {
    border-bottom: 2px solid rgb(184, 89, 82);
  }
`;

export default TextField;
