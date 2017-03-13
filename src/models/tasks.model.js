import { virtualId } from '../mongodb';

module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const tasks = new Schema({
    complete: { type: Boolean},
    text: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'users' },
    project: { type: Schema.Types.ObjectId, ref: 'projects' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  }).plugin(virtualId);

  return mongooseClient.model('tasks', tasks);
};
