import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://www.gtspiritmedia.com/gtspirit/uploads/2015/01/5.jpg' alt='' />
      </div>
      <div className={s.descriptionBlock}>
        ava+desc
    </div>
    </div>
  )
}

export default ProfileInfo;