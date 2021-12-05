import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSearchId, getTickets } from './store/ticket'

import { Header } from './components/Header'
import { HeadFilter } from './components/HeadFilter'
import { SideFilter } from './components/SideFilter'
import { TicketList } from './components/TicketList'

import 'antd/dist/antd.css'
import './App.scss'

const App = () => {
  const dispatch = useDispatch()
  const { searchId, tickets, loading } = useSelector((state) => state.tickets)

  useEffect(() => {
    dispatch(getSearchId())
  }, [])

  useEffect(() => {
    if (searchId?.length > 1) dispatch(getTickets(searchId))
  }, [dispatch, searchId])

  console.log(tickets, loading)
  if (!loading && !tickets?.length) return null

  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <HeadFilter />
        <SideFilter />
        <TicketList tickets={tickets} />
      </div>
    </div>
  )
}

export default App
