export const key = {
  type: process.env.DB_TYPE,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.PORT,
  synchronize: true,
  entities: [__dirname + '/entities/**/*'],
  logging: true,

  secret: 'ABC'

}