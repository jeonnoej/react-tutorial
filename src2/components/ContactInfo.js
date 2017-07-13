import React from 'react';

class ContactInfo extends React.Component {
    shouldComponentUpdate(nextProps, nextSate) {
        return (JSON.stringify(nextProps) !== JSON.stringify(this.props));
    }

    handleClick() {
        this.props.onSelect(this.props.contactKey);
    }

    render() {
        console.log("rendered: " + this.props.contact.name);

        const getStyle = isSelect => {
            if (!isSelect) {
                return;
            }

            return {
                fontWeight: 'bold',
                backgroundColor: '#4efcd8'
            };
        };

        return (
            <li style={getStyle(this.props.isSelected)}
                onClick={this.handleClick.bind(this)}>
                {this.props.contact.name} - {this.props.contact.phone}
            </li>
        );
    }
}

export default ContactInfo;
