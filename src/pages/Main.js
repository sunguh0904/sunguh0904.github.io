import '../css/main.css';
import Prologue from './Prologue';

const Main = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const mainContent = document.querySelector('.main-content');
        
        // 페이지가 로드된 후 1초 후에 페이드 아웃 시작
        setTimeout(() => {
            mainContent.classList.remove('fade-in');
            mainContent.classList.add('fade-out');
        }, 1000); // 1초 후 페이드 아웃 시작
    
        // 추가적인 로직을 통해 페이드 인/아웃 제어 가능
    });

    return (
        <>
            <div className='main-wrap fade-in'>
                <div className='main-content'>Web Developer</div>
            </div>
            
            <div className='prologue-wrap'>
                <Prologue/>
            </div>
        </>
    )
}

export default Main;