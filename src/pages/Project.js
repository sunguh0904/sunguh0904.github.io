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
                            <div className='project-item-description'>Panda Office ERP System</div>
                        </div>
                    </div>
                    <div className='project-view'></div>
                </div>
            </div>
        </>
    )
}

export default Projcet;