import { BrowserRouter as Router, Route, Link,Routes } from 'react-router-dom';
import {Home} from './component/Home';
import {PostAlumno} from './component/PostAlumno';
import {ListAlumnos} from './component/GetAlumnos';
/* import {EditarAlumno} from './component/EditarAlumno'; */
function App() {
  return (
    <Router>

      <nav className="navbar navbar-expand navbar-light bg-light">
          <ul className="nav navbar-nav">
              <li className="nav-item">
                  <Link className="nav-link active" to={"/agregarAlumno"} aria-current="page">Agregar Alumno <span className="visually-hidden">(current)</span></Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to={"/"}>Inicio</Link>
              </li>
          </ul>
      </nav>




      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/listaAlumnos/:division" element ={<ListAlumnos />}></Route>
        <Route path="/AgregarAlumno" element={<PostAlumno />}></Route>
    {/*     <Route path='/edtiarAlumno/:id' element={<EditarAlumno />}></Route> */}
      </Routes>
    </Router>);
}

export default App;
