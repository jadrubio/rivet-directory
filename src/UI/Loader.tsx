import {Box, CircularProgress, Fade} from "@mui/material";

type LoaderArgs = {
  loading: boolean;
  size?: number;
}
const Loader = ({ loading, size = 20 }: LoaderArgs) => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Fade
        in={loading}
        style={{
          transitionDelay: loading ? "800ms" : "0ms",
        }}
        unmountOnExit
      >
        <CircularProgress
          size={size}
        />
      </Fade>
    </Box>
  )
}

export { Loader }