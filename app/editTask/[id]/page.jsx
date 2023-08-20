import connectDB from '@/libs/db';
import FormEdit from './FormEdit';

const queryData = async (id) => {
  const [row] = await connectDB({
    query: 'SELECT * FROM task WHERE task_id = ?',
    values: [id],
  });

  return row;
};

async function EditTask({ params }) {
  const task = await queryData(params.id);
  return (
    <>
      <div className="h-1/4 flex justify-center items-center">
        <h1 className="font-bold text-2xl underline uppercase">Create Task</h1>
      </div>
      <FormEdit task={task} />
    </>
  );
}

export default EditTask;
