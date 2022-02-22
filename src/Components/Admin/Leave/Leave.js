import React from 'react';
import Button from '@mui/material/Button';

import './Leave.css'


const Leave = () => {
    const pathname = window.location.pathname;
    return (
        <div>
            {/* add leave area */}
            <div className="add-leave-area">
                <div className="top-heading">
                    <h4>Add Leave</h4>
                    <p>{pathname}</p>
                </div>
                {/* Leave text fild */}
                <div className="leave-fild-content">
                    <form className='select-area'>
                        {/* employee input */}
                        <label className='employee-text' for="employee">Employee*</label>
                        <select name="name" id="name">
                            <option value="select">Select</option>
                            <option value="arif">Mohammad Arif</option>
                            <option value="niaz">Mohammad Niaz</option>
                        </select>
                        <br />
                        {/* Leave type input */}
                        <label className='leaveType' for="leavetype">Leave Type*</label>
                        <select name="name" id="name">
                            <option value="select">Select</option>
                            <option value="holilday">Holiday</option>
                            <option value="reason">Personal Reason</option>
                        </select>
                        <br />
                        {/* From input */}
                        <label className='form' for="from">From*</label>
                        <input className='date-type-input' type="date" id="start" name="trip-start"
                            
                            min="2022-01-01" max="2030-12-31"></input>
                        <br />
                        {/* To Input */}
                        <label className='to' for="from">To*</label>
                        <input className='date-type-input' type="date" id="start" name="trip-start"
                            
                            min="2022-01-01" max="2030-12-31"></input>
                        <br />
                        {/* Reason Input */}
                        <label className='reason' for="employee">Reason*</label>
                        <textarea name="textarea" id="" cols="30" rows="10" placeholder='Comment'></textarea>
                    </form>
                    <div className="form-button">
                    <Button variant="contained">Save</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leave;