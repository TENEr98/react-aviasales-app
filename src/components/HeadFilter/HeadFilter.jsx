import React from 'react'
import { Radio } from 'antd'

import './HeadFilter.scss'

const HeadFilter = () => {
  return (
    <div className="head_filter__blog">
      <Radio.Group optionType="button" buttonStyle="solid" size="large">
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

export default HeadFilter
