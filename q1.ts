// const axios = require("axios");
//ปาณัท แก้วลังกา 660610776
import axios from "axios";

/* assign interface/type to the function definition properly */
const getUser = async (userId: number) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = response.data.name;
    return user;
  } catch (err) {
    return "INVALID USER ID";
  }
};

//test case
const input1 = 1;
const input2 = 100;

//run
getUser(input1).then((result) => console.log(result));
getUser(input2).then((result) => console.log(result));

// module.exports = getUser;
export default getUser;

