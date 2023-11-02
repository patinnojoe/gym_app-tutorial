import { Box, Stack, TextField, Typography, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { fetchData, exerciseOptions } from '../utils';
import HorizontalScrollbar from './HorizontalScrollbar';
import PropTypes from 'prop-types';

function SearchExercises({ setBodyPart, bodyPart, setExercises }) {
  const [search, setSearch] = useState('');

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions,
      );

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" p="20px" justifyContent="center" mt="37px">
      <Typography
        fontWeight="700"
        mb="50px"
        textAlign="center"
        sx={{
          fontSize: {
            lg: '44px',
            xs: '30px',
          },
        }}
      >
        Awesome Exercises
        <br /> you should know.
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              border: 'none',
              borderRadius: '4px',
              fontWeight: '700px',
            },
            width: {
              lg: '800px',
              xs: '350px',
            },
            borderRadius: '40px',
            backgroundColor: '#fff',
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          onClick={handleSearch}
          sx={{
            color: '#fff',
            backgroundColor: '#ff2625',
            textTransform: 'none',
            position: 'absolute',
            right: 0,
            width: {
              lg: '175px',
              xs: '80px',
            },
            fontSize: {
              lg: '16px',
              xs: '14px',
            },
            height: '56px',
          }}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: 'relative',
          p: '20px',
          width: '100%',
        }}
      >
        <HorizontalScrollbar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
}

export default SearchExercises;

// prop validation
SearchExercises.propTypes = {
  data: PropTypes.array,
  bodyPart: PropTypes.any,
  setBodyPart: PropTypes.any,
  setExercises: PropTypes.any,
};
