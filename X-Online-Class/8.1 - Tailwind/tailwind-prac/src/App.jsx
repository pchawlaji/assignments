import "./App.css";

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ backgroundColor: "red" }}>Hi</div>
        <div style={{ backgroundColor: "blue" }}>Hi</div>
        <div style={{ backgroundColor: "yellow" }}>Hi</div>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 bg-slate-300">
        <div className="bg-red-500 col-span-1">Hi</div>
        <div className="bg-blue-500 col-span-1">Hi</div>
        <div className="bg-green-500 col-span-1">Hi</div>
      </div>
    </>
  );
}

export default App;
