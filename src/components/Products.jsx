import React, { useState } from 'react'
import ProductItem from './ProductItem';
import styled from 'styled-components';
import { products } from '../data';
import { ProductsContainer } from '../styling/productShopStyling';

const Products = ({ itemsAddedToCartList, addItemToCart }) => {

    return (
        <ProductsContainer >
            {/* Map to create container for each product from the products array in data.js file */}
            {products.map((product, index) => (
                <ProductItem product={product} index={index} addÏtemToCart={addItemToCart} />
            ))}
        </ProductsContainer>

    )
}

export default Products
