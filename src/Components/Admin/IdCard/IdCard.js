import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import './IdCard.css'

const IdCard = () => {
    const pathname = window.location.pathname;
    return (
        <div>
            <div className="id-card-area">
                <div className="id-content">
                    <h2>Employee ID Card</h2>
                    <p>{pathname}</p>
                </div>
                <div className="employee-id">
                    <div className="employee-id-details">
                        <div className="top-content-id">
                            <h3>Hr <span style={{color: 'salmon'}}>Care</span></h3>
                            <p>Human Resourse</p>
                        </div>
                        <div className="middle-content-id">
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <div className="img-id">
                                    <img src="https://i.ibb.co/DGPYn0C/person.jpg" alt="" />
                                    </div>
                                </Grid>
                                <Grid item xs={8}>
                                    <h3>Mohammad Forid</h3>
                                    <p>Creative Manager</p>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="bottom-content-id">
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <h3>ID NO</h3>
                                    <p>S-15012</p>
                                    <h3>D.O.B</h3>
                                    <p>22/4/2021</p>
                                </Grid>
                                <Grid item xs={3}>
                                    <h3>Joined Date</h3>
                                    <p>22/06/2021</p>
                                    <h3>Expire Date</h3>
                                    <p>22/3/2025</p>
                                </Grid>
                                <Grid item xs={3}>
                                    <h3>Phone</h3>
                                    <p>01855555</p>
                                    <h3>B Group</h3>
                                    <p>B+</p>
                                </Grid>
                                <Grid item xs={3}>
                                    <h3 className="qr">QR Code</h3>
                                    <img src="https://i.ibb.co/fxLKH5h/qr-code-g151cf237e-1280.png" alt="" />
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
                <div className="form-button">
                    <Button variant="contained">Download PDF</Button>
                    </div>
            </div>

        </div>
    );
};

export default IdCard;