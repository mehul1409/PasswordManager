import React, { useEffect, useState } from 'react';
import './Manager.css'

const Manager = () => {
  const [formData, setFormData] = useState({
    website: '',
    username: '',
    password: '',
  });

  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem('passwords');
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordArray([...passwordArray, formData]);
    localStorage.setItem('passwords', JSON.stringify([...passwordArray, formData]));
    setFormData({
      website:'',
      username:'',
      password:''
    })
  };

  return (
    <>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="form-input"
            placeholder="Enter Website URL"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
          <div className="form-group">
            <input
              className="form-input"
              placeholder="Enter Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <input className="form-submit" type="submit" />
        </form>
      </div>
      <div className="password-list">
        {passwordArray.length === 0 ? (
          <div className="no-passwords">No Passwords to show</div>
        ) : (
          <>
            <div className="password-header">
              <div>Website URL</div>
              <div>Username</div>
              <div>Password</div>
            </div>
            {passwordArray.map((item, index) => (
              <div key={index} className="password-item">
                <div>{item.website}</div>
                <div>{item.username}</div>
                <div>{item.password}</div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Manager;
