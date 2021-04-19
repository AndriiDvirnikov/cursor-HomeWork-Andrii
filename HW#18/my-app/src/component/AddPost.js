import React, {Component} from 'react'

class AddPost extends Component {

    render(){
        return(
            <div className="add_post">
                <input trpe="text"></input>
                <input trpe="text"></input>
                <button className="add_post_button">Add</button>
            </div>
        )
    }
}

export default AddPost;