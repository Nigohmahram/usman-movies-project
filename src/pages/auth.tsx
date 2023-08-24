import { TextField } from '@/components';
import Head from 'next/head';
import Image from 'next/image';
import {useContext, useState } from 'react';
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import { AuthContext } from '@/context/auth.context';
import { useRouter } from 'next/router';



const Auth = () => {

	const [auth, setAuth] = useState<'signup' | 'signin'>('signin');

	const{error, IsLoading, signIn, signUp, user} = useContext(AuthContext);
	const router = useRouter();


	if(IsLoading) return
	<>Loading....</>;
	if(user) router.push('/');

	const toggleAuth = (state: 'signup' | 'signin') => {
		setAuth(state);
	}

	const onSubmit = (formData: {email: string; password: string}) => {
		if(auth === 'signup') {
			signUp(formData.email, formData.password)
		}else{
			signIn(formData.email, formData.password)
		}

	}
	const validation = Yup.object({
		email: Yup.string().email('Enter valid email').required('Email is required'),
		password: Yup.string().min(6, '6 minimum character').required('Password is required')
	})
	return (
		<div className='relative flex h-screen w-screen flex-col md:items-center md:justify-center bg-black md:bg-transparent'>
			<Head>
				<title>Auth</title>
				<meta name='description' content='For watching movies you should sign to app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Image src={'https://rb.gy/p2hphi'} alt='bg' fill className='object-cover -z-10 !hidden sm:!inline opacity-70'/>

			<Image
			src={'/logo.svg'}
			alt={'logo'}
			width={80}
			height={80}
			className={'absolute left-4 top-4 cursor-pointer object-contain'} />

			<div className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14  w-[550px] h-[600px]'>

				<Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit} validationSchema={validation}>
				<Form className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-10 w-[500px]'>
					<h1 className='text-4xl font-semibold'>{auth === 'signup' ? 'Sign up' : 'Sign In'}</h1>
					{error && <p className='text-red-500 font-semibold text-center'>{error}</p>}
					<div className='space-y-4'>
						<TextField name='email' placeholder='Email' type={'text'} />
						<TextField name='password' placeholder='Password' type={'password'} />
					</div>

					<button type='submit' disabled={IsLoading} className='w-full bg-[#E10856] py-3 mt-4 font-semibold'>
						{IsLoading ? 'Loading...' : auth === 'signin' ? 'Sign In' : 'Sign Up'}
					</button>

					{auth === 'signin' ? (
						<div className='text-[gray]'>
							Not yet account?{' '}
							<button type='button' className='text-white hover:underline' onClick={() => toggleAuth('signup')}>
								Sign Up Now
							</button>
						</div>
					) : (
						<div className='text-[gray]'>
							Already have account?{' '}
							<button type='button' className='text-white hover:underline' onClick={() => toggleAuth('signin')}>
								Sign In
							</button>
						</div>
					)}
				</Form>
			</Formik>
			<h1 className='!mt-[10px] text-center'>로그인 방법</h1>
			<p className='!mt-[10px] !text-white font-semibold'> 1.  Sign Up Now를 클릭하세요</p>
			<p className='!mt-[10px] !text-white font-semibold' > 2.  아무거나 이메일을 입력하세요</p>
			<p className='!mt-[10px] !text-white font-semibold' > 3. 아무거나 비밀번호 입력하세요</p>
			</div>
		</div>
	);
};

export default Auth;
