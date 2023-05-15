import './config.mjs';
import app from '../app.mjs';
// Sets the port for the server to run at
const PORT = process.env.PORT || 8000;

// LISTENING TO PORT
app.listen(PORT, () => {
  console.log(`listening to port: http://localhost:${PORT}/`);
});

export default app;
