import Friends from "./components/Friends";
import SplitForm from "./components/SplitForm";
import data from "./data";

function App() {
  return (
    <div className="bill-split">
      <Friends friends={data} />
      <SplitForm />
    </div>
  );
}

export default App;
