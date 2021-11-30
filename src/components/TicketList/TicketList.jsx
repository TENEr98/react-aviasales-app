import React from 'react'

import { TicketItem } from '../TicketItem'

import './TicketList.scss'

const TicketList = ({ tickets }) => {
  const fiveArr = tickets.slice(0, 5)
  console.log(fiveArr)
  return (
    <div className="ticket__list_container">
      <ul className="ticket__list">
        {fiveArr.map((item, idx) => (
          <li key={idx} className="ticket__item">
            <TicketItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TicketList
