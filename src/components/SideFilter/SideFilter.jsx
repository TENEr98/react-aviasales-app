import React from 'react'

import { Checkbox } from 'antd'

import './SideFilter.scss'

const SideFilter = () => {
  return (
    <div className="side_filter__blog">
      <div className="side_filter__container">
        <h4 className="side_filter__head_text">Количество пересадок</h4>
        <div className="side_filter__checkbox_blog">
          <Checkbox>Все</Checkbox>
          <Checkbox>Без пересадок</Checkbox>
          <Checkbox>1 пересадка</Checkbox>
          <Checkbox>2 пересадки</Checkbox>
          <Checkbox>3 пересадки</Checkbox>
        </div>
      </div>
    </div>
  )
}

export default SideFilter
