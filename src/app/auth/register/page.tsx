import Image from 'next/image'
import Link from 'next/link'
import { Cinzel } from 'next/font/google'
import { signIn } from '@/auth'
import RegisterForm from '@/components/RegisterForm'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"]
})

const page = () => {
  return (
    <div className={`${cinzel.className} bg-cover bg-center bg-no-repeat min-h-screen w-full flex flex-1 flex-col justify-center items-center py-12 sm:px-6 lg:px-8`} style={{ backgroundImage: `url('/assets/auth/RegisterBG.png')` }}>

      <div className="bg-[#026474]  bg-opacity-60 md:px-14 md:w-[35%]  md:min-w-[650px] sm:w-[70%] w-[90%] rounded-2xl sm:px-12 flex justify-center flex-col items-center px-6 py-6 sm:rounded-lg  text-white" >
        <h1 className='font-bold md:text-4xl text-2xl'>
          Sign-Up
        </h1>
        <span className="text-center text-xs sm:text-base md:text-lg lg:text-xl md:mb-6 mb-3 whitespace-nowrap">
          PLEASE FILL THE FORM TO CREATE AN ACCOUNT
        </span>
        <RegisterForm/>
        
        
        <div className="flex items-center my-4 w-[100%]">
          <div className="flex-grow border-t border-[#f9f9f9]"></div>
          <span className="mx-4">OR</span>
          <div className="flex-grow border-t border-[#f9f9f9]"></div>
        </div>


        <form
          className='w-full'
          action={async () => {
            "use server"
            await signIn("google")
          }}
        >
          <button
            type='submit'
            className="flex items-center justify-center w-full rounded-md md:mt-4 mt-1 text-black bg-[#f9f9f9] px-3 md:py-4 py-2 md:font-semibold font-medium md:text-base text-sm leading-6 shadow-sm transition-colors outline-offset-2"
          >
            <Image alt='google' src={'/assets/auth/google_icon.svg'} width={20} height={20} className="mr-2" />
            CONTINUE WITH GOOGLE
          </button>
        </form>

        <div className='mt-2 md:text-base text-xs md:font-semibold font-medium'>
          ALREADY HAVE AN ACCOUNT? <Link href={'/auth/login'}> LOG IN </Link>
        </div>
      </div>
    </div>
  )
}

export default page