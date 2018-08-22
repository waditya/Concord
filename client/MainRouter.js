/*Import Libraries*/
import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
class MainRouter extends Component {
  render() {
    return (<div>
      <Switch>
        <Route exact path="/" component={Home}/>
		<Route path="/users" component={Users}/>
		<Link to="/users">Users</Link>
		<Route path="/signup" component={Signup}/>
		<Route path="/signin" component={Signin}/>
		<Route path="/user/:userId" component={Profile}/>
      </Switch>
    </div>)
  }
}
export default MainRouter
