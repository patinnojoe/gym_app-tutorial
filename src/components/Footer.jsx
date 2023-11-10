import { Box, Stack, Typography } from '@mui/material';
import { logo2 } from '../assets';

function Footer() {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" pt="24px" px="40px" alignItems="center" justifyContent="center">
        <img src={logo2} alt="logo" width="200px" height="40px" />
        <Typography variant="h5" pb="40px" mt="20px">
          Made with ❤ by Innocent Patrick
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
