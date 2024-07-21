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
                        <div className='summary-certifiacte'></div>
                        <div className='summary-education'></div>
                        <div className='summary-skill'></div>
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