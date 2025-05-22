import { Checkbox as MuiCheckbox, styled } from '@mui/material';

const checkedColor = 'rgb(121, 194, 177)';

const Checkbox = styled(MuiCheckbox)`
  padding: 18px;

  &:hover {
    background-color: inherit;
    & .MuiSvgIcon-root {
      border-color: ${checkedColor};
    }
  }

  & .MuiSvgIcon-root {
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: transparent;
  }

  &.Mui-checked .MuiSvgIcon-root {
    border: ${`1px solid ${checkedColor}`};
    color: ${checkedColor};
  }
`;

export default Checkbox;
