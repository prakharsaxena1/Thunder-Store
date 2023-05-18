import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
// Loads the test.env file
dotenv.config({ path: __dirname + '/.env' });
