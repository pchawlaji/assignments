import { RevenueCard } from "./components/revenueCard";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
          <RevenueCard title={"Amount Pending"} orderCount={13} amount={"92,312.20"} />
        </div>
      </div>
    </>
  );
}

export default App;
