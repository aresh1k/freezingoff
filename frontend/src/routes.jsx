import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home'
import FAQPage from './pages/faq'
import ShortsPage from './pages/shorts'
import ArticlesPage from './pages/articles'
import FreeLessonPage from './pages/lesson'
import NotFoundPage from './pages/notFound'


export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/faq' element={<FAQPage />} />
            <Route path='/shorts' element={<ShortsPage />} />
            <Route path='/articles' element={<ArticlesPage />} />
            <Route path='/freelesson' element={<FreeLessonPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
  }
  