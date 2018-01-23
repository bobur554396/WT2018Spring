/*
* @Author: bobur554395
* @Date:   2018-01-23 15:18:33
* @Last Modified by:   bobur554395
* @Last Modified time: 2018-01-23 15:28:35
*/
import React, { Component } from 'react';


function Item(props){
  return(
      <li>
        <h3>{props.fullname} </h3>
        <p>77071234567</p>
      </li>
  );
}


// class Item extends Component {
//   render() {
//     return (
//       <li>
//         <h3>fName lName</h3>
//         <p>77071234567</p>
//       </li>
//     );
//   }
// }



export default Item;
