import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f8d7da',
        color: '#721c24',
        padding: 2,
      }}
    >
      <Typography variant="h3" gutterBottom>
        Something Went Wrong
      </Typography>
      <Typography variant="body1" gutterBottom>
        We're sorry, but an unexpected error has occurred.
      </Typography>
      <Button
        variant="contained"
        color="error"
        onClick={handleGoHome}
        sx={{ marginTop: 2 }}
      >
        Go Home
      </Button>
    </Box>
  );
};

export { ErrorPage };
