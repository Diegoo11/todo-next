import Button from './Button';

function LeftBar() {
  return (
    <nav className="h-screen flex flex-col items-center w-full
      max-w-xs bg-gray-900 text-gray-100 rounded-r-md"
    >
      <div className="h-1/6 flex flex-col justify-end items-center">
        <h1 className="text-6xl uppercase font-extrabold">
          Todo
        </h1>
        <h1 className="text-3xl uppercase font-extrabold">
          with Next
        </h1>
      </div>
      <ul h1 className="h-3/6 flex flex-col items-center justify-center text-xl uppercase gap-4">
        <li>
          <Button>
            Home
          </Button>
        </li>
        <li>
          <Button>
            Profile
          </Button>
        </li>
        <li>
          <Button>
            Tasks
          </Button>
        </li>
      </ul>
      <ul h1 className="h-2/6 flex flex-col items-center justify-center text-xl uppercase gap-4">
        <li>
          <Button>
            Log In
          </Button>
        </li>
        <li>
          <Button>
            Sign in
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default LeftBar;
