import { ProductItemContainer, ProductItemImage, ProductInfo, ProductName, ProductPrice, ProductDescr, AddCartButton, ProductStock } from '../styling/productShopStyling';

const Product = ({ product, availableStock, ...props }) => {

    const ButtonContainer = <AddCartButton onClick={() => { props.addItemToCart(product) }}>Add to cart</AddCartButton>

    return (
        <ProductItemContainer data-id={product.id} data-category={product.category}>
            <ProductItemImage src={product.img} />
            <ProductInfo>
                <ProductName>
                    {product.name}
                </ProductName>
                <ProductPrice>{product.price}€</ProductPrice>
                <ProductDescr>{product.text}</ProductDescr>
                {/* {stock ? <Stock>Left: {stock}</Stock> : null} */}
                <ProductStock>{product.stock ? 'Left: ' + product.stock : "No stock"}</ProductStock>
            </ProductInfo>

            {/* {stock ? ButtonContainer : null} */}
            {product.stock ? ButtonContainer : null}
        </ProductItemContainer>
    )
}

export default Product;
