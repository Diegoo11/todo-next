import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: 'containers-us-west-107.railway.app',
    user: 'root',
    password: 'GLqQ5otQVVbinmxmkfw0',
    database: 'railway',
    port: '5484',
  },
});

const connectDB = async ({ query, values }) => {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (err) {
    console.log('error de db', err);
    throw new Error(err.message);
  }
};

export default connectDB;
