import Button from './components/Button';
import TextInput from './components/TextInput';

function App(): JSX.Element | null {
  return (
    <div className="h-screen w-full flex flex-col items-center pt-32 px-2 bg-white">
      <div className="w-[720px]">
        <div className="p-6 rounded-2xl text-center bg-blue-400 hover:bg-blue-500 active:bg-blue-700 hover:shadow-lg transition-all">
          <header>
            <h1 className="text-6xl text-white cursor-default">
              Delta <strong className="-ml-4 font-black">Weather</strong>
            </h1>
          </header>
        </div>

        <main className="mt-8 w-full flex justify-center">
          <form
            className="flex items-end gap-4 w-full"
            onSubmit={(event) => event.preventDefault()}
          >
            <TextInput
              labelText="Location"
              onChange={(event) => console.log(event.target.value)}
              placeholder="Try Barcelona or London..."
            />
            <Button
              className="mb-0.5"
              label="Search"
              onClick={() => console.log('click')}
            />
          </form>
        </main>
      </div>
    </div>
  );
}

export default App;
