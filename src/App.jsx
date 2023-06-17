import ViewTable from "../src/components/ViewTable/ViewTable";
import AddUser from "./components/UserInput/AddUser";

function App() {
  return (
    <>
      <div className="container">
        <div className="text-center text-4xl py-10">To Do list</div>
        <ViewTable />
        <AddUser />
      </div>
    </>
  );
}

export default App;
