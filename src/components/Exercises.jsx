// import { Box, Pagination, Typography, Stack } from '@mui/material';
// import { useState, useEffect } from 'react';
// import { exerciseOptions, fetchData } from '../utils';
// import PropTypes from 'prop-types';
// import ExerciseCard from './ExerciseCard';
// import { bodyPart } from '../assets';

// function Exercises({ exercises, setExercises }) {
//   console.log(exercises);
//   const [currentPage, setCurrentPage] = useState(1);
//   const exercisesPerPage = 9;
//   const paginate = (e, value) => {
//     setCurrentPage(value);
//     window.scrollTo({ top: 1800, behavior: 'smooth' });
//   };
//   // last exercise
//   const indexOfLastExercise = currentPage * exercisesPerPage;
//   // console.log(indexOfLastExercise);

//   // first exercise
//   const indexOffirstExercise = indexOfLastExercise - exercisesPerPage;
//   // console.log(indexOffirstExercise);

//   // current exercise
//   const currentExercise = exercises.slice(indexOffirstExercise, indexOfLastExercise);
//   // console.log(currentExercise);

//   useEffect(() => {
//     const fetchExercisesData = async () => {
//       let exerciseData = [];
//       if (bodyPart === 'all') {
//         exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

//         console.log(exerciseData);
//       } else {
//         exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/${bodyPart}`, exerciseOptions);
//       }

//       setExercises(exerciseData);
//     };
//     fetchExercisesData();
//   }, [bodyPart]);

//   return (
//     <Box
//       sx={{
//         mt: { lg: '110px' },
//       }}
//       p="20px"
//       mt="50px"
//     >
//       <Typography variant="h3" mb="46px" textTransform="capitalize">
//         showing Results
//       </Typography>
//       <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{ gap: { lg: '110px', xs: '50px' } }}>
//         {currentExercise.map((exercise, index) => (
//           <ExerciseCard key={index} exercise={exercise} />
//         ))}
//       </Stack>

//       <Stack mt="100px" alignItems="center">
//         {exercises.length > 9 && (
//           <Pagination
//             color="standard"
//             shape="rounded"
//             defaultPage={1}
//             count={Math.ceil(exercises.length / exercisesPerPage)}
//             page={currentPage}
//             onChange={paginate}
//             size="large"
//           />
//         )}
//       </Stack>
//     </Box>
//   );
// }

// export default Exercises;

// Exercises.propTypes = {
//   exercises: PropTypes.array,
//   setExercises: PropTypes.func,
//   bodyPart: PropTypes.any,
// };

import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';
// import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions,
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
