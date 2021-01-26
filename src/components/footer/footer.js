import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


export default function Footer() {
  return(
    <footer>
      <Container fixed style={{backgroundColor:'lightBlue',height:'35px'}}>
      <Typography variant='h5'>
        Copyright M.Ravenmoore 2021
      </Typography>
      </Container>
    </footer>
  )
}
