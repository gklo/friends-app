import React from 'react'
import { Link } from 'react-router-dom'
import { getFullName } from '../domain/friend'
import { useFriendStore } from '../services/storeAdapter'

export default function ListingPage () {
  const { friends } = useFriendStore()

  return (
    <>
      {
      friends.map((fd) => (
        <Link key={fd.id} to={`/detail/${fd.id}`}>{getFullName(fd)}</Link>
      ))
      }
    </>
  )
}
