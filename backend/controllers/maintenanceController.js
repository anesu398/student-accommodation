const MaintenanceRequest = require('../models/MaintenanceRequest');

async function submitMaintenanceRequest(req, res) {
  try {
    // Create new maintenance request
    const maintenanceRequest = await MaintenanceRequest.create(req.body);
    res.status(201).json(maintenanceRequest);
  } catch (error) {
    res.status(400).json({ message: 'Maintenance request submission failed' });
  }
}

async function getMaintenanceRequests(req, res) {
  try {
    // Retrieve maintenance requests for a property
    const propertyId = req.params.propertyId;
    const maintenanceRequests = await MaintenanceRequest.find({ propertyId });
    res.json(maintenanceRequests);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = { submitMaintenanceRequest, getMaintenanceRequests };
