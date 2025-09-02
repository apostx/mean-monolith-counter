import { Request, Response } from 'express';
import Counter, { ICounter } from '../models/counter.model';

/**
 * Simple error handler
 */
function getErrorMessage(err: any): string {
  let message: string = '';

  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = 'Duplicate field error';
        break;
      default:
        message = 'Something went wrong';
    }
  } else if (err.message) {
    message = err.message;
  } else {
    message = 'Unknown error occurred';
  }

  return message;
}

/**
 * Show the current counter
 */
export const read = async (req: Request, res: Response): Promise<Response> => {
  console.log('Read function called');

  try {
    let counter: ICounter | null = await Counter.findOne();
    console.log('Found counter:', counter);
    
    if (!counter) {
      console.log('No counter found, creating new one');
      counter = new Counter({ count: 0 });
      await counter.save();
      console.log('New counter created, sending response:', counter.count);
    } else {
      console.log('Sending existing counter:', counter.count);
    }
    
    return res.json({ count: counter.count });
  } catch (err: any) {
    console.error('Error reading counter:', err);
    return res.status(400).send({
      message: getErrorMessage(err)
    });
  }
};

/**
 * Increment counter without transaction (for standalone MongoDB)
 */
export const increment = async (req: Request, res: Response): Promise<Response> => {
  console.log('Increment function called');

  try {
    const counter: ICounter | null = await Counter.findOneAndUpdate(
      {}, // Find any counter document
      { $inc: { count: 1 }, $set: { updated: new Date() } }, // Increment count and update timestamp
      {
        new: true, // Return the updated document
        upsert: true, // Create if doesn't exist
        setDefaultsOnInsert: true // Set defaults when creating
      }
    );

    console.log('Increment completed, sending response:', counter?.count);
    return res.json({ count: counter?.count });
  } catch (err: any) {
    console.error('Error in increment function:', err);
    return res.status(400).send({
      message: getErrorMessage(err)
    });
  }
};
