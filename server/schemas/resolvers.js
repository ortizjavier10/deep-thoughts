const { User,  Thought } = require('../models');

const resolvers = {
    Query: {
      // get all users
      users: async () => {
        return User.find()
            .select('-__v -password')
            .populate('friends')
            .populate('toughts');
      },      
      // get a user by username
      user: async (parent, { username }) => {
        return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts');
      },
      thoughts: async (parent, { username }) => {
          // ternary operator to check if username exists
        const params = username ? { username } : {};
        return Thought.find(params).sort({ createdAt: -1 });
      },
      // we destructure the _id argument value and place it into our .findOne() method to look up a single thought by its _id
      thought: async (parent, { _id }) => {
          return Thought.findOne({ _id });
      }
    }
  };
module.exports = resolvers;