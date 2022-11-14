const app = require("./app");
const port = process.env.BACKEND_API_SERVER_PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});