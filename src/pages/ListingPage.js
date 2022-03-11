import React from 'react'
import { useNavigate } from 'react-router-dom'
import { List, ListItem, ListItemAvatar, ListItemText, Container, Avatar, Divider, ListItemButton } from '@mui/material'
import { getFullName } from '../domain/friend'
import { useFriendStore } from '../services/storeAdapter'

export default function ListingPage () {
  const { friends } = useFriendStore()
  const navigate = useNavigate()

  function handleClickItem(id) {
    navigate(`/detail/${id}`)
  }

  return (
    <>
      <Container>
        <List>
          {
          friends.map((fd) => (
            <React.Fragment key={fd.id}>
              <ListItem disablePadding>
                <ListItemButton alignItems="flex-start" onClick={() => handleClickItem(fd.id)}>
                  <ListItemAvatar>
                    <Avatar alt={getFullName(fd)} src={fd.picture} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={getFullName(fd)}
                    />
                </ListItemButton>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))
        }
        </List>
      </Container>
      </>
  )
}
