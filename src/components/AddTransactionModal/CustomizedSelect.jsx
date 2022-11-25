import Select from '@mui/material/Select';

const MenuProps = {
  PaperProps: {
    style: {
      background: "rgba(255, 255, 255, 0.7)",
boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
backdropFilter: "blur(25px)",
borderRadius: "20px",
    },
  },
};

const CustomizedSelectForFormik = ({ children, form, field }) => {
  const { name, value } = field;
  const { setFieldValue } = form;

  return (
      <Select
        fullWidth
      name={name}
      value={value}
      onChange={e => {
        setFieldValue(name, e.target.value);
      }}
      MenuProps={MenuProps}
    >
      {children }
    </Select>
  );
};

export default CustomizedSelectForFormik;