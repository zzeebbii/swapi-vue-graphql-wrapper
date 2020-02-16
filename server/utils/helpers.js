/*
  Objects returned from Swapi don't have an ID field
  So, we'll parse the url and extract the ID
*/

const addObjectID = obj => {
  obj.id = parseInt(obj.url.split('/')[5], 10);
  return obj;
}

const getObjectId = url => parseInt(url.split('/')[5], 10);

module.exports = {
  addObjectID,
  getObjectId
};
