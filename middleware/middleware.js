

const User = require('../model/user'); // Import your Mongoose User model

async function addUserData(req, res, next) {
  // Assuming you have the user ID available in req.user
  const userId = req.user.id;

  try {
    // Find the user in the "users" collection using their user id
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Add the user information and timestamp to the request body
    req.body.user = {
      id: userId,
      name: user.name,
    };
    req.body.updatedAt = new Date();

    next();
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
}

module.exports = {
  addUserData,
};
