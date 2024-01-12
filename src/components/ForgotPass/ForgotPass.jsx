import React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes.json';

const ForgotPass = () => {
  const [state1, setstate1] = useState(
    'Please enter your login email address to receive your password reset link.'
  );
  const [state2, setstate2] = useState('Get the Link');
  const navigate = useNavigate();
  return (
    <>
      <div className="lg:flex xl:flex overflow-hidden">
        {/* aside Image Section */}
        <section className="">
          <div
            className="w-screen h-[280.62px]  lg:w-[950.67px] lg:h-screen "
            style={{
              backgroundImage:
                "url('https://blogger.googleusercontent.com/img/a/AVvXsEiYBigll_h9aF-o_7qFvttWcBGchqfatco_2mE1twc4RAQHKzF6Wlai0EdG0f59FX2PasrY7vWz7HClDQpsz0woMKYX3U6CI7HaPgMxiZoiwh9Z7XcZf9BZPstcsGyQ0ZsvfFrzIZrlpbi60U6pdxa6H1Lu9MQFCOKu42fyXreVks9xywCgqqzC94mmRJj0')",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className="text-stone-100 lg:text-[35px] xl:text-[35px] text-[22px] text-center xl:text-start lg:text-start font-['KyivType Sans'] leading-[60.84px]">
              Welcome to PANDA
            </div>
          </div>
        </section>
        {/* aside Image Section End */}

        {/* Auth Section Start */}

        <section className="m-auto">
          <div className="flex flex-col  items-center justify-end ml-0">
            <div className="flex gap-6  mt-5 border-b-2">
              <div className="text-stone-900 text-base font-normal font-['Jost'] leading-tight">
                <Link to={routes.SIGNUP}> Join PANDA</Link>
              </div>

              <p className="text-slate-400">Or</p>
              <div className="text-stone-900 text-base font-normal font-['Jost'] leading-tight">
                <Link to={routes.SIGNIN}> Sign in</Link>
              </div>
            </div>
            <div className="lg:w-[370px] xl:w-[370px] w-[350px] h-[330px] rounded-tl-[250px] rounded-tr-[250px] border border-neutral-200 mt-10 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="ml-[165px] mt-10"
              >
                <path
                  d="M11.1904 1.5957C11.1904 1.18149 11.5262 0.845703 11.9404 0.845703C12.3546 0.845703 12.6904 1.18149 12.6904 1.5957V10.285L17.2437 5.73173C17.5366 5.43884 18.0115 5.43884 18.3044 5.73173C18.5973 6.02462 18.5973 6.4995 18.3044 6.79239L13.7511 11.3457H22.4404C22.8546 11.3457 23.1904 11.6815 23.1904 12.0957C23.1904 12.5099 22.8546 12.8457 22.4404 12.8457H13.7511L18.3044 17.399C18.5973 17.6919 18.5973 18.1668 18.3044 18.4597C18.0115 18.7526 17.5366 18.7526 17.2437 18.4597L12.6904 13.9064V22.5957C12.6904 23.0099 12.3546 23.3457 11.9404 23.3457C11.5262 23.3457 11.1904 23.0099 11.1904 22.5957V13.9063L6.63712 18.4597C6.34422 18.7525 5.86935 18.7525 5.57646 18.4597C5.28356 18.1668 5.28356 17.6919 5.57646 17.399L10.1297 12.8457H1.44043C1.02622 12.8457 0.69043 12.5099 0.69043 12.0957C0.69043 11.6815 1.02622 11.3457 1.44043 11.3457H10.1297L5.57645 6.79241C5.28356 6.49951 5.28356 6.02464 5.57645 5.73175C5.86934 5.43885 6.34422 5.43885 6.63711 5.73175L11.1904 10.2851V1.5957Z"
                  fill="#1F1F1F"
                />
              </svg>
              <div className="w-[] h-[80px] text-center  ">
                <span className="text-stone-900 lg:text-[28px] xl:text-[28px] text-[25px] font-medium font-['Jost']">
                  Sign in
                </span>
              </div>

              <form className="flex justify-center flex-col items-center gap-y-3 mb-1">
                <TextField
                  id="standard-basic"
                  label="email"
                  variant="standard"
                  className="w-60 placeholder:text-yellow-500"
                />
                <div className="text-gray-400 text-[13px] font-normal font-['Jost'] leading-[18.20px] p-10">
                  {state1}
                </div>
              </form>

              {/* <SignUp /> */}
            </div>
            <br />

            <div
              className="text-gray-400 text-base font-medium font-['Jost'] leading-tight cursor-pointer"
              onClick={() => {
                setstate2('Resend Link');
              }}
            >
              Didn’t get the password reset link?{' '}
            </div>
            <div className=" rounded-[35px] border border-stone-900 p-3 pl-12 pr-12 mt-5">
              <div className="origin-top-left  text-stone-900 text-[15px]  ">
                <Link
                  onClick={() => {
                    setstate1(
                      'Your password reset link has been sent to your email address. Check your email and click on the link to reset your password.'
                    );

                    if (state2 === 'Resend Link') {
                      setTimeout(() => {
                        navigate('/SignIn');
                      }, 2000);
                    }
                  }}
                >
                  {state2}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>{' '}
    </>
  );
};

export default ForgotPass;
