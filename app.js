const express = require("express");
const { graphqlHTTP } = require("express-graphql");
require("./config/database");
const bookSchema = require("./schema/schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: bookSchema,
    graphiql: true,
  })
);

const PORT = 4000;
app.listen(PORT, () => {
  console.log("App listening to Port : ", PORT);
});
