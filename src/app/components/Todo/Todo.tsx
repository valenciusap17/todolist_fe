"use client";

import { FC } from "react";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineSend } from "react-icons/ai";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import TodoCards from "../shared/Card/todoCards";

async function getTodoCatTODO() {
  let url = "http://localhost:3000/api/v1/todo/cat/todo";
  try {
    let res = await axios.get(url);
    return res.data;
  } catch (err) {
    return console.error(err);
  }
}

const Todo: FC = () => {
  //varibales for TODO Category
  const [showformTODO, setShowFormTODO] = useState(false);
  const [titleTodo, setTitleTodo] = useState("");
  const [contentTodo, setContentTodo] = useState("");

  const { data: dataTodo, refetch: refetchTodo } = useQuery(
    ["getAllTodoCatTODO"],
    getTodoCatTODO
  );

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

  return (
    <div className='flex flex-col gap-4'>

      <div
        onClick={() => setShowFormTODO(!showformTODO)}
        className='flex justify-between hover:cursor-pointer hover:transition hover:ease-in-out hover:scale-105 duration-150'
      >
        <div className=''>To Do</div>
        <AiOutlinePlus />
      </div>
      {showformTODO && (
        <div className='w-full shadow-xl border-2 h-36 rounded-md p-4 flex gap-5 justify-evenly items-center'>
          <div className=''>
            <div className='flex flex-col gap-1'>
              <div>Title</div>
              <input
                className='border-2'
                onChange={(event) => {
                  setTitleTodo(event.target.value);
                }}
              ></input>
            </div>
            <div className='flex flex-col gap-1'>
              <div>Content</div>
              <input
                className='border-2'
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
  );
};

export default Todo;
