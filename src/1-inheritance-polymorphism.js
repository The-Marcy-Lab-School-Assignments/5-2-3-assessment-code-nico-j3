class Phone {

  constructor(phoneNumber, name) {
    this.contacts = [];
    this.phoneNumber = phoneNumber;
    this.name = name;
  }

  addContact(contact) {
    if (!(contact.name) || (!contact.phoneNumber) || (contact.phoneNumber.length !== 10)) {
      return 'Invalid'
    }
    else {
      const newContact = {
        name: (`${contact.name}`),
        phoneNumber: (`${contact.phoneNumber}`)
      };

      this.contacts.push(newContact);

      return (`${contact.name} added.`);

    }
  }

  removeContact(contact) {
    const remove = this.contacts.findIndex((person) => person.name === contact)
    if (remove !== -1) {
      this.contacts.splice(remove, 1);
      return `${contact} removed.`
    }
    else {
      return 'Contact not found.'
    }

  }

  makeCall(contact) {

    if (contact && this.phoneNumber.length === 10) {
      return `Calling ${contact}...`

    }
    else if (!contact && this.phoneNumber.length === 10) {
      return `Calling ${contact.phoneNumber}...`
    }
    else {
      return 'Invalid'
    }


    // else if (!contact && this.phoneNumber.length === 10) {
    //   return `Calling ${contact.phoneNumber}...`
    // }
    // else {
    //   return `Calling ${contact}...`

    // }

  }

  // vvv last curly vvv
}




class AppleIPhone extends Phone {
  constructor(phoneNumber, model) {
    super(phoneNumber);
    this.model = model;
  }

  sendIMessage(msg) {
    let iphone = this.model;
    if (iphone.includes('iPhone')) {
      return (`Message: ${msg} - sent from ${iphone}`)
    }
    else {
      return (`Message could not be sent.`)
    }
  }

  //vv last curly vv
}




module.exports = {
  Phone,
  AppleIPhone,
};
