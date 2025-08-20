import React from 'react'

function Card({username, heading="Default"}) {
    console.log(username);
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3fcb4d3f-7fd9-4191-b317-73df6acabaa2/dfjgxin-1b0ccf2b-38eb-4db6-8cdd-f9f746baa875.png/v1/fill/w_1280,h_854,q_80,strp/the_crimson_forest__part_one_by_anightmareinoz_dfjgxin-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU0IiwicGF0aCI6IlwvZlwvM2ZjYjRkM2YtN2ZkOS00MTkxLWIzMTctNzNkZjZhY2FiYWEyXC9kZmpneGluLTFiMGNjZjJiLTM4ZWItNGRiNi04Y2RkLWY5Zjc0NmJhYTg3NS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.6TlyJJuHkA_lFHc8LlcGHbtoJrdNeJ1ltWyvb-K_EsA"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{heading || "Default Heading"}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
  )
}

export default Card
