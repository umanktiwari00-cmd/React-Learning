
import React from 'react'

function Card({username,btnText=" Me"}) {
  console.log(username);
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="w-80 bg-white rounded-xl shadow-lg overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800"
          alt="Technology"
          className="w-full h-48 object-cover"
        />

        <div className="p-5">

          <h2 className="text-2xl font-bold text-gray-800">
            Web Development {username || "Visit Me"}
          </h2>

          <p className="mt-2 text-gray-600">
           Learn More {username}
          </p>

          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
            {btnText}
          </button>

        </div>

      </div>

    </div>
  )
}

export default Card