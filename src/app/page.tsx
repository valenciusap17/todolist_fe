import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import {
  AiOutlinePlus,
  AiOutlineCheckCircle,
  AiOutlineCalendar,
} from "react-icons/ai";

export default function Home() {
  return (
    <>
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
              <div className="w-full shadow-xl border-2 h-28 rounded-md p-4 flex flex-col justify-around">
                <div className="flex items-center gap-2 ">
                  <AiOutlineCheckCircle size={25} />
                  <div className="">Mengerjakan Tugas Basdat</div>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineCalendar size={15} className="" />

                  <div className="text-xs text-gray-500">Wednesday</div>
                </div>
              </div>
              <div className="w-full shadow-xl border-2 h-28 rounded-md p-4 flex flex-col justify-around">
                <div className="flex items-center gap-2 ">
                  <AiOutlineCheckCircle size={25} />
                  <div className="">Mengerjakan Tugas Basdat</div>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineCalendar size={15} className="" />

                  <div className="text-xs text-gray-500">Wednesday</div>
                </div>
              </div>
              <div className="w-full shadow-xl border-2 h-28 rounded-md p-4 flex flex-col justify-around">
                <div className="flex items-center gap-2 ">
                  <AiOutlineCheckCircle size={25} />
                  <div className="">Mengerjakan Tugas Basdat</div>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineCalendar size={15} className="" />

                  <div className="text-xs text-gray-500">Wednesday</div>
                </div>
              </div>
              
            </div>
            <div className="w-3/12 flex justify-between px-2">
              <div>In progress</div>
              <AiOutlinePlus />
            </div>
            <div className="w-3/12 flex justify-between px-2">
              <div>Done</div>
              <AiOutlinePlus />
            </div>
            <div className="w-3/12 flex justify-between px-2">
              <div>Notes & References</div>
              <AiOutlinePlus />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
