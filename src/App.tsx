import { createContext, useState } from "react";
import "./App.css";

import FormSwitch from "./components/FormSwitch";

function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="container  m-h-screen">
      <div className="flex flex-col m-10">
        <div className="flex flex-row justify-center">
          <FormSwitch step={page} />
        </div>
        <div className="flex flex-row justify-between">
          <div>
            {page > 0 && (
              <button
                className="btn btn-primary"
                onClick={() => setPage((old) => old - 1)}
              >
                previous
              </button>
            )}
          </div>

          <div>
            {page < 3 && (
              <button
                className="btn btn-primary"
                onClick={() => setPage((old) => old + 1)}
              >
                next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <button onClick={setPage((old) => old + 1)}></button> */
}
