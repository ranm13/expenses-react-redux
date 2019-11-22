import React, { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { loadTransactions } from './../../actions/transactionsActions';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

const MonthSelector = function(){
    const userId = useSelector(state => state.auth.user.id)
    const dispatch = useDispatch()
    let now = new Date()
    const [month, setMonth] = useState(now.getMonth())
    const [year, setYear] = useState(now.getFullYear())

    const months = [
        {index: 0, month: "January"},
        {index: 1, month: "February"},
        {index: 2, month: "March"},
        {index: 3, month: "April"},
        {index: 4, month: "May"},
        {index: 5, month: "June"},
        {index: 6, month: "July"},
        {index: 7, month: "August"},
        {index: 8, month: "September"},
        {index: 9, month: "October"},
        {index: 10, month: "November"},
        {index: 11, month: "December"}
        ]

    let years = [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]
    
    const submit = e => {
        e.preventDefault()
        dispatch(loadTransactions(userId, month, year))
    }
  
    return (
      <form onSubmit={submit}>
        <Select
          value={month}
          onChange={e => setMonth(e.target.value)}
        >
        {months.map(m => <MenuItem key={m.index} value={m.index}>{m.month}</MenuItem>)}
        </Select>
        <Select
          value={year}
          onChange={e => setYear(e.target.value)}
          inputProps={{
            name: 'year',
            id: 'year-changer'
          }}
        >
        {years.map(year => <MenuItem key={year} value={year}>{year}</MenuItem>)}
        </Select>
        <Button type='submit'>Submit</Button>
      </form>)
}
export default MonthSelector