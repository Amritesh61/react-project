import React from 'react'

function Card({username,btnText="Visit Me"}) {
    
    
  return (
     <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
  <img className="w-full" src="\src\assets\card-top.jpg" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <h1 className="text-white text-base">{username}</h1>
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    
    <p className="text-white text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2 mb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
  <div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
      {btnText}
    </button>
  </div>
</div>
  )
}

export default Card