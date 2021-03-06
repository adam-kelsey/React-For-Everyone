import React from 'react';
import ContactsList from './ContactsList';

let contacts = [{
  id: 1,
  name: 'Adam',
  phone: '555 333 5555'
}, {
  id: 2,
  name: 'Person',
  phone: '111 111 1111'
}, {
  id: 3,
  name: 'Guuy',
  phone: '222 222 2222'
}, {
  id: 4,
  name: 'Girl',
  phone: '333 333 3333'
}]

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Contacts List</h1>
        <ContactsList contacts={this.props.contacts} />
      </div>
    )
  }
}

React.render(<App contacts={contacts} />, document.getElementById('app'));