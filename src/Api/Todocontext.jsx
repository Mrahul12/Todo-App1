import React, { createContext, useState, useEffect } from "react";
import Form from "./../Component/Form";
const Context = createContext("No available data");

// ==================getData from localStorage===================================
const getValueLocalStorage = () => {
  let val = localStorage.getItem("item");
  // console.log(typeof val);
  if (typeof val == "string") {
    // ! JSON.parse derived from an array, the method  that convert JSON string into javascript object.
    let vals = JSON.parse(localStorage.getItem("item")); // '[]' ==> []
    // console.log(vals);
    return vals;
  } else {
    return [];
  }
};
const Todocontext = (props) => {
  const [todo, setTodo] = useState(getValueLocalStorage());

  // ?=======================Date object============================
  const date = new Date();
  const dates = date.toDateString();
  const time = date.toLocaleTimeString();
  // ? =======================Here Form handle====================================
  const handleForm = (e) => {
    e.preventDefault();
    let val = e.target[0].value;
    val.replace(/\r?\n/g, "<br />");
    if (val !== "") {
      setTodo([
        ...todo,
        { list: val, currentTime: time, currentDate: dates, complete: false },
      ]);
    }
    e.target[0].value = "";
  };
  // ? =========================Here Delete the item==================================

  const handleDelete = (ind) => {
    const deleteData = todo.filter((val, index) => {
      return index !== ind;
    });
    setTodo(deleteData);
  };
  // ? ========================Here Update or Edit the item===========================
  const handleEdit = (ind, listVal) => {
    const updateValue = prompt("Edit or Update Your todo item ", listVal);
    // ! if click ok then return value else click cancle then return null
    if (updateValue !== null) {
      const editValue = todo.map((value, index) => {
        return index === ind
          ? {
              ...value,
              list: updateValue,
              currentDate: dates,
              currentTime: time,
            }
          : value;
      });
      setTodo(editValue);
    }
  };
  // ? ========================Here checkitem when complete===========================
  const handleChecked = (e, ind) => {
    // console.log(e);
    if (e.target.checked == true) {
      const completeData = todo.map((value, index) => {
        return index === ind
          ? {
              ...value,
              complete: true,
            }
          : value;
      });
      setTodo(completeData);
    } else {
      const completeData = todo.map((value, index) => {
        return index === ind
          ? {
              ...value,
              complete: false,
            }
          : value;
      });
      setTodo(completeData);
    }
  };

  // ?===================localStorage Use for set data here=============================
  //! useEffect use to store data in localStorage
  //! locaStorage take two value key/value
  //! JSON.stringify use to convert value into a Json string or javascript object because localStorage store data in string format
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(todo)); //store like {item:'[]'}
  }, [todo]);

  // ?=====================clearAll data event here====================================
  const handleClearAll = () => {
    // const val = window.confirm("😯 Really, You Want To Clear All Data .");
    // console.log(val)// if(click ok){ return true}else{return false}
    if (window.confirm("😯 Really, You Want To Clear All Data .")) {
      localStorage.clear();
      setTodo([]);
    }
  };

  return (
    <Context.Provider
      value={{ todo, handleForm, handleDelete, handleEdit, handleChecked }}
    >
      {props.children}
      <Form />
    </Context.Provider>
  );
};
export default Todocontext;
export { Context };
