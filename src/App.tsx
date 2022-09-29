import "./App.css";

import MultiPageForm from "./components/MultiPageForm";

function App() {
  return (
    <div className="container  m-h-screen">
      <div className="flex flex-col m-10">
        <div className="flex flex-row justify-center">
          <MultiPageForm />
        </div>
      </div>
    </div>
  );
}

export default App;
