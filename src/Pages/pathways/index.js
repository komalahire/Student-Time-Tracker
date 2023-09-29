import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  Typography,
  CardMedia,
  Button,
  CardActions,
  Skeleton,
  LinearProgress,
  CardContent,
} from "@mui/material";
import axios from "axios";
import Header from "../header.js";
import { Link } from "react-router-dom";
const Pathways = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://merd-api.merakilearn.org/pathways/dropdown"
      )
      .then((response) => {
        console.log(response);
        setCourses(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(courses?.pathways,"patttttttt")
  return (
    <>
      <Header />
      <h4 style={{textAlign: 'center'}}>Courses</h4>
      <div className="grid">
        {/* {courses.map((c) => (
          <div className="box" key={c.id}>
            <img width={50} height={50} src={c.logo}/>
            <h4>{courses.name}</h4>
          </div>
        ))} */}
      </div>
     <Container>
        <Typography variant="h6" sx={{ mt: 8, ml: 2 }} align="left">
          {" "}
          Courses
        </Typography>
        <Grid container spacing={3} align="center">
          {courses?.pathways?.map((course, index) => (
            <Grid item key={index} xs={12} md={3}>
            <Link to="/course-content">
              <Card
                sx={{
                  minWidth: "150px",
                  borderRadius: "8px",
                  margin: "16px 0",
                  height: "100%",
                  "&:hover": {
                    boxShadow:
                      "0px 16px 24px rgba(0, 0, 0, 0.06), 0px 6px 30px rgba(0, 0, 0, 0.04), 0px 8px 10px rgba(0, 0, 0, 0.08)",
                  },
                }}
                elevation={0}
              >
                <img
                  src={course.logo}
                  alt="course"
                  style={{
                    width: "100%",
                    height: "200px ",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
                <CardContent
                  sx={{
                    marginTop: "8px",
                    height: "30px",
                    p: "0px 8px 0px 0px",
                  }}
                >
                  <Typography align="center" variant="body1">
                    {course.name}
                  </Typography>
                </CardContent>
              </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
        </Container>
    </>
  );
};
export default Pathways;