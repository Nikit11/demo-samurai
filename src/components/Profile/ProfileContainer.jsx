import React from 'react';
import Profile from "./Profile";
import { setUsersProfile, setProfileUser,getStatus,updateStatus } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getProfile, getAuthorizedUserId , getProfileStatus} from '../../redux/profile-selects';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.setProfileUser(userId);
        this.props.getStatus(userId);
    }
    render () {
        return (
            <div>
               
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        status: getProfileStatus(state),
        authorizedUserId: getAuthorizedUserId(state)
    }
}

export default compose(
    connect (mapStateToProps, {
        setUsersProfile,
        setProfileUser,
        getStatus,
        updateStatus
    }),
    withRouter,
    /* withAuthRedirect */
)(ProfileContainer);




