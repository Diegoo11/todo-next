/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BoxError from '../components/BoxError';

function AddTask() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [state, setState] = useState(false);
  const [err, setErr] = useState('');

  const router = useRouter();

  const displayError = (msgErr) => {
    setErr(msgErr);
    setTimeout(() => {
      setErr('');
    }, 3000);
  };

  const handdleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/todo/addTask', {
        name, description, state,
      });
      router.refresh();
    } catch (error) {
      console.error({ error });
      displayError(err.message);
    }
    setName('');
    setDescription('');
    setState(false);
  };
  return (
    <>
      <div className="h-1/4 flex justify-center items-center">
        <h1 className="font-bold text-2xl underline uppercase">Create Task</h1>
      </div>
      <form onSubmit={handdleSubmit} className="h-full flex flex-col justify-start">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 text-sm text-gray-600">
            Description
          </label>
          <textarea
            rows={4}
            className="resize-none w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block mb-2 text-sm text-gray-600">
            State
          </label>
          <input
            id="state"
            name="state"
            type="checkbox"
            checked={state}
            onChange={(e) => setState(e.target.checked)}
            className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <button type="submit" className="w-32 bg-gray-900 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2 font-bold">
          Add Task
        </button>
      </form>
      <BoxError message={err} />
    </>
  );
}

export default AddTask;
