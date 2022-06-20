
export default function Section1() {
    return (
        <div>
            <div class="flex-container">
                <div className='partone'>
                    <div className='radiotype'>
                        <div className='radiotype1'>
                            <input type='radio' id='GL/RS' name='Type'></input>
                            <label>GL/RS</label><br></br>
                            <input type='radio' id='GL/ZS' name='Type'></input>
                            <label>GL/ZS</label><br></br>
                            <input type='radio' id='GA' name='Type'></input>
                            <label>GA</label>
                        </div>
                        <div className='radiotype1'>
                            <input type='radio' id='All' name='Type'></input>
                            <label>All</label><br></br>
                            <input type='radio' id='Export' name='Type'></input>
                            <label>Export</label><br></br>
                            <input type='radio' id='Domestic' name='Type'></input>
                            <label>Domestic</label>
                        </div>
                        <div className='radiotype1'>
                            <input type='radio' id='C11' name='Type'></input>
                            <label>C11</label><br></br>
                            <input type='radio' id='C10' name='Type'></input>
                            <label>C10</label><br></br>
                            <input type='radio' id='C03' name='Type'></input>
                            <label>C03</label>
                        </div>
                        <div className='numbertype'>
                            <div>
                                <label className='Thickness'>Thickness From</label>
                                <input type='text' id='lowerRange' ></input>
                                <label>To</label>
                                <input type='text' id='upperRange' ></input><br></br>
                                <label className='Widthfrom'>Width From</label>
                                <input type='text' id='lowerRange' ></input>
                                <label>To</label>
                                <input type='text' id='upperRange' ></input>
                            </div>
                            <div>
                                <label className='Idia'>Idia</label>
                                <select className='Select'>
                                    <option ></option>
                                    <option>Option1</option>
                                    <option>Option2</option>
                                </select>
                                <label className='Sleeve'>Sleeve</label>
                                <select className='Select'>
                                    <option ></option>
                                    <option>Option1</option>
                                    <option>Option2</option>
                                </select>
                            </div>
                        </div>
                        <div className='radiotype1 sub'>
                            <div className='FP'>
                                <input type='radio' id='FP' name='fp'></input>
                                <label>FP</label>
                            </div>
                            <div className='NFP'>
                                <input type='radio' id='NFP' name='fp'></input>
                                <label>NOT IN FP</label>
                            </div>
                        </div>
                    </div>
                    <div className='lowerpart'>
                        <button id="createSchedule">Create Schedule</button>
                        <label>Grade</label>
                        <select className='select'>
                            <option></option>
                            <option>Option1</option>
                            <option>Option2</option>
                        </select>
                        <label>Qlty</label>
                        <input type='text'></input>
                        <label>TDC</label>
                        <input type='text'></input>
                        <label>Post treat</label>
                        <input type='text'></input>
                    </div>
                </div>

                <div className='parttwo'>
                    <div className='ordertype'>
                        <input type="radio" name='order'></input>
                        <label>IBM ORDER</label>
                        <input type="radio" name='order'></input>
                        <label>SAP ORDER</label>
                    </div>
                    <div className='orderitem'>
                        <label>Order Item</label>
                        <input type='text' id="order" placeholder='Item'></input>
                    </div>
                </div>
            </div>

        </div>
    )
}