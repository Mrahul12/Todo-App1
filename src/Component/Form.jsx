import React, { useState, useContext, useRef } from "react";
import { Context } from "./../Api/Todocontext";
import { BsGithub } from "react-icons/bs";
import Todo from "./Todo";
const Form = () => {
  const { handleForm } = useContext(Context);
  return (
    <>
      <header className="h-[100vh] flex flex-col px-6 py-5 gap-5 overflow-hidden md:px-[120px]">
        <h1 className="text-center bg-white  rounded-[5px] p-2 text-2xl font-semibold shadow-[0px_0px_6px]  text-teal-700 flex gap-4 flex-wrap justify-center items-center whitespace-nowrap leading-6">
          Todo Application
          <a
            href="https://github.com/Mrahul12"
            className="bg-white text-emerald-600 shadow-[0px_0px_3px] px-2 py-1 rounded text-2xl hover:text-slate-500"
          >
            <BsGithub />
          </a>
        </h1>
        <form
          className="flex flex-col gap-2 bg-white px-10 py-5 rounded-md shadow-[1px_1px_5px_brown]  "
          onSubmit={handleForm}
        >
          <textarea
            className="h-14 bg-white resize-none border-2 border-slate-300 outline-none  p-2 font-semibold text-1xl rounded shadow-[0px_0px_5px]  "
            spellCheck={true}
          ></textarea>
          <button className="bg-teal-700 text-slate-900 text-2xl p-2 rounded font-bold  flex-grow shadow-[0px_0px_5px_red]">
            Add Data
          </button>
        </form>
        <Todo />
        <footer className="text-center bg-white  rounded-[5px] p-2 text-2xl font-semibold shadow-[0px_0px_6px]  text-teal-700 flex gap-4 flex-wrap justify-center items-center whitespace-nowrap leading-6">
          <details>
            <summary>Developer</summary>
            <h2>© AllRight reserved by Rahul Arya. 🤗</h2>
          </details>
        </footer>
      </header>
    </>
  );
};
export default Form;
