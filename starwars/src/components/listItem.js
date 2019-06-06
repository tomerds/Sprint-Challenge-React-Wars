import React from 'react';

import List from './list';

const ListItem = props => {

  const namesList = props.starwarsChars.map(e => {
    return (
      <li className='name' key={e.key}>{e.name}</li>
    )
  })

  return (
    <List namesList={namesList} />
  )
}

export default ListItem;