// import React from 'react';
// import './App.css';
// import Home from './components/Home.js';
// import LoginAndRegistration from './components/Loginandregistraion'; 
// import Packages from './components/Package';
// import PackageDetails from './components/PackageDetails.js';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<LoginAndRegistration />} />
//         <Route path="/packages" element={<Packages />} />
//       </Routes>
//       <Routes>
//         <Route path="/package/:id" element={<PackageDetails />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import Home from './components/Home.js';
import LoginAndRegistration from './components/Loginandregistraion'; 
import Packages from './components/Package';
import PackageDetails from './components/PackageDetails.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginAndRegistration />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/package/:id" element={<PackageDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

