import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";


import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import SiteBar from "./components/SiteBar/SiteBar";
import {changeMessage} from "./redux/state";



const App = (props_data) => {
    return(
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*" element={ <Dialogs
                            messagesPage={props_data.data.messagesPage}
                            changeMessage={props_data.changeMessage}
                            addMessage={props_data.addMessage}
                        />}/>
                        <Route path='/profile' element={<Profile
                            profilePage={props_data.data.profilePage}
                            dispatch={props_data.dispatch}
                            />} />
                        <Route element={<News/>} path='/news'/>
                        <Route element={<Music/>} path='/music'/>
                        <Route element={<Settings/>} path='/settings'/>
                        <Route element={<SiteBar/>} path='/sitebar'/>
                    </Routes>
                </div>
            </div>
    );
}


export default App;

