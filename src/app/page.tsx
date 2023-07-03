import Navbar from "./components/Navbar/Navbar";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./components/Todo/Todo";
import Inprogress from "./components/Inprogress/Inprogress";
import Note from "./components/Note/Note";

function Home() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />
      <div className='grid grid-cols-4 pt-16 px-16 gap-8 justify-center'>
        <Todo />
        <Inprogress />
        <div className='flex justify-between px-2'>
          <div>Done</div>
          <AiOutlinePlus />
        </div>
        <Note />
      </div>
    </div>
  );
}

export default function App() {
  return <Home />;
}
