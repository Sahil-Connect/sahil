require("dotenv").config();

const { Pool, Client } = require("pg");

const connect = (databaseURL: string) => {
  const pool = new Pool({
    databaseURL,
  });

  const client = new Client({
    databaseURL,
  });
  // client.connect()
  return client;
};

export default connect;
