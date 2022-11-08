import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import DashboardPage from './views/DashboardPage';
import CreateAuthor from './views/CreateAuthor';
import UpdateAuthor from './views/UpdateAuthor';

function App() {
  return (
    <div className="container mt-5">
      <h1>Authors</h1>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/new" element={<CreateAuthor />} />
        <Route path="/edit/:id" element={<UpdateAuthor />} />
      </Routes>
      
    </div>
  );
}

export default App;
