import { Stack, Typography } from '@mui/material';
import { gym } from '../assets';

import PropTypes from 'prop-types';

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        background: '#fff',
        gap: '47px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        borderBottomLeftRadius: '20px',
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img
        src={gym}
        alt=""
        style={{
          width: '40px',
          height: '40px',
        }}
      />

      <Typography textTransform="capitalize" fontWeight="bold" color="#3a1212" fontSize="24px">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;

// prop validation

BodyPart.propTypes = {
  item: PropTypes.any,
  bodyPart: PropTypes.any,
  setBodyPart: PropTypes.any,
};
