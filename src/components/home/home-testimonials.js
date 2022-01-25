import { Avatar, Box, Container, Typography,Link } from '@mui/material';
import NextLink from 'next/link';
export const HomeTestimonials = (props) => (
  <Box
    sx={{
      backgroundColor: 'primary.main',
      py: 15
    }}
    {...props}>
    <Container
      maxWidth="md"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography
        align="center"
        color="primary.contrastText"
        variant="h3"
      >
        &quot;This market is developing, we are organized with Dao, join us and make the Dao better.&quot;
      </Typography>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          mt: 3
        }}
      >
        <Avatar
          src="/static/team/bingo.jpg"
          sx={{ mr: 2 }}
          variant="rounded"
        />
        <div>
          <Typography
            color="primary.contrastText"
            variant="h6"
          >
          Bingo <Twitter/>
          </Typography>
          <Typography
            color="primary.contrastText"
            variant="body2"
          >
            CEO of @SoundOne 
          </Typography>
        </div>
      </Box>
      
    </Container>
   
  </Box>
);

function Twitter(){

  return <NextLink
  href="https://twitter.com/nbingood"
  passHref

>
  <Link
    color="primary.contrastText"
    sx={{ ml: 2 }}
    underline="none"
    variant="subtitle2"
  >
    Twitter
  </Link>
</NextLink>;
}
