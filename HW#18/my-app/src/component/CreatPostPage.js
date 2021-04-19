import React, {Component} from 'react'
import TopPanel from './TopPanel'
import AddPost from './AddPost'
import Post from './Post'
class CreatPostPage extends Component {
    state = {
        post:[

        ]
    }
    render(){
        return(
            <div>
                <TopPanel />
                <AddPost />
                <div className = "post_block"> 
                    {this.state.post.map((post,i)=><Post post = {post} key = {i}/>)}
                </div>
            </div>
        )
    }
}

export default CreatPostPage;