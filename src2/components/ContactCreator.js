import React from 'react';

class ContactCreator extends React.Component {
    constructor(props) {
        super(props);

        //Default State
        this.state = {
            name: '',
            phone: ''
        };
    }

    handleChange(e) {
        let nextState = {};

        nextState[e.target.name] = e.target.value;

        this.setState(nextState);
    }

    handleClick() {
        this.props.onInsert(this.state.name, this.state.phone);
        this.setState({
            name: '',
            phone: ''
        });
    }

    render() {
        return (
            <div>
                <p>
                    <input type="text"
                           name="name"
                           placeholder="input name"
                           value={this.state.name}
                           onChange={this.handleChange.bind(this)}
                    />
                    <input type="text"
                           name="phone"
                           placeholder="input phone number"
                           value={this.state.phone}
                           onChange={this.handleChange.bind(this)}
                    />
                    <button onClick={this.handleClick.bind(this)}>Insert</button>
                </p>
            </div>
        );
    }
}

export default ContactCreator;
