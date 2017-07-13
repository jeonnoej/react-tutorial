import React from 'react';
import update from 'react-addons-update';
import ContactInfo from './ContactInfo';
import ContactCreator from './ContactCreator';
import ContactRemover from './ContactRemover';
import ContactEditor from './ContactEditor';

/*
const Contacts = ({name, title}) => {
    return (
        <li>{name}</li>
    );
};
*/

class Contacts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contactData: [
                {name: 'Jeon', phone: '010-2929-0842'},
                {name: 'Jeon', phone: '010-2929-0842'},
                {name: 'Jeon', phone: '010-2929-0842'},
                {name: 'Jeon', phone: '010-2929-0842'}
            ],
            selectedKey: -1,
            selected: {
                name: '',
                phone: ''
            }
        };
    }

    _onSelect(key) {
        if (key === this.state.selectedKey) {
            console.log("Key selected canceled.");
            this.setState({
                selectedKey: -1,
                selected: {
                    name: '',
                    phone: ''
                }
            });

            return;
        }

        this.setState({
            selectedKey: key,
            selected: this.state.contactData[key]
        });
    }

    _isSelected(key) {
        if (this.state.selectedKey === key) {
            return true;
        } else {
            return false;
        }
    }

    _insertContact(name, phone) {
        let newState = update(this.state, {
            contactData: {
                $push: [{name: name, phone: phone}]
            }
        });

        this.setState(newState);
    }

    _removeContact() {
        if (this.state.selectedKey === -1) {
            return;
        }

        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    $splice: [[this.state.selectedKey, 1]]
                }
            ),
            selectedKey: -1
        });
    }

    _editContact(name, phone) {
        if (this.state.selectedKey === -1) {
            return;
        }

        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    [this.state.selectedKey]: {
                        name: {$set: name},
                        phone: {$set: phone},
                    }
                }
            ),
            selected: {
                name: name,
                phone: phone
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Contact List</h1>
                <ul>
                    {
                        this.state.contactData.map((contact, i) => {
                            return (
                                <ContactInfo
                                    contact={contact}
                                    key={i}
                                    contactKey={i}
                                    isSelected={this._isSelected.bind(this)(i)}
                                    onSelect={this._onSelect.bind(this)}
                                />
                            );
                        })
                    }
                </ul>
                <ContactCreator onInsert={this._insertContact.bind(this)} />
                <ContactRemover onRemove={this._removeContact.bind(this)} />
                <ContactEditor
                    selected={this.state.selected}
                    onEdit={this._editContact.bind(this)}
                />
            </div>
        );
    }
}

export default Contacts;
