import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material'

import { getFullName } from '../domain/friend'
import { useFriendStore } from '../services/storeAdapter'
import Map from '../components/Map'

export default function DetailPage () {
  const { id } = useParams()
  const { status, getFriendById } = useFriendStore()
  const [friend, setFriend] = useState()

  useEffect(() => (status === 'fulfilled') && setFriend(getFriendById(id)), [status, getFriendById, id])

  return (
    <>
      {
      friend &&
        <Container>
          <Map latitude={friend.location.latitude} longitude={friend.location.longitude} />
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt={getFullName(friend)} src={friend.picture}></Avatar>
              </ListItemAvatar>
              <ListItemText primary={getFullName(friend)}>
              </ListItemText>
            </ListItem>
          </List>
        </Container>
      }
    </>
  )
}
