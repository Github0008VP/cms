import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import './Contact.css'
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async () => {
    // e.preventDefault()

    try{
      const res = await axios.post(`${API}/api/user/contactus`, {name, email, message})
      console.log(res)
    }
    catch(err) {
      console.log(err)
    }
  }


  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        {/* {success && <div className="success-message">Message sent successfully! ✓</div>}
        {error && <div className="error-message">{error}</div>} */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              onChange={(u) => setName(u.target.value)} 
              placeholder='Enter Your Name'
              value={name}
              required
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              onChange={(u) => setEmail(u.target.value)} 
              placeholder='Enter Your Email'
              value={email}
              required
            />
          </div>
          <div className="form-group">
            <textarea 
              onChange={(u) => setMessage(u.target.value)} 
              placeholder="Enter the message"
              value={message}
              required
            ></textarea>
          </div>
          <button type="submit"> Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact