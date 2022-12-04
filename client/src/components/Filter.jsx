import React from 'react'
import Fuse from 'fuse.js'
import axios from 'axios';

const Filter = ({setNotes, notes, user}) => {

  const hamdleSearch = () => {
      const searchString = document.getElementById("search").value;

      if(searchString == "")
      {
        axios.get("blog", { userId: user.role.userId }).then((res) => {
          setNotes(res.data.data.blogs);
        });
      }

      const options = { keys: ['id', 'title', 'content'] }

      const fuse = new Fuse(notes, options)
      console.log(notes);
      const result = fuse.search(searchString).map((blog)=>{return blog.item})
      setNotes(result)
  }
  const handleCatogry = (e) => {
    const child1 = document.getElementById("all_cat").classList.remove("bg-blue-500")
    const child2 = document.getElementById("cse_cat").classList.remove("bg-blue-500")
    const child3 = document.getElementById("ece_cat").classList.remove("bg-blue-500")
    axios.get("blog", { userId: user.role.userId }).then((res) => {
      setNotes(res.data.data.blogs.filter((elem) => {
        if(e.target.innerHTML == "ALL"){
          return true
        }
        return elem.branch == e.target.innerHTML
      }))
    });
    e.target.classList.add("bg-blue-500")
  }

  return (
    <div className="flex justify-around">
        <div className="input-group relative flex items-stretch w-1/2 mb-4">
          <input type="search" className="form-control relative min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" id="search" />
          <button onClick={hamdleSearch} className="btn inline-block px-6 py-2.5 mx-1 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
          </button>
        </div>
        <div id='filter-group' className="btn-group">
          <button onClick={handleCatogry} id="all_cat" class="bg-blue-500  text-black font-bold py-2 px-4 rounded">ALL</button>
          <button onClick={handleCatogry} id="cse_cat" class="bg-white-500 text-black font-bold py-2 px-4 rounded">CSE</button>
          <button onClick={handleCatogry} id="ece_cat"class="bg-white-500 text-black font-bold py-2 px-4 rounded">ECE</button>
        </div>
    </div>
  )
}

export default Filter