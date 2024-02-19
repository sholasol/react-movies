import React from 'react'
import HomeIcon from '../icons/home-icon'
import MovieIcon from '../icons/movie-icon'
import TvSeriesIcon from '../icons/series-icon'
import BookmarkIcon from '../icons/bookmark-icon'
import { useLocation } from 'react-router-dom'
import { Box } from '@mui/material'

const navLinks = [
    {
        name: "Home",
        icon: HomeIcon,
        link: "/",
    },
    {
        name: "Movies",
        icon: MovieIcon,
        link: "/movies",
    },
    {
        name: "Tv Series",
        icon: TvSeriesIcon,
        link: "/tv-series",
    },
    {
        name: "Bookmarks",
        icon: BookmarkIcon,
        link: "/bookmarks",
    }
]

const Sidebar = () => {
    const {pathname} = useLocation();
  return (
    <Box sx = {{
        backgroundColor: "#161d2f",
        padding: 2,
        borderRadius: 2,
        display: "flex",
        flexDirection: {
            xs: "row",
            lg: "column"
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: {
            sm: "100%",
            lg: 200
        },
    }}>
        
    </Box>
  )
}

export default Sidebar