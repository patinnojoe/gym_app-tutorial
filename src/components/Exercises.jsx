import { Box, Pagination, Typography, Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import { exerciseOptions, fetchData } from '../utils';
import PropTypes from 'prop-types';
import ExerciseCard from './ExerciseCard';
import { bodyPart } from '../assets';

function Exercises({ exercises, setExercises }) {
  // console.log(exercises);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };
  // last exercise
  const indexOfLastExercise = currentPage * exercisesPerPage;
  // console.log(indexOfLastExercise);

  // first exercise
  const indexOffirstExercise = indexOfLastExercise - exercisesPerPage;
  // console.log(indexOffirstExercise);

  // current exercise
  const currentExercise = exercises.slice(indexOffirstExercise, indexOfLastExercise);
  // console.log(currentExercise);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exerciseData = [];
      if (bodyPart === 'all') {
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exerciseData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box
      sx={{
        mt: { lg: '110px' },
      }}
      p="20px"
      mt="50px"
    >
      <Typography variant="h3" mb="46px" textTransform="capitalize">
        showing Results
      </Typography>
      <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{ gap: { lg: '110px', xs: '50px' } }}>
        {currentExercise.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>

      <Stack mt="100px" alignItems="center">
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
}

export default Exercises;

Exercises.propTypes = {
  exercises: PropTypes.array,
  setExercises: PropTypes.func,
  bodyPart: PropTypes.any,
};
