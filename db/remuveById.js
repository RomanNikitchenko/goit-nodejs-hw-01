const getAll = require('./getAll');
const updataContacts = require('./updataContacts');

const remuveById = async id => {
  const contacts = await getAll();
  const idx = contacts.findIndex(item => item.id === id);
  if (idx === -1) {
    return null;
  }
  const newContacts = contacts.filter((_, index) => index !== idx);
  await updataContacts(newContacts);
  return contacts[idx];
};

module.exports = remuveById;
