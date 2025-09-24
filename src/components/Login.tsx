
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import logo from '../assets/Logo.png';
import header from '../assets/header.png';
import bolt from '../assets/bolt.png';
import web from '../assets/webicon.png';
import shield from '../assets/shieldicon.png';
import layer1 from '../assets/Layer_1.png';
import layer2 from '../assets/layer2.png';
import layer3 from '../assets/layer3.png';
import layer4 from '../assets/Subtract.png';
import layer51 from '../assets/Vector.png';
import twox from '../assets/2x.png';
import graph from '../assets/Vector.png';
import v2 from '../assets/vector2.png';
import threex from '../assets/three.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/dashboard');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className='flex flex-row font-serif'>
      <div className="bg-darkgreen">
        <div className='m-32'>
          <div className='max-w-screen-lg flex flex-row items-center justify-between mb-24'>
            <div className='flex items-center gap-3'>
              <img className='bg-contain' src={logo} alt="logo" />
              <p className='text-white font-bold text-2xl'>CreditBee</p>
            </div>
            <button className='bg-lightgreen p-4 rounded-lg'>Get Started</button>
          </div>
          <div className='mb-20'>
            <p className='text-white font-semibold text-5xl mb-9'>UNDERSTANDING CREDIT SCORE MADE <span className='text-white font-semibold text-5xl mb-9 text-lightgreen'>SIMPLE</span></p>
            <p className='text-gray-300 text-lg'>No personal credit checks or founder guarantee.</p>
          </div>
          <div >
            <p className='mb-8 text-white'>Our offerings</p>
            <div className="flex gap-4 items-stretch flex-wrap">
              <div className="bg-cardgreen rounded-lg max-w-sm flex-1 p-4 flex flex-col items-center">
                <img src={bolt} alt="bolt" className="w-16 h-16 object-contain" />
                <p className="mt-4 text-center">Instant Productivity</p>
              </div>

              <div className="bg-cardgreen rounded-lg max-w-sm flex-1 p-4 flex flex-col items-center">
                <img src={web} alt="web" className="w-16 h-16 object-contain" />
                <p className="mt-4 text-center">Expense Management</p>
              </div>

              <div className="bg-cardgreen rounded-lg max-w-sm flex-1 p-4 flex flex-col items-center">
                <img src={shield} alt="shield" className="w-16 h-16 object-contain" />
                <p className="mt-4 text-center">100% Safe</p>
              </div>
            </div>

          </div>
          <div className='text-white mt-16 flex gap-4'>
            <p>Contact</p>
            <p>Social</p>
            <p>Address</p>
            <p>Legal Terms</p>
          </div>
        </div>
        <div className='m-32 flex flex-col items-center justify-between gap-6 p-12 w-full max-w-md'>
          <input
            type="email"
            placeholder='Enter your email'
            className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lightgreen'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='Enter your password'
            className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lightgreen'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='text-gray-300 flex items-center justify-between w-full'>
            <p>Remember me</p>
            <p>Forgot password?</p>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </div>

        <div className='flex items-center justify-evenly'>
          <button onClick={handleLogin} className='bg-lightgreen p-4 rounded-lg'>LogIn</button>
          <div className='flex text-lightgreen text-md gap-4'>
            <p>Facebook</p>
            <p>LinkedIn</p>
            <button onClick={handleGoogleSignIn} className='bg-lightgreen p-4 rounded-lg'>Google</button>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className='m-20 flex flex-col items-center'>
          <div className=''>
            <img src={header} alt="header" />
          </div>
          <div className='mt-20 text-3xl'>We help your credit score to be safe always</div>
          <div className='flex items-center justify-between gap-6 mt-20'>
            <div className='flex gap-2'>
              <img src={layer1} alt="1" />
              <p className='text-cardgreen'>Blooming</p>
            </div>

            <div className='flex gap-2'>
              <img src={layer2} alt="1" />
              <p className='text-cardgreen'>BuildRight</p>
            </div>

            <div className='flex gap-2'>
              <img src={layer3} alt="1" />
              <p className='text-cardgreen'>Flowbot</p>
            </div>

            <div className='flex gap-2'>
              <img src={layer4} alt="1" />
              <p className='text-cardgreen'>Expor</p>
            </div>

            <div className='flex gap-2'>
              <img src={layer51} alt="1" />
              <p className='text-cardgreen'>Redo</p>
            </div>
          </div>
        </div>
        <div className='m-20 flex flex-col items-center'>
          <div className='mt-12 flex flex-col items-center gap-4'>
            <p className='mb-4 text-darkgreen text-5xl'>Get More With Less Money</p>
            <p className='text-md text-gray-700'>Maximize your finance planning with Credit Bee</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
            <div className="bg-lightgreen rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <img src={twox} alt="2x" className="w-16 h-16 object-contain" />
              <p className="mt-4">Double Your Productivity</p>
            </div>

            <div className="bg-lightgreen rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <img src={graph} alt="2x" className="w-16 h-16 object-contain" />
              <p className="mt-4">Efficiency increase of your credit</p>
            </div>

            <div className="bg-lightgreen rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <img src={v2} alt="2x" className="w-16 h-16 object-contain" />
              <p className="mt-4">Centralize your finances</p>
            </div>

            <div className="bg-lightgreen rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <img src={threex} alt="2x" className="w-16 h-16 object-contain" />
              <p className="mt-4">More Activity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
