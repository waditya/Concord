clickSubmit = () => {
    const jwt = auth.isAuthenticated()
    const user = {
      name: this.state.name || undefined,
      email: this.state.email || undefined,
      password: this.state.password || undefined
    }
    update({
      userId: this.match.params.userId
    }, {
      t: jwt.token
    }, user).then((data) => {
      if (data.error) {
        this.setState({error: data.error})
      } else {
        this.setState({'userId': data._id, 'redirectToProfile': true})
      }
    })
}
