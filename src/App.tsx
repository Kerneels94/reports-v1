import './App.css'
import "./index.css"
import Header from "./components/Header"
import Body from "./components/Body"
import { ThemeProvider } from './context/themeContext';


function App() {
  return (
    <>
    <ThemeProvider>
      <Header />
      <Body />
    </ThemeProvider>
    </>
  );
}

export default App
