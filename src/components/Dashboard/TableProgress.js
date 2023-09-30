import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
} from "@mui/material";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1A90FF" : "#308FE8",
  },
}));


const TableProgress = () => {
  const studentProgressData = [
    {
      student: "John Doe",
      studentId: "12345",
      contentProgress: "90%",
      grades: "76/100",
      goal: "B+",
      performance: "Great",
    },
    {
      student: "John Doe",
      studentId: "12345",
      contentProgress: "90%",
      grades: "76/100",
      goal: "B+",
      performance: "Great",
    },
    {
      student: "John Doe",
      studentId: "12345",
      contentProgress: "90%",
      grades: "76/100",
      goal: "B+",
      performance: "Great",
    },
    {
      student: "John Doe",
      studentId: "12345",
      contentProgress: "90%",
      grades: "76/100",
      goal: "B+",
      performance: "Great",
    },
    {
      student: "John Doe",
      studentId: "12345",
      contentProgress: "90%",
      grades: "76/100",
      goal: "B+",
      performance: "Great",
    },
    // Add more student progress data as needed
  ];
  return (
    <Container maxWidth="lg">
      <TableContainer component={Paper}>
        <Table aria-label="Semester Progress">
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>Student Email</TableCell>
              <TableCell>Time Spent</TableCell>
              <TableCell>Page viewed</TableCell>
              <TableCell>Browser</TableCell>
              <TableCell>OS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentProgressData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.student}</TableCell>
                <TableCell>{row.studentId}</TableCell>
                <TableCell>
                  <BorderLinearProgress variant="determinate" value={50} />{" "}
                  <br />
                  {"visited" + row.grades}
                </TableCell>
                <TableCell>{row.grades}</TableCell>
                <TableCell>{row.goal}</TableCell>
                <TableCell>{row.performance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default TableProgress;
