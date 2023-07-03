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
  const { data: dataTodo, refetch: refetchTodo } = useQuery(
    ["getAllTodoCatTODO"],
    getTodoCatTODO
  );
  const { data: dataprogress, refetch: refetchINPROGRESS } = useQuery(
    ["getAllTodoCatINPROGRESS"],
    getTodoCatINPROGRESS
  );
  const { data: dataNotes, refetch: refetchNotes } = useQuery(
    ["getAllNotes"],
    getNotes
  );

  //varibales for TODO Category
  const [showformTODO, setShowFormTODO] = useState(false);
  const [titleTodo, setTitleTodo] = useState("");
  const [contentTodo, setContentTodo] = useState("");

  //varibales for INPROGRESS Category
  const [showformINPROGRESS, setShowFormINPROGRESS] = useState(false);
  const [titleINPROGRESS, setTitleINPROGRESS] = useState("");
  const [contentINPROGRESS, setContentINPROGRESS] = useState("");

  //varibales for INPROGRESS Category
  const [showformNote, setShowFormNote] = useState(false);
  const [contentNote, setContentNote] = useState("");

  console.log(titleTodo);

  const handleSubmitcatTODO = () => {
    let url = "http://localhost:3000/api/v1/todo";
    try {
      let data = axios
        .post(url, {
          title: titleTodo,
          content: contentTodo,
          category: "TODO",
        })
        .then(() => {
          setTitleTodo(""), setContentTodo("");
        })
        .then(() => refetchTodo());
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitcatINPROGRESS = () => {
    let url = "http://localhost:3000/api/v1/todo";
    try {
      let data = axios
        .post(url, {
          title: titleINPROGRESS,
          content: contentINPROGRESS,
          category: "INPROGRESS",
        })
        .then(() => {
          setTitleINPROGRESS(""), setContentINPROGRESS("");
        })
        .then(() => refetchINPROGRESS());
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitNote = () => {
    let url = "http://localhost:3000/api/v1/note";
    try {
      let data = axios
        .post(url, {
          content: contentNote,
        })
        .then(() => {
          setContentNote("");
        })
        .then(() => refetchNotes());
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="h-screen bg-white  flex flex-col">
        <Navbar />
        <div className="pt-20 "></div>
        <div className="flex justify-center">
          <div className="w-11/12 flex justify-evenly gap-3">
            <div className="w-3/12 px-2 flex flex-col gap-5">
              <div
                onClick={() => setShowFormTODO(!showformTODO)}
                className=" flex justify-between hover:cursor-pointer hover:transition hover:ease-in-out hover:scale-105 duration-150"
              >
                <div className="">To Do</div>
                <AiOutlinePlus />
              </div>
              {showformTODO && (
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
                  <AiOutlineSend
                    size={50}
                    className={`cursor-pointer`}
                    onClick={() => handleSubmitcatTODO()}
                  />
                </div>
              )}

              {dataTodo
                ? dataTodo.data.todos.map((value: any, index: number) => (
                    <TodoCards title={value.title} time={value.createdAt} />
                  ))
                : "Belum ada isinya ngab :("}
            </div>
            <div className="w-3/12 px-2 flex flex-col gap-5">
              <div
                className=" flex justify-between hover:cursor-pointer hover:transition hover:ease-in-out hover:scale-105 duration-150"
                onClick={() => setShowFormINPROGRESS(!showformINPROGRESS)}
              >
                <div>In progress</div>
                <AiOutlinePlus />
              </div>
              {showformINPROGRESS && (
                <div className="w-full shadow-xl border-2 h-36 rounded-md p-4 flex gap-5 justify-evenly items-center">
                  <div className="">
                    <div className="flex flex-col gap-1">
                      <div>Title</div>
                      <input
                        className="border-2"
                        onChange={(event) => {
                          setTitleINPROGRESS(event.target.value);
                        }}
                      ></input>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div>Content</div>
                      <input
                        className="border-2"
                        onChange={(event) => {
                          setContentINPROGRESS(event.target.value);
                        }}
                      ></input>
                    </div>
                  </div>
                  <AiOutlineSend
                    size={50}
                    className={`cursor-pointer`}
                    onClick={() => handleSubmitcatINPROGRESS()}
                  />
                </div>
              )}
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
              <div
                className=" flex justify-between"
                onClick={() => setShowFormNote(!showformNote)}
              >
                <div>Notes & References</div>
                <AiOutlinePlus />
              </div>
              {showformNote && (
                <div className="w-full shadow-xl border-2 h-20 rounded-md p-4 flex gap-5 justify-evenly items-center">
                  <div className="">
                    <div className="flex flex-col gap-1">
                      <div>Content</div>
                      <input
                        className="border-2"
                        onChange={(event) => {
                          setContentNote(event.target.value);
                        }}
                      ></input>
                    </div>
                  </div>
                  <AiOutlineSend
                    size={30}
                    className={`cursor-pointer`}
                    onClick={() => handleSubmitNote()}
                  />
                </div>
              )}
              {dataNotes
                ? dataNotes.data.todo.map((value: any, index: number) => (
                    <TodoCards title={value.content} time={value.createdAt} />
                  ))
                : "Belum ada isinya ngab :("}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return <Home />;
}
