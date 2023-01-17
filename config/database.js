// path: ./config/database.js

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      // host: env("DATABASE_HOST", "127.0.0.1"),
      // port: env.int("DATABASE_PORT", 5432),
      // database: env("DATABASE_NAME", "postgres"),
      // user: env("DATABASE_USERNAME", "saeindia"),
      // password: env("DATABASE_PASSWORD", "280868"),
      URL: env("postgres://saeindia_user:KQCICVihL97NlsAQ3P6eduApMht9wwUB@dpg-cf3f379gp3jl0q4791i0-a/saeindia"),
    },
  },
});
