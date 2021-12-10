import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../Components/Login'
import Add from '../Components/Add'
import LeaderBoard from '../Components/LeaderBoard'
import Home from '../Components/Home'
import QuestionDetails from '../Components/QuestionDetails'
import NotFound from '../Components/NotFound'
import NewUser from '../Components/NewUser'
import Navbar from '../Components/Navbar'

import ProtectedRouter from './ProtectedRoute'


const AppRouter = props => {

    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                {/* Private */}
                <Route path="/" element={<ProtectedRouter children={<Home />} />} />
                <Route path="/Add" element={<ProtectedRouter children={<Add />} />} />
                <Route path="/LeaderBoard" element={<ProtectedRouter children={<LeaderBoard />} />} />
                <Route path="/question/:id" element={<ProtectedRouter children={<QuestionDetails />} />} />


                {/* Public  */}
                <Route path="*" element={<NotFound />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/NewUser" element={<NewUser />} />
            </Routes>
        </BrowserRouter>)

}

export default AppRouter