// import React, { useState } from 'react';

// const LoginAndRegistration = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const inputs = document.querySelectorAll('.input input');
//     let isValid = true;

//     inputs.forEach(input => {
//       if (input.value.trim() === '') {
//         isValid = false;
//         input.classList.add('error');
//       } else {
//         input.classList.remove('error');
//       }
//     });

//     if (isValid) {
//       console.log('Form submitted successfully');
//     }
//   };

//   return (
//     <div className='container'>
//       <div className='header'>
//         <div className='text'>Sign Up</div>
//         <div className='underline'></div>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div className='inputs'>
//           <div className='input'>
//             <div>First Name</div>
//             <input type='text' />
//           </div>
//           <div className='input'>
//             <div>Last Name</div>
//             <input type='text' />
//           </div>
//           <div className='input'>
//             <div>Username</div>
//             <input type='text' />
//           </div>
//           <div className='input'>
//             <div>Email</div>
//             <input type='email' placeholder='example@example.com' required />
//           </div>
//           <div className='input'>
//             <div>Password</div>
//             <input className='pass'
//               type={showPassword ? 'text' : 'password'}
//               pattern=".{6,}"
//               title="Six or more characters"
//               required
//             />
//             <button className='view-password' onClick={togglePasswordVisibility}>
//               {showPassword ? 'Hide' : 'View'}
//             </button>
//           </div>
//         </div>
//         <div className='submit-container'>
//           <button type='submit' className='submit'>Sign Up</button>
//           <button type='submit' className='submit'>Login</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default LoginAndRegistration;


import React, { useState } from 'react';

const LoginAndRegistration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll('.input input');
    let isValid = true;

    inputs.forEach(input => {
      if (input.value.trim() === '') {
        isValid = false;
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    });

    if (isValid) {
      console.log('Form submitted successfully');
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>
          {isRegistering ? 'Sign Up' : 'Login'}
        </div>
        <div className='underline'></div>
      </div>
      <form onSubmit={handleSubmit}>
        {isRegistering && (
          <div className='inputs'>
            <div className='input'>
              <div>First Name</div>
              <input type='text' />
            </div>
            <div className='input'>
              <div>Last Name</div>
              <input type='text' />
            </div>
            <div className='input'>
              <div>Username</div>
              <input type='text' />
            </div>
            <div className='input'>
              <div>Email</div>
              <input type='email' placeholder='example@example.com' required />
            </div>
            <div className='input'>
              <div>Password</div>
              <input className='pass'
                type={showPassword ? 'text' : 'password'}
                pattern=".{6,}"
                title="Six or more characters"
                required
              />
              <button className='view-password' onClick={togglePasswordVisibility}>
                {showPassword ? 'Hide' : 'View'}
              </button>
            </div>
          </div>
        )}
        {!isRegistering && (
          <div className='inputs'>
            <div className='input'>
              <div>Username</div>
              <input type='text' />
            </div>
            <div className='input'>
              <div>Password</div>
              <input className='pass'
                type={showPassword ? 'text' : 'password'}
                pattern=".{6,}"
                title="Six or more characters"
                required
              />
              <button className='view-password' onClick={togglePasswordVisibility}>
                {showPassword ? 'Hide' : 'View'}
              </button>
            </div>
          </div>
        )}
        <div className='submit-container'>
          {isRegistering && (
            <button type='submit' className='submit'>Sign Up</button>
          )}
          {!isRegistering && (
            <button type='submit' className='submit'>Login</button>
          )}
          <button
            type='button'
            className='submit'
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? 'Switch to Login' : 'Switch to Sign Up'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginAndRegistration;

