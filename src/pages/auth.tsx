import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';


const Auth = () => {

	const [auth, setAuth] = useState<'signup' | 'signin'>('signin');


	const toggleAuth = (state: 'signup' | 'signin') => {
		setAuth(state);
	}

	return (
		<>
			<Head>
				<title>Auth</title>
				<meta name='description' content='For watching movies you should sign to app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Image
			src={'/logo.svg'}
			alt={'logo'}
			width={80}
			height={80}
			className={'absolute left-4 top-4 cursor-pointer object-contain'} />

			<form className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:mx-14'>
				<h1 className='text-4xl font-semibold'>{auth === 'signup' ? 'Sign Up' : 'Sign In'}</h1>
				<div className='space-y-4'>
					<label className='inline-block w-full'>
						<input type="text" placeholder='Email' className='input' />
					</label>
					<label className='inline-block w-full'>
						<input type="password" placeholder='Password' className='input' />
					</label>
				</div>

				{auth === 'signin' ? (
				<button type='submit'
				className='w-full bg-[#e10856] py-3 font-semibold'>
					Sign In
					</button>
				) : (
					<button type='submit'
				className='w-full bg-[#e10856] py-3 font-semibold'>
					Sign Up
					</button>
				)}

					{auth == 'signin' ? (
					<div className='text-[gray]'>
						Not yet Account?{' '}
						<button type='button' className='text-white hover:underline' onClick={() => toggleAuth('signup')}>Sign Up Now</button>
					</div>
					) :  (
						<div className='text-[gray]'>
						Allready have account?{' '}
						<button type='button' className='text-white hover:underline'
						onClick={() => toggleAuth('signin')}>
							Sign In</button>
					</div>
					)}
			</form>
		</>
	);
};

export default Auth;
