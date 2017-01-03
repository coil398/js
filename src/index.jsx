import React from 'react'

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='commentBox'>
                Hello World!!
            </div>
        );
    }
}

React.render(
    <CommentBox />,
    document.getElementById('container')
);
