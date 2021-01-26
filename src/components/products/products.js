import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Products() {
  const classes = useStyles();

  return (
    // need to repeat this for each product...

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/public/images/thubms/dragon_thumb1.jpg"
          title="Crochet Dragon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Crochet Dragon
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Exquisitly handcrafted dragon from choice of colors. see details for more INFO
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add To Cart
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      </Card>
  );
}