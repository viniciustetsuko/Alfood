import { Button, Typography, Box, AppBar, Container, Toolbar, Link, Paper } from "@mui/material"
import { Link as RouterLink, Outlet } from "react-router-dom"

const PaginaBaseadmin = () => {
    return (
       <>

        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography variant="h6">
                        Administração
                    </Typography>
                    <Box sx={{display: "flex", flexGrow: 1}}>
                        <Link component={RouterLink} to="/admin/restaurantes">
                        <Button sx={{my: 2, color: "white"}}>
                            Restaurantes
                        </Button>
                        </Link>
                        <Link component={RouterLink} to="/admin/restaurantes/novo">
                        <Button sx={{my: 2, color: "white"}}>
                            Novo Restaurantes
                        </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

        <Box>
           <Container maxWidth="lg" sx={{mt: 1}}>
            <Paper sx={{ p: 2 }}>
                <Outlet />    
            </Paper>
            </Container> 
        </Box>

       </>
    )
}

export default PaginaBaseadmin