import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { List, ListItem, ListItemAvatar, ListItemText, Container, Avatar, Divider, ListItemButton, Pagination, CircularProgress } from '@mui/material'
import { getFullName } from '../domain/friend'
import { useFriendStore } from '../services/storeAdapter'

export default function ListingPage () {
  const { isReady, getFriendsPageCount, getFriendsByPage } = useFriendStore()
  const navigate = useNavigate()
  const [pageNum, setPageNum] = useState(1)
  const pageSize = 10

  const handlePageChange = useCallback((_ , num) => setPageNum(num), [setPageNum] )

  return (
    <>
      <Container>
        <List>
          {
          isReady ? 
            <>
              {
                getFriendsByPage(pageSize, pageNum).map((fd) => (
                  <React.Fragment key={fd.id}>
                    <ListItem data-testid="friend-item" disablePadding>
                      <ListItemButton alignItems="flex-start" onClick={() => navigate(`/detail/${fd.id}`)}>
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
              <Pagination sx={{ mt: 2 }} count={getFriendsPageCount(pageSize)} onChange={handlePageChange} />
            </>
            : <CircularProgress />
        }
        </List>
      </Container>
    </>
  )
}
