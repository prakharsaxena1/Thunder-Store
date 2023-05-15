import './config.js';
import app from '../index.js';
// Sets the port for the server to run at
const PORT = process.env.PORT || 8000;

// LISTENING TO PORT
app.listen(PORT, () => {
  console.log(`listening to port: http://localhost:${PORT}/`);
});

export default app;
