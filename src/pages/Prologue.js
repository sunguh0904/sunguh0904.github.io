import '../css/prologue.css';

const Prologue = () => {
    return (
        <>
            <div className='prologue-wrap'>
                <div className='prologue-header'>
                    <div className='prologue-header-current-page'>PROLOGUE</div>
                    <div className='prologue-header-name'>SUNG U HYEON</div>
                </div>
                <div className="prologue-content">
                    <div className='summary-wrap'>
                        <div className='summary-content'>
                            <div className='summary-certifiacte'>
                                <ul>
                                    <li className='summary-title'>CERTIFICATE</li>
                                    <ul className='summary-discription'>
                                        <li><span className='summary-position'>2016.03</span> <span>자동차운전면허 1종 보통</span></li>
                                        <li><span className='summary-position'>2021.05</span> <span>GTQ 그래픽 기술 자격증 1급</span></li>
                                    </ul>
                                </ul>
                            </div>
                            <div className='summary-education'>
                                <ul>
                                    <li className='summary-title'>EDUCATION</li>
                                    <ul className='summary-discription'>
                                        <li><span className='summary-position'>2021.02 ~ 2021.08</span> <span>엠비씨(MBC) 아카데미 반응형 UI/UX 웹퍼블리셔 수료</span></li>
                                        <li><span className='summary-position'>2024.01 ~ 2024.07</span> <span>하이미디어 아카데미 React.js/Springboot 자바 풀스텍 9기 수료</span></li>
                                    </ul>
                                </ul>
                            </div>
                            <div className='summary-skill'>
                                <ul>
                                    <li className='summary-title'>USED SKILL & TOOL</li>
                                    <ul className='summary-discription'>
                                        <li>
                                            <span className='summary-position'>Front</span>
                                            <span className='img-border'><img src={`${process.env.PUBLIC_URL}/icons/front/html-5.png`} alt='html' /></span>
                                            <span className='img-border'><img src={`${process.env.PUBLIC_URL}/icons/front/css-3.png`} alt='css' /></span>
                                            <span className='img-border'><img src={`${process.env.PUBLIC_URL}/icons/front/js.png`} alt='js' /></span>
                                            <span className='img-border'><img src={`${process.env.PUBLIC_URL}/icons/front/react.png`} alt='react' /></span>
                                        </li>
                                        <li>
                                            <span className='summary-position'>Back</span>
                                            <span><img src='' alt='java' /></span>
                                            <span><img src='' alt='springboot' /></span>
                                            <span><img src='' alt='jpa' /></span>
                                        </li>
                                        <li><span className='summary-position'>Database</span>
                                            <span><img src='' alt='mysql' /></span>
                                        </li>
                                        <li>
                                            <span className='summary-position'>Server</span>
                                            <span><img src='' alt='tomcat' /></span>
                                        </li>
                                        <li>
                                            <span className='summary-position'>Deploy</span>
                                            <span><img src='' alt='aws' /></span>
                                            <span><img src='' alt='docker' /></span>
                                            <span><img src='' alt='linux' /></span>
                                            <span><img src='' alt='ubuntu' /></span>
                                        </li>
                                        <li>
                                            <span className='summary-position'>Tool</span>
                                            <span><img src='' alt='intellij' /></span>
                                            <span><img src='' alt='figma' /></span>
                                            <span><img src='' alt='git' /></span>
                                            <span><img src='' alt='gradle' /></span>
                                        </li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='profile-wrap'>
                        <div className='profile-img'></div>
                        <div className='profile-info'>
                            <div className='profile-ko-name'>성우현</div>
                            <div className='profile-eng-name'>SUNG U HYEON</div>
                            <div className='profile-birth-date'>1996.09.04</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Prologue;