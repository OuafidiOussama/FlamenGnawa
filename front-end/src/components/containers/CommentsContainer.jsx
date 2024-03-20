import React from 'react'
import CommentCard from '../cards/CommentCard'


export default function CommentsContainer() {
  return (
    <div className='py-10 w-full text-center'>
        <p className='text-5xl pb-3 border-b-2 '>Comments</p>
        <div className='flex flex-col'>
            <CommentCard />
            <CommentCard />
            <CommentCard />
        </div>
    </div>
  )
}
