import './config.js';
// Sets the port for the server to run at
const PORT = process.env.PORT || 8000;

import app from '../index.js';

// LISTENING TO PORT
app.listen(PORT, () => {
  console.log(`listening to port: http://localhost:${PORT}/`);
});

export default app;
