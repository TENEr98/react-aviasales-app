import React, { useState } from 'react'

import { Checkbox } from 'antd'

import './SideFilter.scss'

const DEFAULT_CHECKBOX = [
  {
    name: 'all',
    label: 'Все',
    value: false
  },
  {
    name: '0',
    label: 'Без пересадок',
    value: false
  },
  {
    name: '1',
    label: '1 пересадка',
    value: false
  },
  {
    name: '2',
    label: '2 пересадки',
    value: false
  },
  {
    name: '3',
    label: '3 пересадки',
    value: false
  }
]

const SideFilter = ({ filterTickets }) => {
  const [checkboxList, setCheckboxList] = useState(DEFAULT_CHECKBOX)

  const onCheckboxChange = ({ target: { checked, name } }) => {
    const tempCheckbox = [...checkboxList]
    if (typeof Number(name) === 'number') {
      tempCheckbox[0].value = false
      tempCheckbox.forEach(
        (item) => item.name === name && (item.value = checked)
      )
    }
    if (tempCheckbox[0].value === false) {
      const sliceFilters = tempCheckbox.slice(1)
      const isAllChecked = sliceFilters.every((item) => item.value === true)
      tempCheckbox[0].value = isAllChecked
    }
    if (isNaN(name)) {
      tempCheckbox.forEach((item) => (item.value = checked))
    }
    const checkedFilters = tempCheckbox
      .map((item) => item.value === true && item.name)
      .filter(Boolean)

    filterTickets(checkedFilters)
    setCheckboxList(tempCheckbox)
  }

  return (
    <div className="side_filter__blog">
      <div className="side_filter__container">
        <h4 className="side_filter__head_text">Количество пересадок</h4>
        <div className="side_filter__checkbox_blog">
          {checkboxList.map((item) => (
            <Checkbox
              name={item.name}
              checked={item.value}
              key={item.name}
              onChange={onCheckboxChange}
            >
              {item.label}
            </Checkbox>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideFilter
