import { Box } from '@chakra-ui/react'
import IntroSection from '../components/home/intro'
import Advantages from '../components/home/advantages'
import Reviews from '../components/home/reviews';
import Subscriptions from '../components/home/subscription';
import AboutSchool from '../components/home/aboutSchool';
import Examples from '../components/home/examples';
import FreeLesson from '../components/home/freeLesson';
import Footer from '../components/footer';


export default function HomePage() {
    return (
        <Box>
            <IntroSection />
            <Advantages />
            <Reviews />
            <Subscriptions />
            <AboutSchool />
            <Examples />
            <FreeLesson />
            <Footer />
        </Box>
    );
}