import '../css/projcet.css';

const Projcet = () => {
    return (
        <>
            <div className="project-wrap">
                <div className='project-header'>
                    <div className='project-header-current-page'>PROJECT</div>
                    <div className='project-header-name'>SUNG U HYEON</div>
                </div>
                <div className='project-content'>
                    <div className='project-list'>
                        <div className='project-item'>
                            <div className='project-item-title'>Team Project:</div>
                            <div className='project-item-name'>Panda Office HR ERP System</div>
                        </div>
                        <div className='project-item'>
                            <div className='project-item-title'>Team Project:</div>
                            <div className='project-item-name'>Dosirak</div>
                        </div>
                    </div>
                    <div className='project-view'>
                        {/* <div className='project-default'>
                            <p>PROCJET</p>
                            <p>CLICK?</p>
                        </div> */}
                        <div className='project-description'>
                            <h3 className='project-name'>프로젝트명: Panda Office HR ERP System</h3>
                            <h3 className='project-duration'>개발기간: 2024.05.10 ~ 2024.07.16</h3>
                            <h3 className='project-overview'>프로젝트 개요</h3>
                            <div className='project-purpose'>
                                <h5 className='project-purpose-title'>프로젝트 목적:</h5>
                                <ul>
                                    <li>회사의 전반적인 자원 관리와 효율성을 높이기 위해 HR ERP 시스템 개발</li>
                                </ul>
                            </div>
                            <h4 className='team-composition'>팀 구성: 7명</h4>
                            <h4 className='responsibility'>담당 분야: 채용 면접 관리</h4>
                            <h4 className='role'>역할: 채용 면접 관리 모듈 개발</h4>
                            <div className='feature-section'>
                                <h5 className='feature-title'>주요 기능:</h5>
                                <ul className='feature-list'>
                                    <li className='feature-item'>채용 면접 일정 관리</li>
                                    <li className='feature-item'>면접 진행 상황 실시간 업데이트</li>
                                    <li className='feature-item'>지원자 정보 관리</li>
                                </ul>
                            </div>
                            <div className='tech-tools-section'>
                                <h5 className='tech-tools-title'>사용 기술 및 도구</h5>
                                <ul className='tech-tools-list'>
                                    <li className='tech-tools-item'>프로그래밍 언어: Java, HTML, CSS, JavaScript</li>
                                    <li className='tech-tools-item'>프레임워크: SpringBoot, React.js</li>
                                    <li className='tech-tools-item'>데이터베이스: MySQL</li>
                                    <li className='tech-tools-item'>API: FullCalendar</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projcet;