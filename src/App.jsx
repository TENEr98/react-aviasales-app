import React, { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { message, Spin } from 'antd'

import { getSearchId, getTickets } from './store/ticket'

import { Header } from './components/Header'
import { HeadSort } from './components/HeadSort'
import { SideFilter } from './components/SideFilter'
import { TicketList } from './components/TicketList'

import 'antd/dist/antd.css'
import './App.scss'

const App = () => {
  const [filters, setFilters] = useState([])
  const [sort, setSort] = useState('')
  const [ticketList, setTicketList] = useState([])
  const [counter, setCounter] = useState(1)

  const dispatch = useDispatch()
  const { searchId, tickets, loading } = useSelector((state) => state.tickets)

  useEffect(() => {
    dispatch(getSearchId())
  }, [])

  useEffect(() => {
    if (searchId?.length > 1) dispatch(getTickets(searchId))
  }, [dispatch, searchId])

  useEffect(() => {
    if (tickets.length === 0) return
    const tempTickets = JSON.parse(JSON.stringify(tickets))
    let sorted = []
    if (sort === 'fast') {
      sorted = tempTickets.sort(
        (a, b) => a.segments[0].duration - b.segments[0].duration
      )
    }
    if (sort === 'cheap') {
      sorted = tempTickets.sort((a, b) => a.price - b.price)
    }

    const filtered = {
      'all0123': sorted,
      '0': sorted.filter((item) =>
        item.segments.every((el) => el.stops.length === 0)
      ),
      '01': sorted.filter((item) =>
        item.segments.every((el) => el.stops.length <= 1)
      ),
      '02': sorted.filter((item) =>
        item.segments.every(
          (el) => el.stops.length === 0 || el.stops.length === 2
        )
      ),
      '03': sorted.filter((item) =>
        item.segments.every(
          (el) => el.stops.length === 0 || el.stops.length === 3
        )
      ),
      '012': sorted.filter((item) =>
        item.segments.every((el) => el.stops.length <= 2)
      ),
      '0123': sorted.filter((item) =>
        item.segments.every((el) => el.stops.length <= 3)
      ),
      '013': sorted.filter((item) =>
        item.segments.every(
          (el) => el.stops.length <= 1 || el.stops.length === 3
        )
      ),
      '023': sorted.filter((item) =>
        item.segments.every(
          (el) => el.stops.length === 0 || el.stops.length <= 2
        )
      ),
      '123': sorted.filter((item) =>
        item.segments.every(
          (el) => el.stops.length <= 3 && el.stops.length >= 1
        )
      ),
      '1': sorted.filter((item) =>
        item.segments.every((el) => el.stops.length === 1)
      ),
      '12': sorted.filter((item) =>
        item.segments.every(
          (el) => el.stops.length === 1 || el.stops.length === 2
        )
      ),
      '13': sorted.filter((item) =>
        item.segments.every(
          (el) => el.stops.length === 1 || el.stops.length === 3
        )
      ),
      '2': sorted.filter((item) =>
        item.segments.every((el) => el.stops.length === 2)
      ),
      '23': sorted.filter((item) =>
        item.segments.every(
          (el) => el.stops.length === 2 || el.stops.length === 3
        )
      ),
      '3': sorted.filter((item) =>
        item.segments.every((el) => el.stops.length === 3)
      )
    }[filters.join('')]

    if (filtered) {
      setTicketList(filtered.slice(0, counter * 5))
    } else if (sorted) {
      setTicketList(sorted.slice(0, counter * 5))
    }
  }, [sort, filters, counter])

  const filterTickets = (filterTypes) => setFilters(filterTypes)

  const sortTickets = (sortType) => setSort(sortType)

  const getMoreTickets = () => setCounter((number) => ++number)

  console.log({ ticketList })
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <HeadSort sortTickets={sortTickets} />
        <SideFilter filterTickets={filterTickets} />
        {loading ? (
          <div className="spinner">
            <Spin />
          </div>
        ) : (
          <TicketList
            ticketList={ticketList}
            getMoreTickets={getMoreTickets}
            counter={counter}
          />
        )}
        {/* {tickets === 'ERROR' && <message} */}
      </div>
    </div>
  )
}

export default App
