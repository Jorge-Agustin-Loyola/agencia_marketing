import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import Cases from "containers/pages/Cases";
import Services from "containers/pages/Services";
// import Careers from "containers/pages/Careers";
// import Podcast from "containers/pages/Podcast";
import Blog from "containers/pages/Blog";
import About_Us from "containers/pages/About_Us";
import Contact from "containers/pages/Contact";
import store from "./store";
import { Provider } from "react-redux";


function App() {
  return (
    
      <Provider store={store}>
        <Router>
          <Routes>
            {/* Error display */}
            <Route path='*' element={<Error404 />} />
            {/* Home display */}
            <Route path='/' element={<Home />} />
            {/* Cases display */}
            <Route path='/Cases' element={<Cases />} />
            {/* Services display */}
            <Route path='/Services' element={<Services />} />

            {/* Career display */}
            {/* <Route path='/Careers' element={<Careers/>}/> */}
            {/* Podcast display */}
            {/* <Route path='/Podcast' element={<Podcast/>}/> */}
            {/* Blog display */}

            <Route path='/Blog' element={<Blog />} />
            {/* About_Us display */}
            <Route path='/About_Us' element={<About_Us />} />
            {/* Contact display */}
            <Route path='/Contact' element={<Contact />} />

          </Routes>
        </Router>
      </Provider>
    




  );
}

export default App;
