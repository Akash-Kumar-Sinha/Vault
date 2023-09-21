import React from "react";
import './App.css';
import Home from './component/Home/Home';
import SignIn from './component/SignIn/SignIn'
import Register from './component/Register/Register';
import Dashboard from "./component/Dashboard/Dashboard";
import CaseManager from "./component/CaseManagementSystem/CaseManager/CaseManager";
import CreateEvault from "./component/CreateEvault/CreateEvault";
import ViewDoc from "./component/ViewDoc/ViewDoc";
import PublicJudiciary from "./component/PublicJudiciary/PublicJudiciary";
import AdvocateSignin from "./component/AdvocateSignin/AdvocateSignin";
import JudgeSignin from "./component/JudgeSignin/JudgeSignin";
import CaseDoc from "./component/CaseManagementSystem/CaseDoc/CaseDoc";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      route: 'clientsignin',
      isSignIn: false,
      inputList: '',
      list: []
    }
  }

  onRouteChange = (route) => {
    if(route === 'signin') {
      this.setState({isSignIn : false})
    } else if(route === 'home') {
      this.setState({isSignIn: true})
    }

    this.setState({route: route})
  }
  render(){
    return (
      <div className="App">
        {/* <CaseManager/> */}
        {this.state.route === 'home'
        ?<Home onRouteChange={this.onRouteChange}/>
        :(this.state.route === 'clientsignin'
        ?<SignIn onRouteChange={this.onRouteChange} />
        :(this.state.route === 'register'
        ?<Register onRouteChange={this.onRouteChange}/>
        : (this.state.route === 'dashboard')
        ?<Dashboard onRouteChange={this.onRouteChange}/>
        : (this.state.route === 'casemanager'
        ?<CaseManager onRouteChange={this.onRouteChange}/>
        :(this.state.route === 'createevault'
        ?<CreateEvault onRouteChange={this.onRouteChange}/>
        :(this.state.route === 'viewdoc'
        ?<ViewDoc onRouteChange={this.onRouteChange}/>
        :(this.state.route === 'publicjudiciary')
        ?<PublicJudiciary onRouteChange={this.onRouteChange}/>
        :(this.state.route === 'advocatesignin'
        ?<AdvocateSignin onRouteChange={this.onRouteChange}/>
        :(this.state.route === 'judgesignin'
        ?<JudgeSignin onRouteChange={this.onRouteChange}/>
        :(this.state.route === 'casedoc'
        ?<CaseDoc onRouteChange={this.onRouteChange}/>
        :null
        )
        )
        )
        )
        )
        )
        )
        )
          
        }

      </div>
      
    );  
  }
}

export default App;