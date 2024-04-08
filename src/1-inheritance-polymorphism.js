class Phone {

  constructor(phoneNumber, name) {
    this.contacts = [];
    this.phoneNumber = phoneNumber;
    this.name = name;
  }
  addContact(contact) {
    if (!(this.name) || (!this.phoneNumber) || (this.phoneNumber.length !== 10)) {
      return 'Invalid'
    }
    else {
      this.contacts.push(contact);
      return (`${contact.name} added.`);
    }
    return contact
  }

  removeContact(contact) {
    const remove = this.contacts.findIndex((person) => person.name === person)
    if (remove !== -1) {
      this.contacts.splice(remove, 1);
      return `${person} removed.`
    }
    else {
      return 'Contact not found.'
    }

  }

  makeCall() {
    const person = this.contacts.find(person => person.name === name)
    if (!person && this.phoneNumber.length === 10) {
      return `Calling ${this.phoneNumber}...`
    }
    else if (person) {
      return `Calling ${name}...`
    }

  }




  // vvv last curly vvv

}




class AppleIPhone {

}




module.exports = {
  Phone,
  AppleIPhone,
};
