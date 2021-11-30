import React from 'react'

import './TicketItem.scss'

const TicketItem = ({ item }) => {
  const timeConvert = (n) => {
    var num = n
    var hours = num / 60
    var rhours = Math.floor(hours)
    var minutes = (hours - rhours) * 60
    var rminutes = Math.round(minutes)
    return rhours + 'ч ' + rminutes + 'м'
  }

  return (
    <div className="ticket__container">
      <div className="ticket__price_logo">
        <p className="ticket__price">{item.price} Р</p>
        <img
          src={`https://pics.avs.io/99/36/${item.carrier}.png`}
          alt={item.carrier}
          className="ticket__logo"
        />
      </div>
      {item.segments.map((el, idx) => (
        <div className="ticket__details" key={`${el.origin}_${idx}`}>
          <div className="ticket__location_time">
            <span className="text-grey">
              {el.origin} - {el.destination}
            </span>
            <span>
              {new Date(el.date).getHours()}:{new Date(el.date).getMinutes()} -{' '}
              {new Date(
                new Date(el.date).getTime() + el.duration * 60 * 1000
              ).getHours()}
              :
              {new Date(
                new Date(el.date).getTime() + el.duration * 60 * 1000
              ).getMinutes()}
            </span>
          </div>
          <div className="ticket__location_time">
            <span className="text-grey">В пути</span>
            <span>{timeConvert(el.duration)}</span>
          </div>
          <div className="ticket__stops">
            <span className="text-grey">{el.stops.length} пересадки</span>
            <span>{el.stops.join(', ')}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TicketItem
