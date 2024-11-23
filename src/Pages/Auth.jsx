import React from 'react'
import { Link } from 'react-router-dom'

function Auth({register}) {
  return (
    <div>
      <div className="row">
        <div className="col-6 p-5">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/young-man-doing-online-login-access-illustration-download-in-svg-png-gif-file-formats--website-web-account-user-security-pack-crime-illustrations-6752957.png?f=webp" alt="" />
        </div>
        <div className="col-6 p-5 text-center">
          <h1 className='my-3'>Project Fair</h1>
          <h6>Sign{
            register ? "Up" : "In"
            }
          </h6>

          {
            register &&   <input type="text" placeholder='Username' className='form-control mb-3'/>

          }
          <input type="Email" placeholder='Email' className='form-control mb-3'/>
          <input type="password" placeholder='Password' className='form-control mb-3'/>
          
          {
            register ? 
            <div>
              <button className='btn btn-dark mb-3'>SignUp</button>
              <p>Already Registered ? <Link to={'/login'}>Login Now</Link></p> 
            </div>
            :
            
          <div>
          <button className='btn  btn-dark mb-3'>SignIn</button>
          <p>New to here ? <Link to={'/register'}>Register Now</Link></p> 
        </div>
          }

        </div>
      </div>
    </div>
  )
}

export default Auth