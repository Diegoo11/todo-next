import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: 'localhost',
    user: 'root',
    password: '11yenaro11',
    database: 'todo',
    port: '3306',
  },
});

const connectDB = async ({ query, values }) => {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default connectDB;
