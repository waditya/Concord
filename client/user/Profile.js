class Profile extends Component {
  constructor({match}) {
    super()
    this.state = { user: '', redirectToSignin: false }
    this.match = match 
  } 
  
  init = (userId) => {
    const jwt = auth.isAuthenticated()
    read({
      userId: userId
    }, {t: jwt.token}).then((data) => {
      if (data.error)
        this.setState({redirectToSignin: true})
      else
        this.setState({user: data})
    })
}
