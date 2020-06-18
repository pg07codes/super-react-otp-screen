import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'
import './SuperReactOtpScreen.css';

function SuperReactOtpScreen() {
  return (
    <>
      <Grid container justify="center">
        <Grid item lg={4} md={6} sm={8} xs={11}>
          <Paper id="login-otp">
            <div style={{ textAlign: 'center' }}>
              <img id="logo-img" src={process.env.PUBLIC_URL + '/logo.svg'} alt="Super React OTP" />
            </div>
            <Grid container justify="center" spacing={2}>
              <Grid item xs={4}>
                <select name="codes" id="codes">
              
                  {[1, 2, 3, 4, 5, 6, 7].map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
            
              </Grid>
              <Grid item xs={7}>
                <input type="text" placeholder="Enter 10 digit Mobile Number" />
              </Grid>

              <Grid item xs={11}>

                <a href="/" class="send-otp-btn">Get OTP</a>

              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

    </>
  );
}

export default SuperReactOtpScreen;
