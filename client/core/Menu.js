const Menu = withRouter(({history}) => (<div>
  <AppBar position="static">
    <Toolbar>
      <Typography type="title" color="inherit">
        MERN Skeleton
      </Typography>
      <Link to="/">
        <IconButton aria-label="Home" style={isActive(history, "/")}>
          <HomeIcon/>
        </IconButton>
      </Link>
      <Link to="/users">
        <Button style={isActive(history, "/users")}>Users</Button>
      </Link>
    </Toolbar>
  </AppBar>
</div>))

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#ff4081'}
  else
    return {color: '#ffffff'}
}

style={isActive(history, "/users")}

{!auth.isAuthenticated() && (<span>
    <Link to="/signup">
       <Button style={isActive(history, "/signup")}> Sign Up </Button>
    </Link>
    <Link to="/signin">
       <Button style={isActive(history, "/signin")}> Sign In </Button>
    </Link>
</span>)}
