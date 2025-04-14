import React, { useState } from 'react'

const Contactform = () => {
    const [name, setname] = useState('');
    const [fullname, setfullname] = useState('');
    const [email, setemail] = useState('');

    const submitform = (e) =>{
        e.preventDefault();
        setname('')
        setfullname('')
        setemail('')
        alert('fom hass been submited'),
        console.log(name,email,fullname)
    }
  return (
    <div className='Contactform'>
        <div className="contacttop">
            <h2>We value your inquiries, feedback,<br /> and the opportunity to assist you in creating <br /> the most magical holiday experience</h2>
        </div>
        <form onSubmit={submitform}
        >
    <div className="form" >
        <div className="form-container">
        <h2 >Submit your information</h2>
        
        <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="Enter your first name" required
            value={name}
            onChange={(e)=>{
                setname(e.target.value)
            }}
            
            />
        </div>
        
        <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Enter your last name" required
               value={fullname}
               onChange={(e)=>{
                   setfullname(e.target.value)
               }}
            
            />
        </div>
        
        <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required
                 value={email}
                 onChange={(e)=>{
                     setemail(e.target.value)
                 }}
            
            />
        </div>
        
        <button className="black-btn">submit now</button>
    </div>
        </div>
       

        </form>
    

    </div>
  )
}

export default Contactform
