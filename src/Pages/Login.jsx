import React from 'react'

const Login = () => {
  return (
    <>
    <section id='login'>
        <div className="container">
                <div className="ldiv">
                     <div className="lh2">
                    <h2>Login</h2>
                     </div>
                    <form action="">
                        <div className="linput">
                            <input type="text"  placeholder='UserName'/>
                        </div>
                         <div className="linput">
                            <input type="password"  placeholder='Password'/>
                        </div>

                        <button type='submit' className='lbtn'>Submit</button>

                    </form>
                </div>
        </div>
    </section>
    </>
  )
}

export default Login