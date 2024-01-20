import MuiButton from '@mui/material/Button';

export const Button = (props) => {
  const { children, ...rest } = props;

  return <MuiButton {...rest}>{children}</MuiButton>;
};
