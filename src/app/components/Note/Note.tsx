"use client";

import { FC } from "react";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineSend } from "react-icons/ai";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import TodoCards from "../shared/Card/todoCards";

async function getNotes() {
  let url = "http://localhost:3000/api/v1/note/getNotes";
  try {
    let res = await axios.get(url);
    return res.data;
  } catch (err) {
    return console.error(err);
  }
}

const Note: FC = () => {
  //varibales for INPROGRESS Category
  const [showformNote, setShowFormNote] = useState(false);
  const [contentNote, setContentNote] = useState("");

  const { data: dataNotes, refetch: refetchNotes } = useQuery(
    ["getAllNotes"],
    getNotes
  );

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
    <div className='flex flex-col gap-4'>
      <div
        className=' flex justify-between hover:cursor-pointer hover:transition hover:ease-in-out hover:scale-105 duration-150'
        onClick={() => setShowFormNote(!showformNote)}
      >
        <div>Notes & References</div>
        <AiOutlinePlus />
      </div>
      {showformNote && (
        <div className='w-full shadow-xl border-2 h-20 rounded-md p-4 flex gap-5 justify-evenly items-center'>
          <div className=''>
            <div className='flex flex-col gap-1'>
              <div>Content</div>
              <input
                className='border-2'
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
  );
};

export default Note;
