import React, { useState, useEffect } from 'react';
/* import s from './ProfileInfo.module.css'; */


const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () =>  {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    useEffect(() => {
       setStatus(props.status); 
    },[props.status])
     
    return (
        
        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '........'}</span>
                </div>
            }
            {editMode &&
                <div >
                    <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status} />
                </div>
            }
        </div>
    )
}
export default ProfileStatusWithHooks;