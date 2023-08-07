import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { setAuthentication } from '../components/Auth/auth';
import styles from '../styles/Auth.module.css';
import Loading from '../components/Loading/Loading';
import { Error, Success } from '../components/Messages/messages';

const Login = (props) => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userData;

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  }


  const submitHandler = async () => {
    window.scrollTo(0, 0);
    setLoading(true);
    await axios.post('/api/users/login', { email, password }).then(async (res) => {
      setLoading(false);
      if (res.status === 200) {
        setAuthentication(res.data, res.data.token);
        Success(res.data.successMessage);
        props.history.push('/profile');
        document.location.reload();
      }
      else {
        Error(res.data.errorMessage);
      }
    })
  };


  return (
    <>
      <div className={styles.auth}>
        <div className={styles.authInnerBubbleContainer}>
          <h2>Log In</h2>
          {
            loading
              ?
              <Loading />
              :
              <form onSubmit={submitHandler}>
                <div className={styles.item}>
                  <label>Email</label>
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon1"><i className="fa-regular fa-envelope"></i></span>
                    <input name='email' type="text" className="form-control" placeholder="Email" onChange={handleChange} />
                  </div>
                </div>
                <div className={styles.item}>
                  <label>Password</label>
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-lock"></i></span>
                    <input name='password' type="password" className="form-control" placeholder="Password" onChange={handleChange} />
                  </div>
                </div>
                <button className='btn' type="submit">Login</button>
              </form>
          }
          <div className={styles.endText}>
            <div>Don't have an account?</div>
            <Link href="/signup">
              <b className='fw-bold'>Register</b>
            </Link>
          </div>
        </div>
      </div>
    </ >

  );
}


export default Login