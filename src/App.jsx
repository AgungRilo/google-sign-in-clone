import { useState } from 'react'
import googleLogo from './assets/google.svg'
import './App.css'
import { Button, TextField } from '@mui/material'

function App() {
  return (
    <div className='full-container'>
      <div className='container'>
        <div className='header'>
          <img src={googleLogo} className="logo" width={48} height={48} alt="Google logo" />
        </div>
        <div className='body'>
          <div className='body-left'>
            <h1 className='header-text-1'>
              <span>Sign in</span>
            </h1>
            <div className='header-text-2'>
              Use your Google Account
            </div>
          </div>
          <div className='body-right'>
            <div className='form-login'>
              <div className='text-field'>
                <TextField id="outlined-basic" label="Email or phone" variant="outlined" fullWidth sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#666666', // warna border normal
                    },

                  },
                }} />

              </div>
              <div className='text-forget'>
                <Button
                  variant="text"
                  color="primary"
                  style={{ textTransform: 'none', padding: 0, marginTop: "8px", fontWeight: 500 }}
                  onClick={() => alert('Forgot email clicked')}
                >
                  Forgot email?
                </Button>
              </div>
            </div>
            <div className='desc-login'>
              Not your computer? Use a Private Window to sign in.
              <Button
                variant="text"
                color="primary"
                style={{ textTransform: 'none', padding: 0, marginTop: "8px", fontWeight: 500 }}
                onClick={() => alert('Forgot email clicked')}
              >
                Learn more about using Guest mode
              </Button>
            </div>
          </div>
        </div>
        <div className='footer'>
          <div className='footer-left'>
            <Button
              variant="text"
              color="primary"
              sx={{ textTransform: 'none', padding: 0, marginTop: "8px", fontWeight: 500, height: "40px" }}
              onClick={() => alert('Forgot email clicked')}
            >
              Create account
            </Button>
          </div>
          <div className='footer-right'>
            <div className='btn-left'><Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: "50px",
                // height: "20x",
                width: "78px",
                margin: "auto",
                textTransform: "none"
              }}
              // style={{ textTransform: 'none', padding: 0, marginTop: "8px", fontWeight: 500 }}
              onClick={() => alert('Forgot email clicked')}
            >
              Next
            </Button>
            </div>
            <div className='btn-right'></div>
          </div>
        </div>
      </div>
      <div className='navigation'>
        <div className='navigation-left'>
          <div className='form'>
            <select name="select">
              <option value="English (United States) selected" >
                English (United States)
              </option>
              <option value="Portugês (Brasil) ">Portugês (Brasil)</option>
              <option value="Español (España)">Español (España)</option>
            </select>
          </div>

        </div>
        <div className='navigation-right'>
          <div className='btn-nav'>
            <Button
              variant="text"
              color=""
              sx={{ textTransform: 'none', padding: 0, marginTop: "8px", fontWeight: 500, height: "48px" }}
              onClick={() => alert('Forgot email clicked')}
            >
              Help
            </Button>
          </div>
          <div className='btn-nav'>
            <Button
              variant="text"
              color=""
              sx={{ textTransform: 'none', padding: 0, marginTop: "8px", fontWeight: 500, height: "48px" }}
              onClick={() => alert('Forgot email clicked')}
            >
              Privacy
            </Button>
          </div>
          <div className='btn-nav'>
            <Button
              variant="text"
              color=""
              sx={{ textTransform: 'none', padding: 0, marginTop: "8px", fontWeight: 500, height: "48px" }}
              onClick={() => alert('Forgot email clicked')}
            >
              Terms
            </Button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default App
