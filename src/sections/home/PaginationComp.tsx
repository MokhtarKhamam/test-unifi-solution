import { Pagination } from '@mui/material'
import React from 'react'

interface PaginationCompProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const PaginationComp: React.FC<PaginationCompProps> = ({totalPages, currentPage, handlePageChange}) => {
  return (
    <div className='mt-8 w-fit mx-auto'>
 <Pagination
          count={totalPages}
          page={currentPage}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
        />
    </div>
  )
}

export default PaginationComp