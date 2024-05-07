import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'


const DateFilter = () => {
    const [value, setValue] = useState<Dayjs | null>(null)
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    {/* <DemoContainer components={['DatePicker', 'DatePicker']}> */}
      <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} />
      <DatePicker
        label="Controlled picker"
        value={value}
        onChange={(newValue: Dayjs | null) => setValue(newValue)}
      />
    {/* </DemoContainer> */}
  </LocalizationProvider>
  )
}

export default DateFilter