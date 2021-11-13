import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Logo from './logo';
import { Input } from '@mui/material';
import { signInWithEmailAndPassword, auth } from '../firebase';

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

export default function Login() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
//   const [username, setUsername] = useState();

 const handleSubmit = (e) => {
      e.preventDefault()

      signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // const user = userCredential.user
        // console.log(user);
    })
    .catch(error => alert(error.message))

    setOpen(false)
  }


  return (
    <div className='signup'>
      <Button onClick={() => setOpen(true)}>Login</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={style}>
            <center><Logo /></center>

            {/* <Input 
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Username" 
            inputProps={ariaLabel} /> */}

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

            <Button onClick={handleSubmit} type='submit'>Login</Button>
        </Box>
      </Modal>
    </div>
  );
}
