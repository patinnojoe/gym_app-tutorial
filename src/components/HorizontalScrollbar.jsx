import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { leftArrow, rightArrow } from '../assets';
import { useContext } from 'react';
import ExerciseCard from './ExerciseCard';
// import { bodyPart } from '../assets';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={leftArrow} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={rightArrow} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box key={item.id || item} title={item.id || item} itemID={item.id || item} m="0 40px">
          {isBodyParts ? (
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

HorizontalScrollbar.propTypes = {
  data: PropTypes.array,
  bodyPart: PropTypes.any,
  setBodyPart: PropTypes.any,
  bodyParts: PropTypes.any,
  isBodyParts: PropTypes.bool,
};

export default HorizontalScrollbar;
