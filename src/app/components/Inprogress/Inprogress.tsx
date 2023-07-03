"use client";

import { FC } from "react";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineSend } from "react-icons/ai";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import TodoCards from "../shared/Card/todoCards";

async function getTodoCatINPROGRESS() {
    let url = "http://localhost:3000/api/v1/todo/cat/progress";
    try {
      let res = await axios.get(url);
      return res.data;
    } catch (err) {
      return console.error(err);
    }
  }

const Inprogress: FC = () => {
  //varibales for INPROGRESS Category
  const [showformINPROGRESS, setShowFormINPROGRESS] = useState(false);
  const [titleINPROGRESS, setTitleINPROGRESS] = useState("");
  const [contentINPROGRESS, setContentINPROGRESS] = useState("");

  const { data: dataprogress, refetch: refetchINPROGRESS } = useQuery(
    ["getAllTodoCatINPROGRESS"],
    getTodoCatINPROGRESS
  );

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

  return (
    <div className='flex flex-col gap-4'>

      <div
        className=' flex justify-between hover:cursor-pointer hover:transition hover:ease-in-out hover:scale-105 duration-150'
        onClick={() => setShowFormINPROGRESS(!showformINPROGRESS)}
      >
        <div>In progress</div>
        <AiOutlinePlus />
      </div>
      {showformINPROGRESS && (
        <div className='w-full shadow-xl border-2 h-36 rounded-md p-4 flex gap-5 justify-evenly items-center'>
          <div className=''>
            <div className='flex flex-col gap-1'>
              <div>Title</div>
              <input
                className='border-2'
                onChange={(event) => {
                  setTitleINPROGRESS(event.target.value);
                }}
              ></input>
            </div>
            <div className='flex flex-col gap-1'>
              <div>Content</div>
              <input
                className='border-2'
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
  );
};

export default Inprogress;
