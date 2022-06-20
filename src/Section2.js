export default function Section2() {
    return (
        <div className='flex-container'>
            <div className='sectwo'>
                <div>
                    <label>Delivery Date</label><br></br>
                    <input type='text' size='8'></input>
                </div>
                <div>
                    <label>End Use</label><br></br>
                    <input type='text' size='5'></input>
                </div>
                <div>
                    <label>Customer</label><br></br>
                    <input type='text' size='5'></input>
                </div>
                <div>
                    <label>Product</label><br></br>
                    <input type='text' size='5'></input>
                </div>
                <div>
                    <label>Thick</label><br></br>
                    <input type='text' size='5'></input>
                </div>
                <div>
                    <label>Width</label><br></br>
                    <input type='text' size='5'></input>
                </div>
                <div>
                    <label>Part mass</label><br></br>
                    <input type='text' size='5'></input>
                </div>
                <div>
                    <label>Scheduled mass</label><br></br>
                    <input type='text' size='11'></input>
                </div>
                <div>
                    <label>Processed mass</label><br></br>
                    <input type='text' size='11'></input>
                </div>
                <div>
                    <label>Coil Wt</label><br></br>
                    <input type='text' size='5'></input>
                </div>
                <div>
                    <label>Total coating wt</label><br></br>
                    <input type='text' size='11'></input>
                </div>
            </div>
            <div className='sectwoone'>
                <div className='plaintext'>
                    <label>Total</label>
                    <label>Schedule</label>
                </div>
                <div className='inputtype'>
                    <div>
                        <label>Coils</label><br></br>
                        <input type='text' size='5'></input>
                    </div>
                    <div>
                        <label>Mass</label><br></br>
                        <input type='text' size='5'></input>
                    </div>
                    <div className='colorinput'>
                        <label>No Coil</label><br></br>
                        <input type='text' size='5'></input>
                    </div>
                    <div className='colorinput'>
                        <label>Tot wt</label><br></br>
                        <input type='text' size='5'></input>
                    </div>
                </div>
            </div>
        </div>
    )
}