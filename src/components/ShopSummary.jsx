import styled from 'styled-components';
import { SummaryTotalContainer, PaySummary, TotalPriceSummary, DeliveryOptionsContainer, SummaryBuyButton, TotalSummaryInfo } from '../styling/userCartStyling';

const ShopSummary = ({ finalPriceCount }) => {
    return (
        <SummaryTotalContainer>
            <PaySummary>
                <TotalPriceSummary>Total: {finalPriceCount} €</TotalPriceSummary>
                <TotalSummaryInfo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio molestias corrupti numquam quisquam quae itaque harum hic temporibus quibusdam?</TotalSummaryInfo>
                <SummaryBuyButton>Continue</SummaryBuyButton>
            </PaySummary>
            <DeliveryOptionsContainer>Delivery Options</DeliveryOptionsContainer>
        </SummaryTotalContainer>
    )
}

export default ShopSummary
