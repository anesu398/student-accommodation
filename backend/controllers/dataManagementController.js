const fs = require('fs');
const csv = require('csv-parser');

async function exportPropertyData(req, res) {
  try {
    // Retrieve property data from the database
    const properties = await Property.find();

    // Convert property data to CSV format
    const csvData = properties.map(property => {
      return `${property.title},${property.location},${property.price},${property.description}`;
    }).join('\n');

    // Set response headers for CSV download
    res.set('Content-Type', 'text/csv');
    res.set('Content-Disposition', 'attachment; filename=properties.csv');
    res.send(csvData);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function importPropertyData(req, res) {
  try {
    // Read uploaded CSV file and process property data
    const properties = [];
    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on('data', (row) => {
        properties.push(row);
      })
      .on('end', () => {
        // Insert imported property data into the database
        Property.insertMany(properties)
          .then(() => {
            res.status(201).json({ message: 'Property data imported successfully' });
          })
          .catch((error) => {
            res.status(400).json({ message: 'Property data import failed' });
          });
      });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = { exportPropertyData, importPropertyData };
