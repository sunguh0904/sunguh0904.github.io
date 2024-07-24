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
                        <div className='project-default'>
                            <p>PROCJET</p>
                            <p>CLICK?</p>
                        </div>
                        <div className='project-description'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projcet;