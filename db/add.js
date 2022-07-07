const { v4 } = require('uuid');
const getAll = require('./getAll');
const updataContacts = require('./updataContacts');

const add = async (name, email, phone) => {
  const data = await getAll();

  // не записывает контакт если контакт с таким именем есть!
  // const listName = data.find(item => item.name === name);

  // if (listName) {
  //   console.log('контакт с таким именем уже есть!');
  //   return null;
  // }

  const newContact = {
    id: v4(),
    name,
    email,
    phone,
  };

  data.push(newContact);
  await updataContacts(data);
  return newContact;
};

module.exports = add;
