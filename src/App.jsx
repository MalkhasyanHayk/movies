import './App.css'
import {Route, Routes} from "react-router-dom";
import {lazy} from "react";
import Navigation from "./_components/_core/navigation/navigation.jsx";

const Home = lazy(() => import("./_contains/_pages/home/home.jsx"))

function App() {

  return (
    <>
        <Navigation/>
        <main>
            <Routes>
                <Route
                    path="/"
                    element={<Home/>}
                    errorElement={<h1>Error #404</h1>}
                />
            </Routes>
        </main>
    </>
  )
}

export default App
