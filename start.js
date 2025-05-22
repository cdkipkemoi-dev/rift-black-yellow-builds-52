
// This script determines which environment to run
if (process.env.NODE_ENV === 'production') {
  // Run the express server in production
  require('./server.js');
} else {
  // In development, we'll use Vite's dev server
  console.log('Development mode - use `npm run dev` to start the Vite dev server');
}
