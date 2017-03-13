import mongoose from 'mongoose';

export default function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};

export const virtualId = schema => {
  schema.virtual('id').get(function(){
    return this._id.toHexString();
  });
  schema.set('toJSON', { virtuals: true });
  schema.set('toObject', { virtuals: true });
  return schema;
};
