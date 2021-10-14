import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// theme
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from './services/theme/mainTheme';
// components
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import ProjectsGrid from './components/Projects/ProjectsGrid';
import ContactForm from './components/ContactForm/ContactForm';
import Notification from './services/SnackBar';
import About from './components/About/About';
import DisplayProject from './components/DisplayProject/DisplayProject';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
// custom cursor
import CustomCursor from './CustomCursor';
// makeStyles
import { makeStyles } from '@material-ui/core';
//space
import { spacer } from './services/spacer';
// context
import { useGlobalContext } from './context/context';
// loading cube
import Loading from './components/Loading/Loading';

const App = ()=>{

const {mediumScreen} = useGlobalContext();

const useStyles = makeStyles(theme=>({
  components: {
    paddingLeft: mediumScreen ? 0 :`${spacer.sideBarWidth}px`,
    width: '100%',
    transition: '850ms',
  },
  main:{

  }
}))
const classes = useStyles();
// loading
const [loading, setLoading] = React.useState(true);
React.useEffect(()=>{
  const timeOut = setTimeout(()=>{
    setLoading(false);
  },2000)
  return (()=>{
    clearTimeout(timeOut);
  })
},[loading])

if(loading){
    return <Loading/>
  }


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline/>
          <CustomCursor/>
          <main className={classes.main}>
            <Sidebar/>
            <div className={classes.components}>
              <Home/>
              <Notification/>
              <ContactForm/>
              <ProjectsGrid/>
              <DisplayProject/>
              <About/>
              <Skills/>
              <Gallery/>
              <Contact/>
              <Footer/>
            </div>
          </main>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
