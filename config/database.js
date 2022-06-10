const secretdata = {
  JWT_SIGNATURE_KEY:"Rahasia",
  DB_USER:"wkpcswejifcnie",
  DB_PASSWORD:"453401b3576198ed78adaab1410d9fec605ef171fcf0c5b2abda65abe063f743",
  DB_NAME:"d6nbmetu30192j",
  DB_HOST:"ec2-52-73-184-24.compute-1.amazonaws.com",
  DB_PORT:"5432",
  
}

const {
  DB_USER = '',
  DB_PASSWORD = '',
  DB_NAME = 'bcr',
  DB_HOST = '127.0.0.1',
  DB_PORT = '5432',
} = secretdata;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },

  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },

  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },

  }
}
