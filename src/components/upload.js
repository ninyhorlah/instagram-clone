import { getDownloadURL, uploadBytesResumable } from '@firebase/storage'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { storage, addDoc, ref, db, collection, serverTimestamp } from '../firebase'

const Upload = ({getUser}) => {
    const[image, setImage] = useState(null)
    const[caption, setCaption] = useState('')
    const[progress, setProgress] = useState(0)

    

    const handleUpload = () => {
        
        const imageRef = ref(storage, `images/`)

        const uploadTask = uploadBytesResumable(imageRef, image)

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )

                setProgress(progress)
            },
            (error) => {
                console.log(error );
            },
            () => {
               
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    
                    addDoc(collection(db, 'posts'), {
                        timestamp: serverTimestamp(),
                        caption: caption,
                        imageUrl: downloadURL,
                        username: getUser
                    })
                    
                    
                    setProgress(0)
                    setCaption("")
                    setImage(null)
                    
                })
            }
        )
    }

    const handleChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    // console.log(image.name);
    return (
        <div>
            {getUser ? 
            (<div className='upload__contents'>
                <progress value={progress} max='100' className='upload__progress'/>             
                <input type="text" placeholder='Enter Caption...' value={caption} onChange={e => setCaption(e.target.value)} />
                <input type="file" onChange={handleChange} />
                <Button onClick={handleUpload} >Upload</Button>
            </div>)
            :
            (
                <div><h3>Login to upload</h3></div>
            )
             }
                
        </div>
    )
}

export default Upload
