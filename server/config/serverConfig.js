const express = require('express');
const removeHeader = require('../middleware/removeHeader');

const serverConfig = (app) => {
  // middleware чаще всего работают с req
  // позволяет читать тело запроса
  app.use(express.urlencoded({ extended: true }));
  // без этого прочитать json не сможет
  app.use(express.json());
  app.use(removeHeader);
};

module.exports = serverConfig;