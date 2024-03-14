import React from 'react';
import Topic from './Topic/Topic';
import Intensity from './Intensity/Intensity';
import Likelihood from './Likelihood/Likelihood';
import Region from './Region/Region';
import Relevance from './Relevance/Relevance';
import Country from './Country/Country';
import Sidebar from './Sidebar/Sidebar';
import './App.css'; 

function Card({ title, children }) {
  return (
    <div className="card">
  
      <h2>{title}</h2>
  
      {children}

    </div>
  );
}

function App() {

  return (
    <div className="app">

       <Sidebar />
    
      <Card title="Topic">
        <Topic />
      </Card>
      <Card title="Intensity">
        <Intensity />
      </Card>
      <Card title="Likelihood">
        <Likelihood />
      </Card>
      <Card title="Region">
        <Region />
      </Card>
      <Card title="Relevance">
        <Relevance  />
      </Card>
      <Card title="Country">
        <Country />
      </Card> 
      
      </div>
      
    
  );
}

export default App;


// import React from 'react';
// import Sidebar from './Sidebar/Sidebar';
// import './App.css';

// function App() {
//   return (
//     <div className="app">
//       <Sidebar />
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import Navigation from './Navigation/Navigation';
// import './App.css';

// function App() {
//   return (
//     <div className="app">
//       <Navigation />
//     </div>
//   );
// }

// export default App;