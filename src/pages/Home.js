import Footer from '../common/Footer';
import '../css/home.css';

const Home = () => {
    return (
        <>
            <div className='home-header'>
                <div className='home-header-current-page'>HOME</div>
                <div className='home-header-name'>SUNG U HYEON</div>
            </div>
            <div className='main-wrap'>
                <div className='main-content'>Web Developer</div>
            </div>
            <Footer />
        </>
    )
}

export default Home;