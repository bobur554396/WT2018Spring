/*
* @Author: bobur554395
* @Date:   2018-01-23 15:20:49
* @Last Modified by:   bobur554395
* @Last Modified time: 2018-01-23 15:24:23
*/
import React, { Component } from 'react';

import Item from './Item'

class ListItems extends Component {
  render() {
    return (
      <ul>
        {
          this.props.items.map((item, index) =>
            <Item data={item} data-id={index} />
          )
        }
      </ul>
    );
  }
}


export default ListItems;