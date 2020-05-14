import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage,toggleFollowingProgress,getUsers} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import { compose } from 'redux';

class UsersContainerComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize); 
    }
    onPageChanged = (p) => {
        this.props.getUsers(p,this.props.pageSize);
    }
    render() {
            {
                if(this.props.isFetching) {
                    return (
                        <Preloader/>
                    )
                } else {
                    return (
                        <Users
                            {...this.props}
                            currentPage={this.props.currentPage}
                            totalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize}
                            onPageChanged={this.onPageChanged}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            users={this.props.users}
                        />
                    )
                }
            }
            /* <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    users={this.props.users}
                />
            </> */
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default compose(
    connect(mapStateToProps, {follow,unfollow,setCurrentPage,toggleFollowingProgress,getUsers})
)(UsersContainerComponent)