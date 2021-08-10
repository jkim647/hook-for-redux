import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useWebOrderList } from "../WebOrderReducer/WebOrderReducer";
import { Help as HelpIcon } from "@material-ui/icons";

const Dropdown = () => {
  const handleSelect = (e) => {
    const value = e.target.value;
    console.log(value);
  };
  const { orderId } = useWebOrderList();
  return (
    <Grid item xs={12}>
      <FormControl>
        <InputLabel>Order Number</InputLabel>
        <Select value={"test"} style={{ width: 200 }} onChange={Dropdown}>
          {orderId.map((item, index) => {
            return (
              <MenuItem key={index} value={`${item.orderNumber}|${index}`}>
                {item.orderNumber}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default Dropdown;
