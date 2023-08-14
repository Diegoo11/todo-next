import Task from './Task';

function BoxTasks() {
  return (
    <div className="grid grid-cols-4-min(300) gap-5 max-h-full
    justify-start items-start w-full overflow-auto"
    >
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
}

export default BoxTasks;
