/* eslint-disable no-console */

'use client';

import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import Button from './Button';

function Task({ name, description, id }) {
  const router = useRouter();
  const handdleDelete = async () => {
    console.log('onClick');
    try {
      await axios.post('/api/todo/deleteTask', { task_id: id });
      return router.refresh();
    } catch (err) {
      return console.error(err);
    }
  };

  return (
    <div className="flex flex-col bg-downy-200 rounded-md justify-between p-4
      items-start h-64"
    >
      <h2 className="bg-downy-100 px-3 py-1 rounded-md w-full">
        {name}
      </h2>
      <span className="bg-downy-100 px-3 py-1 rounded-md h-1/2 w-full">
        {description}
      </span>
      <div className="flex gap-4 justify-end w-full">
        <Button onClick={handdleDelete} className="bg-downy-100 px-3 py-1 rounded-md hover:bg-gray-900 hover:text-gray-100 transition-colors">
          Delete
        </Button>
        <Link href={`/editTask/${id}`} className="bg-downy-100 px-3 py-1 rounded-md hover:bg-gray-900 hover:text-gray-100 transition-colors">
          Edit
        </Link>
      </div>
    </div>
  );
}

export default Task;
