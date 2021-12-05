import React from 'react'
import { Button } from 'antd'

import { TicketItem } from '../TicketItem'

import './TicketList.scss'

const TicketList = ({ ticketList, getMoreTickets, counter }) => {
  return (
    <div className="ticket__list_container">
      <ul className="ticket__list">
        {ticketList.map((item, idx) => (
          <li key={idx} className="ticket__item">
            <TicketItem item={item} />
          </li>
        ))}
      </ul>
      {ticketList.length > 0 && counter * 5 === ticketList.length && (
        <Button type="primary" onClick={getMoreTickets}>
          Показать ещё 5 билетов!
        </Button>
      )}
    </div>
  )
}

export default TicketList
