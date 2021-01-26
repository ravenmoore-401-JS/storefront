import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import{ details } from '../../redux-store/products';

const mapDispatchToProps = { details };

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Products(props) {
  console.log('prod props',props)
  const classes = useStyles();

  return (
    // need to repeat this for each product...
    <div id='products-list'>
      products:

    {props.products.map((product,idx) =>(
      <Card key={idx} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/public/images/thubms/dragon_thumb1.jpg"
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
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
    ))}
    </div>
  );
}
const mapStateToProps = state => ({
  products: state.productsReducer.products,
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);