import dotenv from 'dotenv';

dotenv.config();

export default {
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/videos-db',
    PORT: process.env.PORT || 4000
}