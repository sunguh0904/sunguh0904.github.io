import Footer from '../common/Footer';
import Header from '../common/Header';
import SNB from '../common/SNB';
import '../css/main.css';

const Main = () => {

    
    return (
        <>
            <div className='main-wrap'>
                <Header />
                {/* <SNB /> */}
                <div className='main-content'>Web Developer</div>
                <Footer />
            </div>
        </>
    )
}

export default Main;