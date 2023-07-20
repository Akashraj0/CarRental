import React from 'react'
import { useState } from 'react'
import './Bookingform.css'
import useForm from '../Hook/useForm'
const Bookingform = ({ navigate }) => {
  const style1 = {
    color: 'red',
  }
  const { form,
    FormValid,
    changecarHandler,
    changePDHandler,
    changePLHandler,
    changeDDHandler,
    changeDLHandler,
    submitHandler
  } = useForm();
  const [formerror, setFormerror] = useState({});
  const [isclicked,setIsclicked] = useState(false);
  const Validate = (values) => {
    const errors = {};
    if (!values.car) {
      errors.car = "required";
    }
    if (!values.pickDate) {
      errors.pickDate = "required";
    }
    if (!values.PickLocation) {
      errors.PickLocation = "required";
    }
    if (!values.DropDate) {
      errors.DropDate = "required";
    }
    if (!values.DropLocation) {
      errors.DropLocation = "required";
    }
    return errors;
  }
  const Akash=(a)=>{
    if(Object.keys(formerror).length === 0)
      {
        setIsclicked(true);
    if(isclicked)
    {
    navigate("/bookingconformation");
    }
      }
  }
  const handleSubmit = (e) => {
    submitHandler(e);
    setFormerror(Validate(form));
  }
  return (
    <div className='form-section'>
      <h2 className='form-head'>Book a Car</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className='book'>
          <label>Select your Car Type &nbsp;</label>
          <select value={form.car} onChange={changecarHandler} placeholder='none'>
            <option>Swift</option>
            <option>Maruthi</option>
            <option>BMW</option>
          </select>
          <p style={style1}>{formerror.car}</p><br />
          <label>Pick-Up Date &nbsp;</label>
          <input type='date' value={form.pickDate} onChange={changePDHandler} />
          <p style={style1}>{formerror.pickDate}</p>
        </div>
        <div className='book'>
          <label>Pick-Up Location &nbsp;</label>
          <select value={form.PickLocation} onChange={changePLHandler} placeholder='none'>
            <option>Bucarast</option>
            <option>London</option>
            <option>Ludon</option>
          </select>
          <p style={style1}>{formerror.PickLocation}</p>
          <br />
          <label>Drop-Off Date&nbsp;</label>
          <input type='date' value={form.DropDate} onChange={changeDDHandler} />
          <p style={style1}>{formerror.DropDate}</p>
        </div>
        <div className='book'>
          <label>Drop-Up Location &nbsp;</label>
          <select style={{ marginBottom: "3rem" }} value={form.DropLocation} onChange={changeDLHandler} placeholder='none'>
            <option>Bucarast</option>
            <option>London</option>
            <option>Ludon</option>
          </select>
          <p style={style1}>{formerror.DropLocation}</p>
          <br />
        </div>
        <button disabled={FormValid} className='btn-book' onClick={Akash}>Submit</button>
      </form>
    </div>
  )
}

export default Bookingform