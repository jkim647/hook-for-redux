import { Grid, Button } from "@material-ui/core";
import { updateShowHelpSection } from "../WebOrderReducer/WebOrderReducer";
import { Help as HelpIcon } from "@material-ui/icons";

const Helper = () => {
  return (
    <Grid item xs={12}>
      <Button
        variant="contained"
        color="primary"
        endIcon={<HelpIcon />}
        onClick={() => {
          updateShowHelpSection(true);
        }}
      >
        Help Section
      </Button>
    </Grid>
  );
};

export default Helper;
