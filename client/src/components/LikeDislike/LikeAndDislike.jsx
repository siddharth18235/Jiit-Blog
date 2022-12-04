import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useAuth } from '../../context/authContext'
import Dislike from './Dislike'
import Like from './Like'

const LikeAndDislike = ({id,lk,dlk,past}) => {
  const [likeAndDislike, setLikeAndDislike] = useState(past)
  const {user} = useAuth();
  const [likes, setLikes] = useState(lk);
  const [dislikes, setDislikes] = useState(dlk);

  const updateLikesDisLikes = (isLiked) => {
    if(isLiked){
      axios.post(`/blog/like/${id}`,{userId: user.role.userId}).then((res) =>{
        console.log(res);
      })
    }else{
      axios.post(`/blog/dislike/${id}`,{userId: user.role.userId})
    }
  }
  return (
    <div className="flex items-center flex-wrap ">
        <div className="cursor-pointer mr-6 flex items-center" >
            {likes} 
            <Like
                set={setLikeAndDislike} 
                get={likeAndDislike} 
                setLikes={setLikes} 
                likes={likes} 
                setDislikes={setDislikes} 
                dislikes={dislikes}
                updateLikesDisLikes={updateLikesDisLikes}
                />
        </div>
        <div className="cursor-pointer flex items-center">
            {dislikes}
            <Dislike
                set={setLikeAndDislike} 
                get={likeAndDislike} 
                setDislikes={setDislikes} 
                dislikes={dislikes}
                likes={likes}
                setLikes={setLikes}
                updateLikesDisLikes={updateLikesDisLikes}
            />
        </div>
    </div>
  )
}

export default LikeAndDislike