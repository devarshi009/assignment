import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'text-encoding-utf-8';


const DataGrid = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
        params: {
          _page: currentPage,
          _limit: pageSize,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
console.log(data)
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
    <p className="text-4xl text-center">Content</p>
    <div className='mx-10 grid grid-cols-3'>
       
     {data.map((items,index)=>(
     <div  className="border-2 border-teal ">
     
      <p className="">{items.title}</p>
      <p className="">{items.body}</p>
   
     </div>
    
     ))}
 </div>
 <div className="flex justify-center items-center mt-[20px] gap-10">
      <button className='px-10  py-2 bg-sky-500 rounded-[10px] ' onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous
      </button>
      <button className='px-10  py-2 bg-sky-500 rounded-[10px] ' onClick={handleNextPage}>Next</button>
      </div> 
    </>
  );
};

export default DataGrid;
