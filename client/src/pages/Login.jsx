import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Login = () => {
  const navigate = useNavigate();
  const {storetokenInLS} = useAuth();
  const [user, setUser] =useState({
    email:"",
    password:""
  });

  const handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]:value
    })

  }
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response  = await fetch(`http://localhost:5000/api/auth/login`,{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(user)
      });
      console.log("response",response);
      if(response.ok){
        const res_data = await response.json();
        storetokenInLS(res_data.token)
        // useState({username:"",email:"",phone:"",password:""});
        navigate('/');
        console.log("successfully logged in");
      }
    } catch (error) {
      console.log("register",error);
    }
    
  }
  return (
    <section>
      <main>
        <div className='section-registration'>
          <div className='container grid grid-two-cols'>
            <div className='registration-image reg-img'>
              <img src={'./images/login.png'} alt='./images/login.png' width={400} height={500}/>
            </div>

            {/* our main Login code  */}
            <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login Now
                  </button>
                </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Login