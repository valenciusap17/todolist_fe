import { FC } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import TodoCards from "./../components/Todo/todoCards";

const todoSection: FC = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-11/12 flex justify-evenly gap-3">
          <div className="w-3/12 px-2 flex flex-col gap-5">
            <div className=" flex justify-between">
              <div>To Do</div>
              <AiOutlinePlus />
            </div>
            <TodoCards title="Mengerjakan Tugas Basdat" time="Wednesday" />
            <TodoCards title="Mengerjakan Tugas Basdat" time="Wednesday" />
            <TodoCards title="Mengerjakan Tugas Basdat" time="Wednesday" />
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
    </>
  );
};

export default todoSection;
