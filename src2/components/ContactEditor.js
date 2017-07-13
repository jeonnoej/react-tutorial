import React from 'react';

class ContactEditor extends React.Component {
    constructor(props) {
        super(props);

        //Default State
        this.state = {
            name: '',
            phone: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.selected.name,
            phone: nextProps.selected.phone
        });
    }

    handleChange(e) {
        let nextState = {};

        nextState[e.target.name] = e.target.value;

        this.setState(nextState);
    }

    handleClick() {
        this.props.onEdit(this.state.name, this.state.phone);
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
                           value={this.state.name}
                           onChange={this.handleChange.bind(this)}
                    />
                    <input type="text"
                           name="phone"
                           value={this.state.phone}
                           onChange={this.handleChange.bind(this)}
                    />
                    <button onClick={this.handleClick.bind(this)}>Edit</button>
                </p>
            </div>
        );
    }
}

export default ContactEditor;
