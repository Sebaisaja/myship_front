import React from 'react';
import DefaultLayout from '../components/layouts/default-layout';
import Products from '../components/products/products';
import { colis } from '../data/colis';
import { courriers } from '../data/courriers';
import { rapidPosts } from '../data/rapid-posts';

const HomePage = () => {
  return (
    <DefaultLayout>
      <Products data={colis} />
      <hr />
      <Products data={courriers} />
      <hr />
      <Products data={rapidPosts} />
    </DefaultLayout>
  );
};

export default HomePage;
