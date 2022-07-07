const contactsOperations = require('./db');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const contacts = await contactsOperations.getAll();
      console.log(contacts);
      break;

    case 'get':
      const contact = await contactsOperations.getById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(contact);
      break;

    case 'add':
      const newContact = await contactsOperations.add(name, email, phone);
      console.log(newContact);
      break;

    case 'remove':
      const remuveContact = await contactsOperations.remuveById(id);
      console.log(remuveContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

// list
// invokeAction({ action: 'list' });

// get
// const id = '1';
// invokeAction({ action: 'get', id });

// add
// const newData = {
//   name: 'Roman',
//   email: 'nikitchenkoroman25@gmail.com',
//   phone: 123123123123,
// };
// invokeAction({ action: 'add', ...newData });

// remove
// const id = '1';
// invokeAction({ action: 'remove', id });
