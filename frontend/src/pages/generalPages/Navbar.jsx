import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/userCss/navbar.css'


const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className="admin-cta">
      <p className="admin-cta__text">Are you an Admin?</p>
      <button
        className="admin-cta__button"
        onClick={() => { navigate('/admin/login') }}
      >
        Admin Login
      </button>
    </div>
  )
}

export default Navbar

// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const Navbar = () => {
//     const navigate = useNavigate()
//   return (
//     <>
//     <p>Are you a Admin?</p>
//     <button onClick={() => {navigate('admin/login')}} >AdminLogin</button>
//     </>
//   )
// }

// export default Navbar