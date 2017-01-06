import React from 'react'
import ReactDOM from 'react-dom'
import CommentList from './CommentList.jsx'
import CommentForm from './CommentForm.jsx'

export default class CommentBox extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='commentBox'>
                <h2>Comments</h2>
                <CommentList />
                <CommentForm />
            </div>
            );
    }
}
