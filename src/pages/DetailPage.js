import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailPage() {
  const { id } = useParams()
  
  return <>Detail {id}</>
}
