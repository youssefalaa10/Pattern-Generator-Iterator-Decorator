import { iterator } from "./Iterator/index";
import { Generator } from "./Generator/index";

function Home() {
  const iteratorRange = iterator(1, 27, 3);
  const generatorRange = Generator(2, 12, 2);

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-6xl w-full flex flex-col md:flex-row">
        <section className="flex-1 p-6 flex flex-col items-center border-b md:border-b-0 md:border-r border-gray-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Iterator Range
          </h2>
          <ul className="grid grid-cols-3 gap-6">
            {Array.from(iteratorRange).map((value) => (
              <li
                className="flex items-center justify-center h-16 w-16 bg-green-100 border border-green-400 text-green-800 rounded-full text-xl font-bold"
                key={value}
              >
                {value}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex-1 p-6 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 ">
            Generator Range
          </h2>
          <ul className="grid grid-cols-3 gap-6">
            {Array.from(generatorRange).map((value) => (
              <li
                className="flex items-center justify-center h-16 w-16 bg-green-100 border border-green-400 text-green-800 rounded-full text-xl font-bold"
                key={value}
              >
                {value}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Home;
