import React, { useState } from 'react'
import Icon from './proche.png';
import Audi from './Audi.png';
import Grey from './grey.png';
import merce from './Mercedes.png';
import mercede from './mercedes1.png'
import { Link } from 'react-router-dom';
import "./Detail.css"
const Detail = () => {
    const initial = { Model: "BMW 6 Series GT", Brand: 'BMW', Year: '2021', Door: '4', Ac: 'Yes', Transmission: 'Manual', Fuel: 'Diesel', dollar: '50', img: Icon }
    const initial1 = { Model: "Audi A3 Tango ", Brand: 'Audi', Year: '2020', Door: '4', Ac: 'Yes', Transmission: 'Manual', Fuel: 'Diesel', dollar: '40', img: Audi }
    const initial2 = { Model: "BMW X1 ", Brand: 'BMW', Year: '2019', Door: '4', Ac: 'Yes', Transmission: 'Manual', Fuel: 'Diesel', dollar: '45', img: Grey }
    const initial3 = { Model: "Mercedes-Benz Cabriolet", Brand: 'Mercedes', Year: '2020', Door: '4', Ac: 'Yes', Transmission: 'Manual', Fuel: 'Diesel', dollar: '40', img: merce }
    const initial4 = { Model: "Mercedes-Benz E-Class", Brand: 'Mercedes', Year: '2021', Door: '4', Ac: 'Yes', Transmission: 'Manual', Fuel: 'Diesel', dollar: '50', img: mercede }
    const [data, setData] = useState(initial)
    return (
        <div className='Detailcard'>
            <div className='Detail'>
                <div>
                    <h3 className='h'>Vechile Model</h3>
                    <h1  className='h'>Our rental fleet</h1>
                    <p className='h1' style={{ fontSize: '20px', width: '40%', margin: 'auto',textAlign:"justify" }}>Choose from a variety of our amazing vechicles to rent for your next adventure or business trip</p>
                </div>
                <div className='detail-section'>
                    <div style={{ textAlign: 'center' }}>
                        <h4 className='link' onClick={() => { setData(initial) }}>BMW GT</h4>
                        <h4 className='link' onClick={() => { setData(initial1) }}>AUDI A3</h4>
                        <h4 className='link' onClick={() => { setData(initial2) }}>BMW X1</h4>
                        <h4 className='link' onClick={() => { setData(initial3) }}>MERCEDES CABRIOLET</h4>
                        <h4 className='link' onClick={() => { setData(initial4) }}>MERCEDES BENZ</h4>
                    </div>
                    <div>
                        <img src={data.img} alt='something' width={"100%"} />
                    </div>
                    <div>
                        <table className='table'>
                            <tbody>
                                <tr className='tr'>
                                    <th><h2>{data.dollar}$</h2></th>
                                    <th><h2>rent per day</h2></th>
                                </tr>
                                <tr className='tr'>
                                    <td className='td'>Model</td>
                                    <td className='td'>{data.Model}</td>
                                </tr>
                                <tr className='tr'>
                                    <td className='td'>Brand</td>
                                    <td className='td'>{data.Brand}</td>
                                </tr>
                                <tr className='tr'>
                                    <td className='td'>Year</td>
                                    <td className='td'>{data.Year}</td>
                                </tr>
                                <tr className='tr'>
                                    <td className='td'>Doors</td>
                                    <td className='td'>{data.Door}</td>
                                </tr>
                                <tr className='tr'>
                                    <td className='td'>AC</td>
                                    <td className='td'>{data.Ac}</td>
                                </tr>
                                <tr className='tr'>
                                    <td className='td'>Transmission</td>
                                    <td className='td'>{data.Transmission}</td>
                                </tr>
                                <tr className='tr'>
                                    <td className='td'>fuel</td>
                                    <td className='td'>{data.Fuel}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className='btn' style={{marginTop:"10px"}}><Link to="/bookingform" className='link-button'>Reserve Now</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail