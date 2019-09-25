import React from "react";
import {fetchPosts} from "../store/Posts/postsAction";
import { connect } from "react-redux";


export class PostsComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }
    //onInit
    componentDidMount() {
        this.props.onLoadPostList();
    }

    render() {
        return(
            <div>
                { this.props.posts.map((post)=>(
                    <li key={post.id}>{post.title}</li>
                ))}
                <p>Ciao</p>
            </div>
        )
    }
}

const mapDispatchToProps =(dispatch) =>{
    return {
        onLoadPostList:() => dispatch(fetchPosts())
    }
}
const mapStateToProps = state => ({
    posts: state.posts,
});

const PostContainer = connect(mapStateToProps,mapDispatchToProps)(PostsComponent);
export default PostContainer;


