import React, { useState } from 'react';
import UserSignIn from '../views/UserSignIn';
import UserSignUp from '../views/UserSignUp';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddNewProperties from '../views/AddNewProperties';

const Header = () => {
  const [is_signed_in, setSignedIn] = useState(false);
  const [is_sign_up, setSignUp] = useState(false);
  const user_role = localStorage.getItem('user_role');
  const [is_tab_change, setIsTabChange] = useState(false);
  const [is_open_new_proprty, setOpenNewProperty] = useState(false);
  const navigate = useNavigate()

  const onHandleFavorites = () => {
    navigate('/favorite')
    setIsTabChange(true)
  }

  const onHandleBack = () => {
    navigate('/')
    setIsTabChange(false)
  }

  const onHandleLogout = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div>

      <Box>
        <UserSignIn
          openModal={is_signed_in}
          setOpenModal={setSignedIn}
        />

        <UserSignUp
          openModal={is_sign_up}
          setOpenModal={setSignUp}
        />

        <AddNewProperties
          openModal={is_open_new_proprty}
          setOpenModal={setOpenNewProperty}
        />
      </Box>

      <header className="header">
        <div className="left">
          <span className="logo_text">Rentify</span>
        </div>
        <div className="right">
          {user_role === "seller" ?
            <div>
              <button className="auth-button" onClick={() => setOpenNewProperty(true)}>Add New Property</button>
              <button className='user-identity'>Seller</button>
            </div>
            : user_role === "buyer" ?
              <div>
                <button className="auth-button" onClick={is_tab_change ? onHandleBack : onHandleFavorites}>{is_tab_change ? 'Home' : 'Favorites'}</button>
                <button className='user-identity'>Buyer</button>
              </div> :
              <div>
                <button className="auth-button" onClick={() => setSignUp(true)}>Sign Up</button>
                <button className="auth-button" onClick={() => setSignedIn(true)}>Sign In</button>
              </div>}
          {user_role && <button className="auth-button" onClick={() => onHandleLogout()}>LogOut</button>}
          <img className="user-profile-image" src="https://img.favpng.com/2/24/0/computer-icons-avatar-user-profile-png-favpng-HPjiNes3x112h0jw38sbfpDY9.jpg" alt="User Profile" />
        </div>
      </header>
    </div>
  );
};

export default Header;