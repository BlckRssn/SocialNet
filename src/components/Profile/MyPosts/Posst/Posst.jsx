import React from 'react';
import s from './Possts.module.css'

const Posst = (props) => {
    return <div className={s.item}>
    <img src ='https://quto.ru/imgs/2020/03/06/09/3812479/5e6df48f741566d3485f4a94af7f804f9d6035d2.jpg'/>
      {props.message}
    <div>
      <span>Like</span> {props.likeCount}
    </div>
  </div>
};

export default Posst;