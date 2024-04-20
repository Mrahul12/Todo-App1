import React, { useState, useContext, useRef } from "react";
import { Context } from "./../Api/Todocontext";
import { BiShower, BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
const Todo = () => {
  const { todo, handleDelete, handleEdit, handleClearAll, handleChecked } =
    useContext(Context);
    // console.log(show)

  //? console.log(todo);
  return (
    <>
      <section className="flex flex-col gap-3 px-3 py-4  bg-white rounded-md shadow-[1px_1px_5px_green] h-[100vh] overflow-x-hidden overflow-y-scroll relative scrollbar-hide">
        <ul className="flex flex-col gap-2 list-none">
          {/* { console.log(todo.length)} */}
          {todo.length !== 0 ? (
            todo.map((item, ind) => {
              // console.log(item.id);
              return (
                <section key={ind} className="flex flex-col gap-2">
                  <li
                    key={ind}
                    className={`flex justify-between overflow-x-scroll overflow-y-hidden scrollbar-hide  items-center px-3 py-3 rounded shadow-[0px_0px_3px_green] scroll-hidden bg-white text-xl font-semibold gap-3 leading-4 whitespace-nowrap
                    ${
                      item.complete
                        ? "bg-red-600 text-white line-through opacity-1"
                        : "bg-white opacity-1"
                    } transition-bg duration-1000 `}
                  >
                    <input
                      type="checkbox"
                      checked={item.complete}
                      className="text-xl text-green-400 w-5 h-5 "
                      onChange={(e) => handleChecked(e, ind)}
                    />
                    {item.list}
                    <article className="flex flex-col gap-0">
                      <span className="text-[10px] text-center">
                        {item.currentTime}
                      </span>
                      <span className="text-[10px] text-center">
                        {item.currentDate}
                      </span>
                    </article>
                    <div className="flex gap-5 ">
                      {item.complete ? (
                        ""
                      ) : (
                        <button
                          className="bg-white text-emerald-400 shadow-[0px_0px_3px] px-2 py-1 rounded text-2xl"
                          onClick={() => handleEdit(ind, item.list)}
                        >
                          <BiSolidEdit />
                        </button>
                      )}
                      <button
                        className="bg-white text-red-400 shadow-[0px_0px_3px] px-2 py-1 rounded  text-2xl"
                        onClick={() => handleDelete(ind)}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </li>
                </section>
              );
            })
          ) : (
            <h2 className="flex justify-center items-center h-[60vh] font-bold text-center text-2xl text-slate-400 max-sm:[transform:rotate(90deg)] max-sm:text-nowrap">
              😒 Ufff , No Data Available Here.
            </h2>
          )}
        </ul>
      </section>
      <button
        onClick={handleClearAll}
        className="text-center bg-white  rounded-[20px] p-2 text-2xl font-semibold shadow-[0px_0px_6px]  text-red-500"
      >
        Clear All
      </button>
    </>
  );
};
export default Todo;
