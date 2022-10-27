import './App.css';
// Layout페이지서에 쓸 CSS파일 import
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 공용으로 사용할 데이터컨텍스트 Provider 추가
import { DataProvider } from './context/DataContext';

// 라이브러리 컴포넌트 import
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          {/* 레이아웃에 컴포넌트를 적용시켰으니 레이아웃을 불러준다 */}
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home/>}> </Route>
          </Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
