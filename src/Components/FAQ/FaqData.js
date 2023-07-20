import React from 'react'
import Faq from './Faq'
const items = [
    {
        title: "1. What is Special comparing rental car deals?",
        content: "Comparing rental dels as it helps find the best that fits your budget and requirement.ensuring you get the most value for your money. By comparing various options. you can fing deals that offere lower price, additional services, or better car models. you can find car rental deals by researching online amd comparing prices from different rental companies"
    },
    {
        title: "2. How do I find the car best rental deals ?",
        content: "Just search car rental a you would easily find our website then select the car which suits your purpose and get the best deal if any query contactour tech support. and choose the best deal out of it and book a car a get the car in preferred location."
    },
    {
        title: "3. How do I find such low rental car prices?",
        content: "Comparing rental dels as it helps find the best that fits your budget and requirement.ensuring you get the most value for your money, our slogan say that we value your money and your experience and we provide best deals for you as we said every deal we give it's value for your money"
    }
]
const FaqData = () => {
    return (
        <>
            <Faq items={items} />
        </>
    )
}
export default FaqData;