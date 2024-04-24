async function getUserEngagement(req, res) {
    try {
      // Fetch user engagement data from analytics service
      const userEngagementData = await analyticsService.getUserEngagementData();
      res.json(userEngagementData);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  
  module.exports = { getUserEngagement };
  