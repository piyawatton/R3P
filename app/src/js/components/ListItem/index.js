import React from 'react'
import './index.scss'

const ListItem = ({ className = '', dataList = [], onClickItem = () => { } }) => {
  return (
    <div id='list-item' className={`list-item ${className}`} >
      {
        dataList.map(item =>
          <div className='item' onClick={() => { onClickItem(item) }}>
            {item.name}
          </div>
        )
      }
    </div>
  )
}

export default ListItem
