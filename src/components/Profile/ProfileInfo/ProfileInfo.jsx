import React from 'react';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../assetsImg/user.png';
import Preloader from '../../common/preloader/preloader';
import ProfileStatusWithHooks from './profileStatusWithHooks';

const ProfileInfo = ({profile,status,updateStatus}) => {
    if (!profile) {
        return <Preloader />
    } else {
        return (
            <div>
                {/* <div>
                    <img
                        src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
                </div> */}
                <div className="avatar">
                    <img className={s.img} src={profile.photos.large != null ? profile.photos.large : userPhoto} />
                    <div className={s.description}>{profile.aboutMe}</div>
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        )
    }
}

export default ProfileInfo;