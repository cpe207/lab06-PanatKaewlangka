// const axios = require("axios");
//ปาณัท แก้วลังกา 660610776
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  try {
    const TodoRes = await axios.get('https://jsonplaceholder.typicode.com/todos/' + todoId)
    const OwnerRes = await axios.get('https://jsonplaceholder.typicode.com/users/' + TodoRes.data.userId)
    const tasks = {
      owner: OwnerRes.data.name,
      title: TodoRes.data.title,
      completed: TodoRes.data.completed,
    }
    return tasks;
  }
  catch (err) {
    return "INVALID TODO ID";
  }
};


//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;