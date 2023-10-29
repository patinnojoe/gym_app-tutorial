import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Box } from '@mui/material';
import { Navbar, Footer } from './components';
import { Home, ExerciseDetail } from './Pages';

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ExerciseDetail />} path="/exercise/:id" />
      </Routes>

      <Footer />
    </Box>
  );
};

export default App;
