import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

const Paginate = ({ dataPage, handlePageClick }) => {
    return (
        <ReactPaginate
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={dataPage}
            previousLabel="<<"
            nextLabel=">>"
            pageClassName="border rounded-full px-2 dark:bg-gray-300 md:px-2 hover:bg-gray-100 cursor-pointer"
            pageLinkClassName="m-0"
            previousClassName="border rounded-full dark:bg-gray-300 px-2 md:px-2 hover:bg-gray-100"
            previousLinkClassName=""
            nextLinkClassName="border rounded-full dark:bg-gray-300 px-2 md:px-2 flex hover:bg-gray-100"
            breakLabel="..."
            breakClassName="border-full px-2 md:px-2 hover:bg-gray-100"
            containerClassName="inline-flex justify-content-center p-2 bg-white dark:bg-gray-200 dark:text-white"
            activeClassName="bg-gray-100 dark:bg-gray-400 dark:text-white"
        />
    )
}

export default Paginate
