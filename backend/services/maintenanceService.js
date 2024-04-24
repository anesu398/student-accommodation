// services/maintenanceService.js

const MaintenanceRequest = require('../models/MaintenanceRequest');

async function submitMaintenanceRequest(requestData) {
  const maintenanceRequest = await MaintenanceRequest.create(requestData);
  return maintenanceRequest;
}

async function getMaintenanceRequestsForProperty(propertyId) {
  const maintenanceRequests = await MaintenanceRequest.find({ propertyId });
  return maintenanceRequests;
}

module.exports = { submitMaintenanceRequest, getMaintenanceRequestsForProperty };
