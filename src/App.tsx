import Button from './components/Button';
import TextInput from './components/TextInput';

function App(): JSX.Element | null {
  return (
    <div className="h-screen w-full flex flex-col items-center pt-32 px-2 bg-white">
      <div className="max-w-[720px]">
        <div className="p-6 rounded-2xl text-center bg-blue-400 hover:bg-blue-500 active:bg-blue-700 hover:shadow-lg transition-all">
          <header>
            <h1 className="text-6xl text-white cursor-default">
              <strong className="font-extrabold">Delta</strong>{' '}
              <span className="-ml-4 font-thin">Weather</span>
            </h1>
          </header>
        </div>

        <header>
          <div className="mt-8 w-full flex justify-center">
            <form
              className="flex items-end gap-4 w-full"
              onSubmit={() => console.log('submit')}
            >
              <TextInput
                labelText="Location"
                onChange={(event) => console.log(event.target.value)}
                placeholder="Try Barcelona or London..."
                value={''}
              />
              <Button
                className="mb-0.5"
                label="Search"
                onClick={() => console.log('click')}
                type="submit"
              />
            </form>
          </div>
        </header>
      </div>

      <section className="border-2 border-blue-200 rounded-xl w-2/3 p-8 mt-8">
        <div>Results</div>
      </section>
    </div>
  );
}

export default App;
