import { useState } from 'react';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider} from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Topbar from "./scenes/global/Topbar";
import Sidebar from './scenes/global/Sidebar';
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar"; 
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";

function App() {
  const [theme, colorMode] = useMode();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
          <main className="content">
            <Topbar toggleDrawer={toggleDrawer} />
            <Routes>
              <Route path='/' element={<Dashboard />}></Route>
              <Route path='/team' element={<Team />}></Route>
              <Route path='/contacts' element={<Contacts />}></Route>
              <Route path='/invoices' element={<Invoices />}></Route>
              <Route path='/form' element={<Form />}></Route>
              <Route path='/calendar' element={<Calendar />}></Route>
              <Route path='/faq' element={<FAQ />}></Route>
              <Route path='/bar' element={<Bar />}></Route>
              <Route path='/pie' element={<Pie />}></Route>
              <Route path='/line' element={<Line />}></Route>
              <Route path='/geography' element={<Geography />}></Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;