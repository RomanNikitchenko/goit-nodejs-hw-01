const contactsOperations = require("./db");

// index.js
// const argv = require('yargs').argv;

// TODO: рефакторить
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
        const contacts = await contactsOperations.getAll();
        console.log(contacts);
      break;

    case 'get':
      // ... id
      break;

    case 'add':
      // ... name email phone
      break;

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

// invokeAction(argv);
invokeAction({action: 'list'});
