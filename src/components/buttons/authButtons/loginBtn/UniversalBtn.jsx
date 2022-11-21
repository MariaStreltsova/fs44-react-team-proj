import Button from '@mui/material/Button';
export const UniversalBtn = ({
  title = '',
  variant = 'contained',
  type = 'button',
  color = 'primary',
  href = '',
  disabled = false,
  mb = '20px',
  width = '300px',
}) => {
  return (
    <Button
      variant={variant}
      type={type}
      disabled={disabled}
      href={href}
      style={{
        width: `${width}`,
        height: '50px',
        borderRadius: '20px',
        backgroundColor: `${color}`,
        marginBottom: `${mb}`,
      }}
    >
      {title}
    </Button>
  );
};
