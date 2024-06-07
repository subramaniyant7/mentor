import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfo } from "../../features/user/userSlice";

export const LoginType = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.userInfo);
    const [loginType, setLoginType] = useState('');
    const [error, setError] = useState(false)


    useEffect(() => {
        if (userInfo.login_type) setLoginType(userInfo.login_type)
    }, [userInfo]);

    const handleSubmit = () => {
        if (loginType === '') setError(true)
        if (loginType !== '') {
            setError(false)
            console.log(loginType);
            dispatch(updateUserInfo({ login_type: loginType }))
            navigate("/questions");
        }

    };

    console.log('loginType', loginType, error)

    return (
        <div className="h-full">
            <div className="flex flex-wrap h-full">
                <div className="w-full">
                    <div className="block bg-white shadow-lg h-full">
                        <div className="g-0 flex justify-center items-center h-full">
                            <div className="px-4 md:px-0 lg:w-4/12 flex justify-center items-center">
                                <div className="w-9/12">
                                    <div className="text-center">
                                        <div className="flex justify-center items-center">
                                            <svg
                                                width="59"
                                                height="59"
                                                viewBox="0 0 59 59"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M29.0588 58.5365C45.1076 58.5365 58.1177 45.4327 58.1177 29.2682C58.1177 13.1039 45.1076 0 29.0588 0C13.0101 0 0 13.1039 0 29.2682C0 45.4327 13.0101 58.5365 29.0588 58.5365ZM38.1242 13.6344C38.5654 12.0557 37.0444 11.1221 35.6552 12.119L16.2629 26.0335C14.7564 27.1145 14.9934 29.2682 16.6189 29.2682H21.7254V29.2284H31.6778L23.5685 32.1103L19.9935 44.9022C19.5523 46.4809 21.0732 47.4144 22.4625 46.4176L41.8548 32.5031C43.3613 31.4221 43.1242 29.2682 41.4988 29.2682H33.7549L38.1242 13.6344Z"
                                                    fill="#00AEBD"
                                                    style={{
                                                        fill: "#00AEBD;fill:color(display-p3 0.0000 0.6824 0.7412);fill-opacity:1",
                                                    }}
                                                />
                                            </svg>
                                            <h4 className="mt-1 pl-3 pb-1 text-xl font-semibold logoColor">
                                                Logo
                                            </h4>
                                        </div>

                                        <h3 className="mb-6 mt-6 pb-8 text-2xl font-semibold defaultTextColor">
                                            Who would you like to continue as ?
                                        </h3>
                                    </div>

                                    <form>
                                        <div className="pb-8">
                                            <div className="flex justify-center gap-10 ">
                                                <div className="relative mb-6">
                                                    <div>
                                                        <label className={`flex flex-row p-10 cursor-pointer ${loginType === 'mentor' ? "activeTypeBg" : "nonActiveTypeBg"}`}
                                                        >
                                                            <input type="radio" name="radio" checked={loginType === 'mentor'} onChange={() => setLoginType('mentor')} />
                                                            <span className="font-semibold text-base pl-2">Mentor</span>

                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="relative mb-6">
                                                    <div>
                                                        <label className={`flex flex-row p-10 cursor-pointer ${loginType === 'mentee' ? "activeTypeBg" : "nonActiveTypeBg"}`}
                                                        >
                                                            <input type="radio" name="radio" checked={loginType === 'mentee'} onChange={() => setLoginType('mentee')} />
                                                            <span className="font-semibold text-base pl-2">Mentee</span>

                                                        </label>
                                                    </div>
                                                </div>

                                            </div>

                                            {error && (
                                                <p className="error" role="alert">
                                                    Please Select type
                                                </p>
                                            )}
                                        </div>
                                        <div className="text-center lg:text-left flex justify-center">
                                            <button
                                                type="button"
                                                className="inline-block rounded px-7 pb-3 pt-3 text-sm font-medium text-white w-44"
                                                data-twe-ripple-init
                                                data-twe-ripple-color="light"
                                                style={{
                                                    background:
                                                        "linear-gradient(to right, #00AEBD, #1D5BBF)",
                                                }}
                                                onClick={handleSubmit}
                                            >
                                                Let get started
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
