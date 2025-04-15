import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid2, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"

export const SideBar = ({ drawerWith}) => {

    const { displayName = 'Name Not Found' } = useSelector( state => state.auth );

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWith }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="permanent"
                open
                sx={{ 
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWith } 
                }} 
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component='div'>
                        { displayName }
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril'].map( text => (
                            <ListItem key={ text } disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>

                                    <Grid2 container>
                                        <ListItemText primary={ text } />
                                        <ListItemText secondary='loremadmwajdad jdawdjawdj ojadiowa jjdjaw ajdwaida' />
                                    </Grid2>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}
