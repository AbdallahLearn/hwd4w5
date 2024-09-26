import React from 'react'

function BootcampCard(props) {

    let borderStyle, titleStyle, buttonStyle;

    const today = new Date();
    const todayString = today.toISOString().split('T')[0]; // 'YYYY-MM-DD'
    
    const isOldDate = props.date < todayString;

    if (isOldDate) {
        borderStyle = '10px solid gray';
        titleStyle = { color: 'gray' };
        buttonStyle = { color: 'gray', border: '2px solid gray' };
    } else {
        switch (props.title) {
            case 'لقاء':
                borderStyle = '10px solid #bd91ef';
                titleStyle = { color: '#bd91ef' };
                buttonStyle = { color: '#bd91ef', border: '2px solid #bd91ef' };
                break;
            case 'معسكر':
                borderStyle = '10px solid #b2b1e9';
                titleStyle = { color: '#b2b1e9' };
                buttonStyle = { color: '#b2b1e9', border: '2px solid #b2b1e9' };
                break;
            case 'برنامج':
                borderStyle = '10px solid #9dd6d8';
                titleStyle = { color: '#9dd6d8' };
                buttonStyle = { color: '#9dd6d8', border: '2px solid #9dd6d8' };
                break;
            default:
                borderStyle = '10px solid purple';
                titleStyle = { color: 'purple' };
                buttonStyle = { color: '#bd91ef', border: '2px solid #bd91ef' };
                break;
        }
    }
    return (
        <>
            <div className="container-card-all mt-5">
            <div className="container">
            {/* <div class="row row-cols-1 row-cols-md-3 g-4"> */}
                <div class="col">
                    <div class="card mt-5" style={{borderRight: borderStyle}}>
                        
                        <div class="card-body">
                            <h5 class="card-title" style={{color:titleStyle}}>{props.title}</h5>
                            <p class="card-text">{props.subtitle}</p>
                            <ul className='list-card'>
                                <li className='list'><img width="20" height="20" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1"/></li>
                                <li className='list'>{props.location}</li>
                                <li className='list'><img width="20" height="20" src="https://img.icons8.com/ios/50/calendar--v1.png" alt="calendar--v1"/>                                </li>
                                <li className='list'>{props.time}</li>
                            </ul>
                            <ul className='list-date'>
                                <div className="container-list">
                                    <li className='list'><img width="20" height="20" src="https://img.icons8.com/ios/50/calendar--v1.png" alt="calendar--v1"/>                                </li>
                                    <li className="list"><p>يبدا في {props.date }</p></li>
                                </div>
                           <div className="details-btn">
                                <button className="d-btn"  style={buttonStyle}>التفاصيل</button>
                            </div>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            {/* </div> */}
            </div>
            </div>
            
           
        </>
    )
}

export default BootcampCard
