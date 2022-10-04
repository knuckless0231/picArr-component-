
import s from './App.module.css';
import Header from './Components/header/Header';
import Main from './Components/main/Main.jsx';
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from 'react-router-dom';
import Picarr from "./Components/picArr/Picarr";

// Роутинг використовується задля використання можливостей SPA
// state репозиторій звідки я витягував файли через props

function App(props) {

  return <div className={s.space}>
    <Header state={props.state} />
    <Footer />
    <div className={s.main}>
      <Routes>
      <Route path="/" element={<Main state={props.state} />} />
        <Route path="/Main" element={<Main state={props.state} />} />
        <Route path="/Picarr" element={ <Picarr state={props.state} /> } />
        {/* Picarr це додаткове завдання з массиву фоток у вигляді каруселі */}
      </Routes>
    </div>
  </div>

}

export default App;
