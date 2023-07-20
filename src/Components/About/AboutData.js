import React from 'react'
import service from './Service.png'
import car from './car.png'
import car1 from './car1.png'
import About from './About'
import './About.css'
export const data = [
    {
        image: car1,
        heading: "Select Car",
        description: "We offer a diverse cars for your driving needs. We have the perfect car to your need"
    },
    {
        image: service,
        heading: "Contact Operator",
        description: "Our intelligent and friendly operator are always ready to help with any questions or concerns"
    },
    {
        image: car,
        heading: "Let's Drive",
        description: "Whether you're hitting the open road we'have got you covered with our wide range of cars"
    }
];
const AboutData = () => {
    const profile = data.map((item) => {
        return (
            <About
                key={item.heading}
                img={item.image}
                head={item.heading}
                text={item.description}
            />
        )
    })
    return (
        <section className='about-section'>
            <div className='About-heading' style={{ textAlign: "center" }}>
                <h3 className='h'>plan your trip now</h3>
                <h1 className='h'>Quik & easy car rental</h1>
            </div>
            <div className='About'>{profile}</div>
        </section>
    )
}

export default AboutData