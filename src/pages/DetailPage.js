import React from 'react'
import { useParams } from 'react-router-dom'
import { useFriendStore } from '../services/storeAdapter'

export default function DetailPage () {
  const { id } = useParams()
  const { getFriendById } = useFriendStore()
  const friend = getFriendById(id)

  return (
    <>
      {JSON.stringify(friend, null, 2)}
    </>
  )
}
