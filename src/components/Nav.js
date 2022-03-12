import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Container } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Nav () {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return <AppBar position="static">
    <Container>
      <Toolbar>
        {
        pathname !== '/' &&
          <IconButton sx={{ mr: 2 }} onClick={() => navigate('/')}>
            <ArrowBack />
          </IconButton>
        }
        <Typography variant="h6" component="div">
          { pathname === '/' ? 'Friends' : "Friend's Info"}
        </Typography>
      </Toolbar>
    </Container>
  </AppBar>
}
