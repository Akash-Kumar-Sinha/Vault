import React, {useState} from "react";
import './App.css';
import Home from './component/Home/Home';
import SignIn from './component/SignIn/SignIn'
import Register from './component/Register/Register';
import Dashboard from "./component/Dashboard/Dashboard";
import CaseManager from "./component/CaseManagementSystem/CaseManager/CaseManager";
import CreateEvault from "./component/CreateEvault/CreateEvault";
import ViewDoc from "./component/ViewDoc/ViewDoc";
import PublicJudiciary from "./component/PublicJudiciary/PublicJudiciary";
import CaseDoc from "./component/CaseManagementSystem/CaseDoc/CaseDoc";

const App = () => {

  const [route, setRoute] = useState('clientsignin');
  // const [isSignIn, setIsSignin] = useState(false);

  const onRouteChange = (route) => {
    // if(route === 'signin') {
    //   setIsSignin(false)
    // } else if(route === 'home') {
    //   setIsSignin(true)
    // }

    setRoute(route)
  }
    return (
      <div className="App">
        {route === 'home'
        ?<Home onRouteChange={onRouteChange}/>
        :(route === 'clientsignin'
        ?<SignIn onRouteChange={onRouteChange} />
        :(route === 'register'
        ?<Register onRouteChange={onRouteChange}/>
        : (route === 'dashboard')
        ?<Dashboard onRouteChange={onRouteChange}/>
        : (route === 'casemanager'
        ?<CaseManager onRouteChange={onRouteChange}/>
        :(route === 'createevault'
        ?<CreateEvault onRouteChange={onRouteChange}/>
        :(route === 'viewdoc'
        ?<ViewDoc onRouteChange={onRouteChange}/>
        :(route === 'publicjudiciary')
        ?<PublicJudiciary onRouteChange={onRouteChange}/>
        :(route === 'casedoc'
        ?<CaseDoc onRouteChange={onRouteChange}/>
        :null
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

export default App;