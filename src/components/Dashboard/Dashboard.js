import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, Container, Table } from "@mui/material";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import LinearProgress from "@mui/material/LinearProgress";
import { LineChart } from "@mui/x-charts/LineChart";
import TableProgress from "./TableProgress";


function Dashboard() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} mt="16px" mb="32px">
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3} style={{ borderRadius: "8px" }}>
            <CardContent pt="16px">
              <div style={{ display: "flex" }}>
                <Typography variant="h6" component="div">
                  No of Students
                </Typography>
                <TextSnippetOutlinedIcon
                  style={{ marginLeft: "auto", color: "#87CEEB" }}
                />
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <Typography variant="h3" style={{ color: "red" }}>
                  56
                </Typography>
                <Typography variant="body1" style={{ marginTop: "24px" }}>
                  {"  "}
                  Section 1
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3} style={{ borderRadius: "8px" }}>
            <CardContent pt="16px">
              <div style={{ display: "flex" }}>
                <Typography variant="h6" component="div">
                  No of Students
                </Typography>
                <TextSnippetOutlinedIcon
                  style={{ marginLeft: "auto", color: "#87CEEB" }}
                />
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <Typography variant="h3" style={{ color: "red" }}>
                  56
                </Typography>
                <Typography variant="body1" style={{ marginTop: "24px" }}>
                  {"  "}
                  Section 1
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3} style={{ borderRadius: "8px" }}>
            <CardContent pt="16px">
              <div style={{ display: "flex" }}>
                <Typography variant="h6" component="div">
                  No of Students
                </Typography>
                <TextSnippetOutlinedIcon
                  style={{ marginLeft: "auto", color: "#87CEEB" }}
                />
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <Typography variant="h3" style={{ color: "red" }}>
                  56
                </Typography>
                <Typography variant="body1" style={{ marginTop: "24px" }}>
                  {"  "}
                  Section 1
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <TableProgress />
    </Container>
  );
}
export default Dashboard;
