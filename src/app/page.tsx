"use client";
import Navbar from "./components/Navbar/Navbar";
import { AiOutlinePlus } from "react-icons/ai";
import TodoCards from "./components/Todo/todoCards";
import axios from "axios";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

async function getTodoCatTODO() {
  let url = "http://localhost:3000/api/v1/todo/cat/todo";
  try {
    let res = await axios.get(url);
    return res.data;
  } catch (err) {
    return console.error(err);
  }
}

async function getTodoCatINPROGRESS() {
  let url = "http://localhost:3000/api/v1/todo/cat/progress";
  try {
    let res = await axios.get(url);
    return res.data;
  } catch (err) {
    return console.error(err);
  }
}

async function getNotes() {
  let url = "http://localhost:3000/api/v1/note/getNotes";
  try {
    let res = await axios.get(url);
    return res.data;
  } catch (err) {
    return console.error(err);
  }
}

function Home() {
  // const { data } = useQuery(["getAllTodo"], getNotes);
  const { data: dataTodo } = useQuery(["getAllTodoCatTODO"], getTodoCatTODO);
  const { data: dataprogress } = useQuery(
    ["getAllTodoCatINPROGRESS"],
    getTodoCatINPROGRESS
  );
  const { data: dataNotes } = useQuery(["getAllNotes"], getNotes);

  console.log(dataNotes);
  console.log("hai");
  return (
    <>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <div className="h-screen bg-white  flex flex-col">
          <Navbar />
          <div className="pt-20 "></div>
          <div className="flex justify-center">
            <div className="w-11/12 flex justify-evenly gap-3">
              <div className="w-3/12 px-2 flex flex-col gap-5">
                <div className=" flex justify-between">
                  <div>To Do</div>
                  <AiOutlinePlus />
                </div>
                {dataTodo
                  ? dataTodo.data.todos.map((value: any, index: number) => (
                      <TodoCards title={value.title} time={value.createdAt} />
                    ))
                  : "Belum ada isinya ngab :("}
              </div>
              <div className="w-3/12 px-2 flex flex-col gap-5">
                <div className=" flex justify-between">
                  <div>In progress</div>
                  <AiOutlinePlus />
                </div>
                {dataprogress
                  ? dataprogress.data.todos.map((value: any, index: number) => (
                      <TodoCards title={value.title} time={value.createdAt} />
                    ))
                  : "Belum ada isinya ngab :("}
              </div>
              <div className="w-3/12 flex justify-between px-2">
                <div>Done</div>
                <AiOutlinePlus />
              </div>
              <div className="w-3/12 px-2 flex flex-col gap-5">
                <div className=" flex justify-between">
                  <div>Notes & References</div>
                  <AiOutlinePlus />
                </div>
                {dataNotes
                  ? dataNotes.data.todo.map((value: any, index: number) => (
                      <TodoCards title={value.content} time={value.createdAt} />
                    ))
                  : "Belum ada isinya ngab :("}
              </div>
            </div>
          </div>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Home />
    </QueryClientProvider>
  );
}
