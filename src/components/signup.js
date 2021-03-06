import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Logo from './logo';
import { Input } from '@mui/material';
import { createUserWithEmailAndPassword, auth } from '../firebase';
import { updateProfile } from '@firebase/auth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column'
};

const ariaLabel = { 'aria-label': 'description' };

export default function SignUp({username, setUsername}) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  

 const handleSubmit = (e) => {
      e.preventDefault()

      createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      updateProfile(auth.currentUser, {
        displayName: username
      })
        const user = userCredential.user
        console.log(user, username, 111);
    })
    .catch(error => alert(error.message))

    setOpen(false)
  }

  return (
    <div className='signup'>
      <Button onClick={() => setOpen(true)}>Sign Up</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={style} onSubmit={handleSubmit}>
            <center>
            <Logo />
            </center>

            <Input 
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Username" 
            inputProps={ariaLabel} />

            <Input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder="Email" 
            inputProps={ariaLabel} />

            <Input 
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password' 
            placeholder="Password" 
            inputProps={ariaLabel} />

            <Button onClick={handleSubmit} type='submit'>Sign Up</Button>
        </Box>
      </Modal>
    </div>
  );
}
