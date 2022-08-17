import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import VideoForm from './views/VideoForm';
import VideoList from './views/VideoList';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<VideoList />}></Route>
        <Route path="/new-video" element={<VideoForm />}></Route>
        <Route path="/video/:id" element={<VideoForm />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
