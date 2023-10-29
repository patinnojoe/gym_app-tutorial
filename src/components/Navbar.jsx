import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../assets';

function Navbar() {
  return (
    <Stack>
      <Link to="/">
        <img src={logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0 auto' }} />
      </Link>
      <Stack>
        <Link to="/">Home</Link>
        <a href="excersies" style={{ textDecoration: 'none', color: '#3a1212' }}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
}

export default Navbar;
