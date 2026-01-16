import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingWidgets from './components/FloatingWidgets'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Careers from './pages/Careers'
import ContactUs from './pages/ContactUs'
import ProgramDetail from './pages/programs/ProgramDetail'
import CategoryPrograms from './pages/CategoryPrograms'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import ReturnPolicy from './pages/ReturnPolicy'
import PlacementProvision from './pages/PlacementProvision'

// Scroll to top on route change
function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

function App() {
    return (
        <div className="app">
            <ScrollToTop />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/contactus" element={<ContactUs />} />

                    {/* Policy Pages */}
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                    <Route path="/return-policy" element={<ReturnPolicy />} />

                    {/* Placement Provision Programs */}
                    <Route path="/placement" element={<PlacementProvision />} />
                    <Route path="/job-guarantee/:programSlug" element={<ProgramDetail />} />

                    {/* Category Programs Page */}
                    <Route path="/category/:slug" element={<CategoryPrograms />} />

                    {/* Dynamic Program Pages - handles all program routes */}
                    <Route path="/programs/:programSlug" element={<ProgramDetail />} />
                </Routes>
            </main>
            <Footer />
            <FloatingWidgets />
        </div>
    )
}

export default App

