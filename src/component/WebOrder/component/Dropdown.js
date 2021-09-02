import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import {
  useWebOrderList,
  updateOrderNumberValueStore,
  updateIndexTarget,
} from "../WebOrderReducer/WebOrderReducer";

const Dropdown = () => {
  const { orderId, loaded, orderNumberTarget } = useWebOrderList();
  const handleSelect = (e) => {
    const value = e.target.value;
    const [orderNumberTarget, indexTarget] = value.split("|");
    updateOrderNumberValueStore(orderNumberTarget);
    updateIndexTarget(indexTarget);
  };

  return (
    <Grid item xs={12}>
      <FormControl>
        <InputLabel>Order Number</InputLabel>
        <Select
          value={orderNumberTarget}
          style={{ width: 200 }}
          onChange={handleSelect}
        >
          {orderId.map((item, index) => {
            return (
              <MenuItem key={index} value={`${item.orderNumber}|${index}`}>
                {item.orderNumber}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {loaded ? (
        <Button
          color="primary"
          variant="contained"
          style={{ marginLeft: 30, width: 100, marginTop: 10 }}
        >
          Edit
        </Button>
      ) : (
        <Button
          color="primary"
          variant="contained"
          style={{ marginLeft: 30, width: 100, marginTop: 10 }}
        >
          Load
        </Button>
      )}
    </Grid>
  );
};

export default Dropdown;
