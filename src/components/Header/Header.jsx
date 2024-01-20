import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

const Header = () => {
  const renderLogo = () => ((
    <Typography
      variant="h5"
      noWrap
      component="a"
      sx={{
        mr: 2,
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      Cal.
    </Typography>
  ));

  const renderAvatar = () => ((
    <IconButton sx={{ p: 0 }}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
    </IconButton>
  ));

  return (
    <AppBar position="static">
      <Container maxWidth="1">
        <Toolbar disableGutters>
          {renderLogo()}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>

          <Box sx={{ flexGrow: 0 }}>
            {renderAvatar()}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { Header };
