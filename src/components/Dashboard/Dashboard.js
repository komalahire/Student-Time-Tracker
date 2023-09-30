import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid ,Container, Table} from '@mui/material';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import LinearProgress from "@mui/material/LinearProgress";
import { LineChart } from '@mui/x-charts/LineChart';
import TableProgress from './TableProgress';
function Dashboard() {
  ;
  
    return (
    <Container maxWidth="md">
    <Grid container spacing={2} mt="16px" mb="32px">
    <Grid item xs={12} sm={6} md={4}>
      <Card elevation={3} style={{borderRadius:"8px"}}>
        <CardContent pt="16px">
        <div style={{display:"flex",}}>
          <Typography variant="h6" component="div">
           No of Students
          </Typography>
          <TextSnippetOutlinedIcon style={{marginLeft:"auto", color:"#87CEEB"}}/>
        </div>
        <div style={{display:"flex", marginTop:"20px"}}>
        <Typography variant="h3" style={{color:"red"}}>
            56 
          </Typography>
          <Typography variant='body1' style={{marginTop:"24px"}}>
          {"  "}
          Section 1</Typography>
           
        </div>
         
        </CardContent>
      </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card elevation={3} style={{borderRadius:"8px"}}>
        <CardContent pt="16px">
        <div style={{display:"flex",}}>
          <Typography variant="h6" component="div">
           No of Students
          </Typography>
          <TextSnippetOutlinedIcon style={{marginLeft:"auto", color:"#87CEEB"}}/>
        </div>
        <div style={{display:"flex", marginTop:"20px"}}>
        <Typography variant="h3" style={{color:"red"}}>
            56 
          </Typography>
          <Typography variant='body1' style={{marginTop:"24px"}}>
          {"  "}
          Section 1</Typography>
           
        </div>
         
        </CardContent>
      </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card elevation={3} style={{borderRadius:"8px"}}>
        <CardContent pt="16px">
        <div style={{display:"flex",}}>
          <Typography variant="h6" component="div">
           No of Students
          </Typography>
          <TextSnippetOutlinedIcon style={{marginLeft:"auto", color:"#87CEEB"}}/>
        </div>
        <div style={{display:"flex", marginTop:"20px"}}>
        <Typography variant="h3" style={{color:"red"}}>
            56 
          </Typography>
          <Typography variant='body1' style={{marginTop:"24px"}}>
          {"  "}
          Section 1</Typography>
           
        </div>
         
        </CardContent>
      </Card>
      </Grid>
      
      </Grid>
      <Grid container>
        <Grid item md={8}>
        <Card elevation={3} style={{borderRadius:"8px",}}>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
            { curve: "linear", data: [0, 5, 2, 6, 3, 9.3] },
            { curve: "linear", data: [6, 3, 7, 9.5, 4, 2] },
        ]}

        width={500}
        height={300}
        />
        </Card>
      </Grid>
    </Grid>

      
  


      <TableProgress/>
      </Container>
    );
  }
  export default Dashboard;
