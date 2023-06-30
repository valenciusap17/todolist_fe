import { FC } from "react";
import { todoData } from "../../interface/todo_data";
import {
  AiOutlinePlus,
  AiOutlineCheckCircle,
  AiOutlineCalendar,
} from "react-icons/ai";

const TodoCards: FC<todoData> = (toDo) => (
  <>
    <div className="w-full shadow-xl border-2 h-28 rounded-md p-4 flex flex-col justify-around">
      <div className="flex items-center gap-2 ">
        <AiOutlineCheckCircle size={25} />
        <div className="">{toDo.title}</div>
      </div>
      <div className="flex items-center gap-2">
        <AiOutlineCalendar size={15} className="" />

        <div className="text-xs text-gray-500">{toDo.time}</div>
      </div>
    </div>
  </>
);

export default TodoCards;
