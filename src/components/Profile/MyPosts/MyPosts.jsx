import React, { PureComponent } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators';
import { TextArea } from '../../common/FormsControls/FormsControls';
let maxLength = maxLengthCreator(100);

/* class MyPosts extends PureComponent {
    render() {
        let postsElements =
            this.props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);
        let onSubmit = (formData) => {
            this.props.addPost(formData.addNewPost);
        }
        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <AddPostFormReact onSubmit={onSubmit} />
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        )
    }
} */

/* class MyPosts extends  {
    shouldComponentUpdate(nextProps,nextState) {
        return nextProps != this.props || nextState != this.state;
    }
    render() {
        let postsElements =
            this.props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);
        let onSubmit = (formData) => {
            this.props.addPost(formData.addNewPost);
        }
        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <AddPostFormReact onSubmit={onSubmit} />
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        )
    }
} */
const MyPosts = React.memo((props) => {
   
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);
    let onSubmit = (formData) => {
        props.addPost(formData.addNewPost);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormReact onSubmit={onSubmit} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})
const AddPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name='addNewPost' validate={[required, maxLength]} placeholder={'Post message...'} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddPostFormReact = reduxForm({
    form: 'addPostForm'
})(AddPostForm)

export default MyPosts;