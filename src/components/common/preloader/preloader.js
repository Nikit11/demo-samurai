import preLoader from '../../../assetsImg/loading.gif';
import React from 'react';
import s from '../../Users/Users.module.css';
const Preloader = () => {
    return (
        <img src={preLoader} className={s.loading} />
    )
}
export default Preloader;