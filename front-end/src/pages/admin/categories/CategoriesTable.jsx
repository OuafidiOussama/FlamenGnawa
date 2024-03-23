import { Icon } from '@iconify/react'
import React from 'react'
import CategoryCard from '../../../components/admin/cards/CategoryCard'

export default function CategoriesTable() {
  return (
    <div className="px-10 py-5 h-screen overflow-hidden">
      <div className="bg-border/20 h-full rounded-xl flex flex-col p-3 gap-5">
        <div className="border-b-4 py-1 border-border h-14 flex justify-between">
          <p className="font-bold text-4xl capitalize">categories</p>
          <button className="flex items-center gap-2 bg-purple text-white py-2 px-5 rounded">
            <Icon icon="basil:add-solid" className="text-2xl" /> Add Category
          </button>
        </div>

        <div className="w-full h-full bg-black/10 rounded-xl overflow-y-auto">
          <table className="w-full table-fixed text-center">
            <thead className="border-white border-b-2 h-10">
              <tr>
                <th className="w-20">Picture</th>
                <th className="w-40 text-center">Name</th>
                <th className="w-96 overflow-hidden">Description</th>
                <th className="w-20">Actions</th>
              </tr>
            </thead>
            <tbody>
              <CategoryCard />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
