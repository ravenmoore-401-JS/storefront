import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Categories from './components/categories/category';
import Products from './components/products/products';
import { Container, Typography } from '@material-ui/core';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Container>
        <Typography variant='h3'>This Will Change by active Category</Typography>
        <Products />
      </Container>
      <Footer />
    </div>
  );
}
