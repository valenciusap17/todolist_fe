"use client";
import Navbar from "./components/Navbar/Navbar";
import { AiOutlinePlus, AiOutlineSend } from "react-icons/ai";
import TodoCards from "./components/Todo/todoCards";
import axios from "axios";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { useState } from "react";

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
  const [showform, setShowForm] = useState(false);
  const [titleTodo, setTitleTodo] = useState("");
  const [contentTodo, setContentTodo] = useState("");
  console.log(titleTodo);

  return (
    <>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <div className="h-screen bg-white  flex flex-col">
          <Navbar />
          <div className="pt-20 "></div>
          <div className="flex justify-center">
            <div className="w-11/12 flex justify-evenly gap-3">
              <div className="w-3/12 px-2 flex flex-col gap-5">
                <div
                  onClick={() => setShowForm(!showform)}
                  className=" flex justify-between hover:cursor-pointer hover:transition hover:ease-in-out hover:scale-105 duration-150"
                >
                  <div className="">To Do</div>
                  <AiOutlinePlus />
                </div>
                {showform && (
                  <div className="w-full shadow-xl border-2 h-36 rounded-md p-4 flex gap-5 justify-evenly items-center">
                    <div className="">
                      <div className="flex flex-col gap-1">
                        <div>Title</div>
                        <input
                          className="border-2"
                          onChange={(event) => {
                            setTitleTodo(event.target.value);
                          }}
                        ></input>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div>Content</div>
                        <input
                          className="border-2"
                          onChange={(event) => {
                            setContentTodo(event.target.value);
                          }}
                        ></input>
                      </div>
                    </div>
                    <AiOutlineSend size={50} className={`cursor-pointer`} />
                  </div>
                )}

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
