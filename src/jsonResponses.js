// Note this object is purely in memory
const users = {};

const respondJSON = (request, response, status, object) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  
  response.writeHead(status, headers);
  response.write(JSON.stringify(object));
  response.end();
};

const respondJSONMeta = (request, response, status) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  
  response.writeHead(status, headers);
  response.end();
};

const getUsers = (request, response) => {

};

const getUsersMeta = (request, response) => {

};

const updateUser = (request, response) => {

};

const notFound = (request, response) => {

};

const notFoundMeta = (request, response) => {

};

module.exports = {
  getUsers,
  getUsersMeta,
  updateUser,
  notFound,
  notFoundMeta,
};
