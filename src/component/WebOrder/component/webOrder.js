import React, { useEffect, useState } from "react";
import {
  useWebOrderList,
  updateErrorMessage,
  updateWebOrderList,
  updateLoading,
  updateShowHelpSection,
} from "../WebOrderReducer/WebOrderReducer";
import { Helmet } from "react-helmet";
import { instance } from "../../../firebaseConfig";
import { Card, CardContent, Grid, Button, Typography } from "@material-ui/core";
import { Backup as BackupIcon, Help as HelpIcon } from "@material-ui/icons";
import Dropdown from "./Dropdown";

export const WebOrders = () => {
  const { loading, orderId } = useWebOrderList();
  console.log(orderId);
  useEffect(() => {
    console.log("UseEffect");
    updateLoading(true);
    const fetchOutlet = async () => {
      await instance
        .get("web-orders/order-list", {
          params: {
            outlet_id: "0a7cdf41-c765-11ea-f4ff-f974eb02d7e1",
            all: false,
          },
        })
        .then((order) => {
          console.log(order);
          const orderId = order.data;
          updateWebOrderList(orderId);
          updateLoading(false);
        })
        .catch((err) => {
          updateLoading(false);
          updateErrorMessage(err);
        });
    };
    fetchOutlet();
  }, []);

  return (
    <>
      <Helmet title="Web Orders" defer={false} />
      <Card>
        <CardContent>
          <Grid container spacing={3}>
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
            <Grid item xs={12}>
              <Typography variant="h6">{`${orderId.length} orders remaining.`}</Typography>
            </Grid>
            <Dropdown />
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
