import { Stack, Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: '21px',
            color: '#fff',
            backgroundColor: '#ffa9a9',
            borderRadius: '20px',
            fontSize: '14px',
            textTransform: 'capitalize',
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: '21px',
            color: '#fff',
            backgroundColor: '#fcc757',
            borderRadius: '20px',
            fontSize: '14px',
            textTransform: 'capitalize',
          }}
        >
          {exercise.target}
        </Button>
      </Stack>

      <Typography ml="21px" fontWeight="bold" color="#000" textTransform="capitalize" fontSize="22px">
        {exercise.name}
      </Typography>

      {/* TODO: Add popup containg location */}
    </Link>
  );
};

export default ExerciseCard;

ExerciseCard.propTypes = {
  exercise: PropTypes.any,
};
