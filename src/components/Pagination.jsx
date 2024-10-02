import React from 'react'

function Pagination({postsPerPage,totalPost,setCurrentPage,currentPage}) {
    let page =[]
    for (let index = 1; index <= Math.ceil(totalPost/postsPerPage); index++) {
        page.push(index)
        
    }
  return (
    <div>
        {
            page.map((page,index)=>(
                <button key={index} onClick={()=>setCurrentPage(page)}className={currentPage==page?bg-red-500:""}>
                    {page}
                </button>

            )).slice(0,50)
        }
    </div>
  )
}

export default Pagination