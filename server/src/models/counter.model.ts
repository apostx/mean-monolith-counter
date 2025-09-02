import mongoose, { Schema, Document } from 'mongoose';

/**
 * Counter Interface
 */
export interface ICounter extends Document {
  count: number;
  created: Date;
  updated: Date;
}

/**
 * Counter Schema
 */
const CounterSchema: Schema = new Schema({
  count: {
    type: Number,
    default: 0
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<ICounter>('Counter', CounterSchema);
