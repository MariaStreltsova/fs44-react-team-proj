import Button from '@mui/material/Button';
export const AuthBtn = ({
  title = '',
  variant = 'contained',
  type = 'button',
  color = 'primary',
  href = '',
  disabled = false,
  mb = '20px',
}) => {
  return (
    <Button
      variant={variant}
      type={type}
      disabled={disabled}
      // color={color}
      href={href}
      style={{
        width: '300px',
        height: '50px',
        borderRadius: '20px',
        marginBottom: '2px',
        backgroundColor: `${color}`,
        marginBottom: `${mb}`,
      }}
    >
      {title}
    </Button>
  );
};
