import React from 'react'
import styled from 'styled-components'
import Home from '../pages/Home';
import Form from '../pages/Form';
import ProductsShop from '../pages/ProductsShop';
import { Search, ShoppingCartSharp, PersonSharp } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from "react-router-dom";
import { NavbarContainer, NavbarWrapper, NavbarLogo, NavigationLinksContainer, UserInteractionsContainer, SearchInputWrapper, SearchInput, NavigationList, ListItem } from '../styling/navbarStyling';



const Navbar = ({ finalPriceCount, itemsCartNumber }) => {
    return (
        <NavbarContainer>
            <NavbarWrapper>
                <NavigationLinksContainer>
                    <NavigationList>
                        <ListItem><Link to="/about">About</Link></ListItem>
                        <ListItem><Link to="/products">Products</Link></ListItem>
                        <ListItem ><Link to="/contact">Contact</Link></ListItem>
                    </NavigationList>
                </NavigationLinksContainer>

                <NavbarLogo><Link to="/">MyShop</Link></NavbarLogo>

                <UserInteractionsContainer>
                    <SearchInputWrapper>
                        <SearchInput />
                        {/* Search Icon */}
                        <Search style={{ color: "gray" }} />
                    </SearchInputWrapper>
                    {/* Person-user Icon */}
                    <PersonSharp />
                    <Badge badgeContent={itemsCartNumber} color="secondary" max={9} >
                        <Link to="/cart">
                            {/* Shopping Cart Icon */}
                            <ShoppingCartSharp />
                        </Link>
                    </Badge>
                    {finalPriceCount} €
                </UserInteractionsContainer>
            </NavbarWrapper>
        </NavbarContainer>
    )
}

export default Navbar
