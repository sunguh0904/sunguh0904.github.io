import Footer from '../common/Footer';
import Header from '../common/Header';
import SNB from '../common/SNB';
import '../css/main.css';

const Main = () => {
    return (
        <>
            <div className='main-wrap'>
                <Header />
                <SNB />
                <p>Web Developer</p>
                <Footer />
            </div>
        </>
    )
}

export default Main;