import React from 'react'
import { Radio } from 'antd'

import './HeadSort.scss'

const HeadSort = ({ sortTickets }) => {
  const onChangeRadioBtn = ({ target: { value } }) => sortTickets(value)

  return (
    <div className="head_filter__blog">
      <Radio.Group
        optionType="button"
        buttonStyle="solid"
        size="large"
        onChange={onChangeRadioBtn}
      >
        <Radio.Button value="cheap" type="primary">
          Самые Дешёвые
        </Radio.Button>
        <Radio.Button value="fast" type="primary">
          Самые Быстрые
        </Radio.Button>
        <Radio.Button value="optimal" type="primary">
          оптимальные
        </Radio.Button>
      </Radio.Group>
    </div>
  )
}

export default HeadSort
