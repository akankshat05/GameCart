
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Nav() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          sx={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}
        >
          GameCart
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
