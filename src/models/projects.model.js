import { virtualId } from '../mongodb';

module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const projects = new Schema({
    name: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'users' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  }).plugin(virtualId);

  return mongooseClient.model('projects', projects);
};
