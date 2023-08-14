import Button from './Button';

function Task() {
  return (
    <div className="flex flex-col bg-downy-200 rounded-md justify-between p-4
      items-start h-64"
    >
      <h2 className="bg-downy-100 px-3 py-1 rounded-md">
        NombreDeTask
      </h2>
      <span className="bg-downy-100 px-3 py-1 rounded-md h-1/2">
        Mucho texto mucho texto mucho texto mucho texto
      </span>
      <div className="flex gap-4 justify-end w-full">
        <Button className="bg-downy-100 px-3 py-1 rounded-md">
          Delete
        </Button>
        <Button className="bg-downy-100 px-3 py-1 rounded-md">
          Edit
        </Button>
      </div>
    </div>
  );
}

export default Task;
