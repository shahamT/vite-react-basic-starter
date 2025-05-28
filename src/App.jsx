//style
import './assets/style/main.scss'

//react / hooks
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

//pages
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'

//main cmps
import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'


export default function App() {

    return (
        <Router>

            <section className="app column-layout hmf-vertical-layout">

                <AppHeader />

                <main className='main-content full-width subgrid'>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </main>

                <AppFooter />

            </section>

        </Router>
    )
}


