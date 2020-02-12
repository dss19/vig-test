import React, { Component } from 'react';
import GoBackButton from './GoBackButton';


class items extends Component {  
  render() {
    const {items} = this.props;     
    return (
      <div>
        {items.map(item => {
          return <p key={item.name}>Название: {item.name}, Количество: {item.quantity}, Цена: {item.price}</p>
        })}
        <p>Итого: {items.length}</p>
        <GoBackButton />                        
      </div>
    );
  }
}

export default items;