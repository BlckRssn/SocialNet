import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return <div className={s.content}>
    <div>
      <img src ='https://www.gtspiritmedia.com/gtspirit/uploads/2015/01/5.jpg' alt=''/>
    </div>
    <div>
      ava+desc
    </div>
    <div>
      My post
      <div>
        Newpost
      </div>
        <div className={s.posts}>
        <div className={s.item}>
            Post1
        </div>
        <div className={s.item}>
            Post2
        </div>
      </div>
    </div>
  </div>

}

export default Profile;