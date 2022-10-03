import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Profile from './Components/Profile'
import Search from "./Components/Search"
import Trending from "./Components/Trending"
import Create from "./Components/Create"
import profile from "./Assets/Profile-Icon.svg"
import search from "./Assets/search.svg"
import trending from "./Assets/trending.svg"
import addCircle from "./Assets/create_icon.svg"
import { List,Home,SearchIcon,SearchingLink,Trend,CreateIcon,TrendingLink,CreateLink,MainContainer  } 
              from "./Components/NavBar.Styled"


function App() {
  return (
     <Router>
      <MainContainer>
         <Navigate />
         
         <Routes>
        <Route path="/" element={<Profile />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/trending" element={<Trending />}/>
        <Route path="/create" element={<Create />} />
      </Routes>

      </MainContainer>
        
     </Router>
  );
}

function Navigate(){
  return(
    <div>
      <List>
        <div>
          <Home src={ profile } alt="Profile" />
        </div>
        <div>
          <SearchIcon src={ search } alt="Search" />
          <SearchingLink to="/search">search</SearchingLink>
        </div>
        <div>
          <Trend  src={ trending } alt="Trending" />
          <TrendingLink to="/trending">trending</TrendingLink>
        </div>
        <div>
          <CreateIcon src={ addCircle} alt="" />
          <CreateLink to="/create">create</CreateLink>
        </div>
      </List>
     
      
   </div>
  );
}

export default App;