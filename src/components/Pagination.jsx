import React from 'react'

function Pagination({postsPerPage,totalPost,setCurrentPage,currentPage}) {
    let page =[]
    for (let index = 1; index <= Math.ceil(totalPost/postsPerPage); index++) {
        page.push(index)
        
    }
  return (
    <div className='w-screen bg-slate-100 flex my-5 justify-center'>
        {
            page.map((page,index)=>(
                <div className='bg-orange-200 mx-3 px-1'key={index}>
                <button className='text-lg' key={index} onClick={()=>setCurrentPage(page)}>
                    {page}
                </button>
                </div>

            )).slice(0,20)
        }
    </div>
  )
}

export default Pagination