/* eslint-disable no-console */
import { getServerSession } from 'next-auth';
import Task from './Task';
import connectDB from '@/libs/db';
import { authOptions } from '../api/auth/[...nextauth]/route';

const queryData = async () => {
  try {
    const { user } = await getServerSession(authOptions);
    const rows = await connectDB({
      query: 'SELECT * FROM task WHERE user_id = ? LIMIT 9',
      values: [user.id],
    });
    return rows;
  } catch (err) {
    return null;
  }
};

async function BoxTasks() {
  const data = await queryData();
  return (
    <div className="grid grid-cols-4-min(300) gap-5 max-h-full
    justify-start items-start w-full overflow-auto"
    >
      {data
        ? data.map((t) => (
          <Task
            key={t.task_id}
            name={t.name}
            description={t.description}
            id={t.task_id}
          />
        )) : null}
    </div>
  );
}

export default BoxTasks;
