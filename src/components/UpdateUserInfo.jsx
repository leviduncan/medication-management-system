import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const UpdateUserInfo = () => {
  // const page = "edit";
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    title: '',
    fname: '',
    lname: '',
    email: '',
    number: '',
    gender: '',
    img: '',
  });

  useEffect(() => {
    axios
      .get(`https://mmsbe.cyclic.app/api/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log('Whoop! Sorry, unable to Update User Info');
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setUser((prevState) => ({
      ...prevState,
      [name]: newValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`https://mmsbe.cyclic.app/api/${id}`, user)
      .then((res) => {
        navigate(`/show-user/${id}`);
      })
      .catch((err) => {
        console.log('Error while trying to update user info!');
      });
  };

  return (
    <div className='UpdateUserInfo'>
      <div className='container-fluid'>
        {/* <div className="row">
          <Title page={page} />
        </div> */}
        <div className="row">
          <div className="user-card-ui">
            <div className="user-card-header">
              <img src={user.img} alt={user.fname} />
            </div>
            <div className="user-card-body">
              <form noValidate onSubmit={handleSubmit}>
                <div className="form-group checkbox-layout">
                  {/*<div>Admin:</div>
                   <input
                    type="checkbox"
                    placeholder="Admin"
                    name="admin"
                    className="form-control"
                    checked={user.admin === 'true' && 'checked' }
                    onChange={handleChange}
                  /> */}
                </div>
                <div className="row leftRight">
                  <div className="lcol">
                    {/* <div className='form-group'>
                      <label htmlFor='title'>Title</label>
                      <EmployeeType handleChange={handleChange} title={user.title} />
                    </div> */}
                    <div className='form-group'>
                      <label htmlFor='fname'>First Name</label>
                      <input
                        type='text'
                        placeholder='First Name'
                        name='fname'
                        className='form-control'
                        value={user.fname}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='lname'>Last Name</label>
                      <input
                        type='text'
                        placeholder='Last Name'
                        name='lname'
                        className='form-control'
                        value={user.lname}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='number'>Phone Number</label>
                      <input
                        type='text'
                        placeholder='Phone Number'
                        name='number'
                        className='form-control'
                        value={user.number}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="rcol">
                    <div className='form-group'>
                      <label htmlFor='img'>Avatar</label>
                      <input
                        type='text'
                        placeholder='Avatar'
                        name='img'
                        className='form-control'
                        value={user.img}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='email'>Email</label>
                      <input
                        type='text'
                        placeholder='Email'
                        name='email'
                        className='form-control'
                        value={user.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='gender'>Gender</label>
                      <input
                        type='text'
                        placeholder='Gender'
                        name='gender'
                        className='form-control'
                        value={user.gender}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="controls"></div>
                <button
                  type='submit'
                  className='btn btn-outline-info btn-lg btn-block'
                >
                  Update User
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='col-md-8 m-auto'></div>
      </div>
    </div>
  );
}
