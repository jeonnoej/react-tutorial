import React from 'react';

class ContactRemover extends React.Component {
    handleClick() {
        this.props.onRemove();
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>Remove Select Contact</button>
        );
    }
}

export default ContactRemover;
