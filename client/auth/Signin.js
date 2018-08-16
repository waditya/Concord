class Signin extends Component {
  state = { email: '', password: '', error: '', redirectToReferrer: false } 
  clickSubmit = () => {
    const user = {
      email: this.state.email || undefined,
      password: this.state.password || undefined
    }
    signin(user).then((data) => {
      if (data.error) {
        this.setState({error: data.error})
      } else {
auth.authenticate(data, () => {
          this.setState({redirectToReferrer: true})
        })
      }
    })
}

render() {
    const {classes} = this.props
 const {from} = this.props.location.state || {
      from: {pathname: '/' }
    } 
    const {redirectToReferrer} = this.state
    if (redirectToReferrer)
      return (<Redirect to={from}/>)
    return (...)
  }
}
