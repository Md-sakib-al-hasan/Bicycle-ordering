import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  database_url: process.env.DATABASE_URL,
  port: process.env.PORT,
  bcrypt: process.env.BCRYPT_SALT_ROUNDS,
  jwt_key: process.env.JWT_SECRET_Key,
};
