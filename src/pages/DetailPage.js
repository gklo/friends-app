import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, List, ListItem, ListItemAvatar, ListItemText, Avatar, CircularProgress } from '@mui/material'

import { getFullName } from '../domain/friend'
import { useFriendStore } from '../services/storeAdapter'
import Map from '../components/Map'

export default function DetailPage () {
  const { id } = useParams()
  const { isReady, getFriendById } = useFriendStore()
  const [friend, setFriend] = useState()
  
  useEffect(() => isReady && setFriend(getFriendById(id)), [isReady, getFriendById, id]) 

  return (
    <Container>
      {
      friend ?
        <>
          <Map data-testid="friend-map" latitude={friend.location.latitude} longitude={friend.location.longitude} />
          <List>
            <ListItem data-testid="friend-item">
              <ListItemAvatar>
                <Avatar alt={getFullName(friend)} src={friend.picture}></Avatar>
              </ListItemAvatar>
              <ListItemText primary={getFullName(friend)}>
              </ListItemText>
            </ListItem>
          </List>
        </>
        :
        <CircularProgress />
    }
    </Container>
  )
}
