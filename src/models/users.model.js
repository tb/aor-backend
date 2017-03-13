import { virtualId } from '../mongodb';

module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const users = new Schema({
    email: {type: String, unique: true},
    password: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  }).plugin(virtualId);

  return mongooseClient.model('users', users);
};
