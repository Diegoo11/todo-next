/* eslint-disable jsx-a11y/label-has-associated-control */
function RightBar() {
  return (
    <div className="flex flex-col justify-start items-center bg-downy-200 rounded-lg
    text-downy-900 w-full max-w-xs shadow-sm h-full p-10"
    >
      <div className="h-1/4 flex justify-center items-center">
        <h1 className="font-bold text-2xl underline uppercase">Create Task</h1>
      </div>
      <form className="h-full flex flex-col justify-start">
        <div class="mb-4">
          <label for="nombre" className="block mb-2 text-sm text-gray-600">
            Name
          </label>
          <input type="text" id="nombre" name="nombre" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
        </div>
        <div class="mb-4">
          <label for="apellido" className="block mb-2 text-sm text-gray-600">
            Description
          </label>
          <textarea rows={4} className="resize-none w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" type="text" id="apellido" name="apellido" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
        </div>
        <div className="mb-4">
          <label for="state" className="block mb-2 text-sm text-gray-600">
            State
          </label>
          <input id="teal-checkbox" type="checkbox" value="" class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        </div>
        <button type="submit" className="w-32 bg-gray-900 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2 font-bold">
          Registro
        </button>
      </form>
    </div>
  );
}

export default RightBar;
