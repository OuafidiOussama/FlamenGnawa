import React from 'react'
import { Icon } from '@iconify/react'
import logo from "../../../assets/Final.png";

export default function ProductCard() {
  return (
    <tr className="h-20 border-white border-b-2">
      <td className="flex justify-center items-center h-20 w-28">
        <img
          src={logo}
          alt=""
          className="w-16 h-16 object-cover rounded-full"
        />
      </td>
      <td className="w-40">Bass guitar</td>
      <td className="truncate w-80">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem in
        quidem nesciunt atque ipsum quisquam architecto debitis repudiandae
        doloremque enim. Repellat libero cupiditate natus aut fuga doloremque,
        dicta est quisquam? lor
      </td>
      <td className="w-40">Unknown</td>
      <td className="w-40">400</td>
      <td className="w-40">350dhs</td>
      <td className="w-40">Guitars</td>
      <td className="w-48">
        <div className="flex justify-between px-2 text-white">
          <button className="flex bg-in-stock py-2 px-2 rounded items-center gap-2">
            <Icon icon="lucide:edit" className="text-2xl" />
          </button>
          <button className="flex bg-out-of-stock py-2 px-2 rounded items-center gap-2">
            <Icon icon="ic:baseline-delete" className="text-2xl" />
          </button>
        </div>
      </td>
    </tr>
  )
}
