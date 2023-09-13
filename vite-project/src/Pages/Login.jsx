import { LoginForm } from "../Components/LoginForm";

export const Login = () => {
  return (
    <main className='h-screen w-screen flex justify-center items-center bg-slate-100'>
      {/* Main Sign Up Section */}
      <section className='w-[600px] shadow-2xl	box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25) rounded bg-white flex flex-col'>
        {/* Logo Section */}
        <div className='h-[100px] bg-pink-300 flex flex-col justify-center items-center align-middle rounded-t'>
          <div className='text-white flex gap-3 text-2xl '>
            <span className='text-blue-700'>♫ Music</span>
            <span className='text-blue-700'>Academy ♫</span>
          </div>
        </div>
        {/* Input Box Section */}
        <div className='h-[70%]'>{<LoginForm />}</div>
      </section>
    </main>
  );
};
