import React, {Component} from "react";

const GetOptionsArray = (count) => {
  console.log(count, 'this is count')
  const array = [];
  for (let i = 0; i < count; i++) {
    array.push(i + 1);
  }

  return array;
};

export default GetOptionsArray;