import React from 'react'

function ShowTemp({text}){
    return(
     <div className='container my-5'>
        <div className='row mb-2'>
            <div className='col-md-4 mb-4'>
                <div className='card'>

                    <div className='card-body'>
                        <h5 className='card-title'>Date</h5>
                        <p className='card-text'>{text.Date}</p>

                    </div>

                </div>

            </div>

            <div className='col-md-4 mb-4'>
                <div className='card'>

                    <div className='card-body'>
                        <h5 className='card-title'>Time</h5>
                        <p className='card-text'>{text.Time}</p>

                    </div>

                </div>

            </div>

            <div className='col-md-4 mb-4'>
                <div className='card'>

                    <div className='card-body'>
                        <h5 className='card-title'>Temp</h5>
                        <p className='card-text'>{text.Temp}</p>

                    </div>

                </div>

            </div>

            <div className='col-md-4 mb-4'>
                <div className='card'>

                    <div className='card-body'>
                        <h5 className='card-title'>wind Direction</h5>
                        <p className='card-text'>{text.WindDirection}</p>

                    </div>

                </div>

            </div>

            <div className='col-md-4 mb-4'>
                <div className='card'>

                    <div className='card-body'>
                        <h5 className='card-title'>Wind Speed</h5>
                        <p className='card-text'>{text.WindSpeed}</p>

                    </div>

                </div>

            </div>

            <div className='col-md-4 mb-4'>
                <div className='card'>

                    <div className='card-body'>
                        <h5 className='card-title'>Weather Description</h5>
                        <p className='card-text'>{text.WeatherDescription}</p>

                    </div>

                </div>

            </div>

            <div className='col-md-4 mb-4'>
                <div className='card'>

                    <div className='card-body'>
                        <h5 className='card-title'>Humidity</h5>
                        <p className='card-text'>{text.Humidity}</p>

                    </div>

                </div>

            </div>

        </div>
      

     </div>

    )
}
export default ShowTemp