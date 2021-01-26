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
import{ details ,addToCart } from '../../redux-store/products';
import { Container } from '@material-ui/core';

const mapDispatchToProps = { details , addToCart };

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Products(props) {
  console.log('prod props',props);
  const classes = useStyles();

  const detailsClick = (item)=>{
    // TODO make this pop out a modal with the item with an add to cart btn and a back button.
    console.log('selected item',item);
    props.details(item.id);
  }
  const addItemToCart = (item)=>{
    // should lead to updating a peice of cart state
    console.log('adding item to cart',item);
    props.addToCart(item);
  }

  return (
    <Container id='products-list' >
  
      products:
{/* TODO these cards want to be horizontal */}
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
        <Button onClick={()=> addItemToCart(product)} size="small" color="primary">
          Add To Cart
        </Button>
        <Button onClick={()=> detailsClick(product)} size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      </Card>
    ))}
    </Container>
  );
}
const mapStateToProps = state => ({
  products: state.productsReducer.products,
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);