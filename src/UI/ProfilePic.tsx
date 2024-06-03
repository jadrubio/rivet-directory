import {Box} from "@mui/material";

type ProfilePicArgs = {
  photo?: string,
  width?: string,
  height?: string,
}


const spectrum =
  "linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)";

const ProfilePic = ({ photo, width="5em", height = "5em"  }: ProfilePicArgs) => {
  return (
    <>
      {photo ? (
        <Box
          sx={{
            width,
            height,
            backgroundImage: `url("${photo}")`,
            backgroundSize: "cover",
          }}
        />
      ) : (
        <Box
          sx={{
            width,
            height,
            background: spectrum,
          }}
        />
      )}
    </>
  )
}

export { ProfilePic }