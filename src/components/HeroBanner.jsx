import { Box, Typography, Button } from '@mui/material';
import { banner } from '../assets';

function HeroBanner() {
  return (
    <Box
      sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' },
      }}
      position="relative"
      p={20}
    >
      <Typography color="#ff2625" fontWeight={600} fontSize="26px">
        Fitness Club
      </Typography>

      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '40px' },
        }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile, Repeat
      </Typography>

      <Typography fontSize="22px" lineHeight="35px" mb={4} mt="30px">
        Checkout the most effective exercises
      </Typography>

      <Typography
        color="#ff2625"
        fontSize="200px"
        sx={{
          display: { xs: 'none', lg: 'block' },
          opacity: 0.1,
        }}
      >
        Exercies
      </Typography>

      <Button
        href="#exercises"
        variant="contained"
        color="error"
        sx={{
          backgroundColor: '#ff2625',
          padding: '10px',
        }}
      >
        Explore Exercise
      </Button>
      <img src={banner} alt="banner" className="hero-banner-img" />
    </Box>
  );
}

export default HeroBanner;
