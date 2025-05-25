import { PageProps } from '@/types';
import Frontend from '@/Layouts/Frontend'; 
import Banner from '@/Components/Frontend/Home/Banner';
import About from '@/Components/Frontend/Home/About';
import Services from '@/Components/Frontend/Home/Services';
import Benefits from '@/Components/Frontend/Home/Benefits';
import PanelServices from '@/Components/Frontend/Home/PanelServices';
import WhyUs from '@/Components/Frontend/Home/WhyUs';
import Statistics from '@/Components/Frontend/Home/Statistics';
import Seo from '@/Components/Frontend/Home/Seo';
import Features from '@/Components/Frontend/Home/Features';
import Faq from '@/Components/Frontend/Home/Faq';
import Cheapest from '@/Components/Frontend/Home/Cheapest';
import Tags from './../../Components/Frontend/General/Tags';
import './Home.scss';
import Blog from '@/Components/Frontend/Home/Blog';

export default function Home({ posts }: PageProps & { posts: Array<any> }) { 
    return (
        <Frontend className='home'>
            <Tags title="Home" />
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Benefits></Benefits>
            <PanelServices></PanelServices>
            <WhyUs></WhyUs>
            <Statistics></Statistics>
            <Seo></Seo>
            <Features></Features>
            <Faq></Faq>
            <Cheapest></Cheapest>
            <Blog posts={posts}></Blog>
        </Frontend>
    );
} 