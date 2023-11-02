import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../assets';

function Navbar() {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }}
      px="20px"
    >
      <Link to="/">
        <img src={logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0 auto' }} />
      </Link>
      <Stack direction="row" gap="40px" alignItems="flex-end" fontSize="24px">
        <Link to="/" style={{ borderBottom: '3px solid #ff2625', textDecoration: 'none', color: '#3a1212' }}>
          Home
        </Link>
        <a href="excersies" style={{ textDecoration: 'none', color: '#3a1212' }}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
}

export default Navbar;
