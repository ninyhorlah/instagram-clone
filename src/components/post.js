// import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import { collection,serverTimestamp, doc, db, getDocs,addDoc } from '../firebase'

const Post = ({username, postId, user, caption, imageUrl}) => {
    const[comments, setComments] = useState([])
    const[comment, setComment] = useState('')

    useEffect(() => {
    console.log(111);
        async function getComment(db) {
        if(postId){
            const postCol = collection(db, 'posts')
            const comId = doc(postCol, postId)
            const comCol = collection(comId, 'comment')
            console.log(comCol);
            const commentSnap = await getDocs(comCol)
            console.log(commentSnap);
            const comList = commentSnap.docs.map(doc => (doc.data()))
            console.log(comList);
            setComments(comList)
           
        }
      }
      getComment(db);
        
      }, [postId])

      const postComment = event => {
          event.preventDefault()

          const setCom = collection(db, 'posts')
          const setId = doc(setCom, postId)
          const addCom = collection(setId, 'comment')

         addDoc(addCom, {
            text: comment,
            username: user,
            timestamp: serverTimestamp()
        })
        setComment('')

        //   db.collection("posts").doc(postId).collection("comment").add({
        //       text: comment,
        //       username: user
        //   })
        //   setComment('')
      }

      console.log(comments);
    return (
        <div className='post'>
            <div className="post__head">
            <Avatar>{username?.charAt(0).toUpperCase()}</Avatar>
            <h4>{username}</h4>
            </div>

           <div className="post__content">
                <img src={imageUrl} alt="" className='post__img' />

                <p className='post__caption'><strong>{username}</strong> {caption}</p>

                {
                    <div className="post__comment">
                        {comments.map(comment => (
                            <p>
                                <b>{comment.username}</b> {comment.text}
                            </p>
                        ))}
                    </div>
                }

                {
                    user && 
                    <form action="" className='comment'>
                    <input type="text"
                    placeholder='Add some comments'
                    className='comment__input'
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                     />

                     <button 
                     disable={!comment }
                     className='comment__btn'
                     type='submit'
                     onClick={postComment}
                     >Post</button>
                </form> 
                }
           </div>

        </div>
    )
}

export default Post
