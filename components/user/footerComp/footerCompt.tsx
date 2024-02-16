import React from "react";
// import style from "./slider.module.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from "next/link";
const FooterComp = () => {
    return (
        <>
            <div className="bg-user-bgBack   w-full">
                <div>
                    <div className="flex justify-around items-center">
                        <div className="w-1/2 max-md:w-full  flex flex-col justify-center mt-12   ">
                            <div className="ml-[150px] flex  max-md:items-center max-md:ml-[0px] max-md:justify-center flex-col">
                                <img
                                    src="../images/logo.svg"
                                    alt="Have your error"
                                    className="w-24 max-md:w-32 mb-4 "
                                />
                                <p className=" text-products text-admin-colorLogin ml-2 text-user-inSlider w-2/3    max-md:w-1/2 max-md:text-center max-md:mb-4">Lorem ipsum is placeholder text commonly used in the graphic, </p>
                                <div className="text-admin-colorLogin ml-2 mt-4 flex">
                                    <div className="rounded-iconsRadius border border-admin-colorLogin p-2 mb-4 flex justify-center items-center mr-2  ">
                                        <FacebookIcon className="bg-user-iconsFooterBG rounded-iconsRadius p-2" />
                                    </div>
                                    <div className="rounded-iconsRadius border border-admin-colorLogin p-2 mb-4 flex justify-center items-center mr-2 bg-user-iconsFooterBG">
                                        <InstagramIcon />
                                    </div>
                                    <div className="rounded-iconsRadius border border-admin-colorLogin p-2 mb-4 flex justify-center items-center mr-2">
                                        <TwitterIcon className=" bg-user-iconsFooterBG rounded-iconsRadius p-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2   flex justify-around justify-evenly max-md:hidden ">
                            <div className="text-admin-colorLogin -mt-12">
                                <h1 className="font-bold text-labelOpenMenu">Popular</h1>
                                <Link href="login" className="text-productSize text-user-inSlider">
                                    <p>Programming</p>
                                </Link>
                                <Link href="login" className="text-productSize text-user-inSlider">
                                    <p>Books for children</p>
                                </Link>
                                <Link href="login" className="text-productSize text-user-inSlider">
                                    <p>Psychology</p>
                                </Link>
                                <Link href="login" className="text-productSize text-user-inSlider">
                                    <p>Business</p>
                                </Link>
                            </div>
                            <div className="text-admin-colorLogin -mt-12">
                                <h1 className="font-bold text-labelOpenMenu">Popular</h1>
                                <Link href="login" className="text-productSize text-user-inSlider">
                                    <p>Programming</p>
                                </Link>
                                <Link href="login" className="text-productSize text-user-inSlider">
                                    <p>Books for children</p>
                                </Link>
                                <Link href="login" className="text-productSize text-user-inSlider">
                                    <p>Psychology</p>
                                </Link>
                                <Link href="login" className="text-productSize text-user-inSlider">
                                    <p>Business</p>
                                </Link>
                            </div>
                            <div className="text-admin-colorLogin -mt-12">
                                <h1 className="font-bold text-labelOpenMenu">Popular</h1>
                                <Link href="login" className="text-productSize text-user-inSlider">
                                    <p>Programming</p>
                                </Link>
                                <Link href="login" className="text-productSize text-user-inSlider">
                                    <p>Books for children</p>
                                </Link>
                                <Link href="login" className="text-productSize text-user-inSlider">
                                    <p>Psychology</p>
                                </Link>
                                <Link href="login" className="text-productSize text-user-inSlider">
                                    <p>Business</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default FooterComp;
