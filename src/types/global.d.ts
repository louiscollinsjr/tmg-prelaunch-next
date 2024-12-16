import { Connection } from 'mongoose';

declare global {
  interface GlobalMongoose {
    conn: Connection | null;
    promise: Promise<Connection> | null;
  }

  const mongoose: GlobalMongoose;
}
