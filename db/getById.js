const getAll = require('./getAll');

const getById = async id => {
  const data = await getAll();
  const contact = data.find(contact => contact.id === id);
  if (!contact) {
    return null;
  }
  return contact;
};

module.exports = getById;
