// services/dataManagementService.js

const fs = require('fs');
const csv = require('csv-parser');
const Property = require('../models/Property');

async function exportPropertyDataToCSV() {
  const properties = await Property.find();
  const csvData = properties.map(property => `${property.title},${property.location},${property.price},${property.description}`).join('\n');
  return csvData;
}

async function importPropertyDataFromCSV(csvFilePath) {
  const properties = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (row) => {
        properties.push(row);
      })
      .on('end', () => {
        resolve(properties);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

module.exports = { exportPropertyDataToCSV, importPropertyDataFromCSV };
