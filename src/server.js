const app = require("./app");
const port = process.env.BACKEND_API_SERVER_PORT || 8080;

const main = (port) => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  } catch (err) {
    console.error(err);
    process.exit();
  }
}

main(port);