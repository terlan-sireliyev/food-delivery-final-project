import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import Image from "next/image";

const FooterComp = () => {
  return (
    <>
      <div className="bg-user-bgBack w-full mt-6">
        <div>
          <div className="flex justify-around items-center">
            <div className="w-1/2 max-md:w-full flex flex-col justify-center mt-12   ">
              <div className="ml-[150px] flex max-md:items-center max-md:ml-[0px] max-md:justify-center flex-col">
                <Image
                  src="/images/logo.svg"
                  width={100}
                  height={100}
                  className="mb-4"
                  alt="Picture of the author"
                />
                <p className=" text-products  ml-2 text-user-inSlider w-2/3  max-md:w-1/2 max-md:text-center max-md:mb-4">
                  Lorem ipsum is placeholder text commonly used in the graphic
                </p>
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
            <div className="w-1/2 flex justify-evenly max-md:hidden ">
              <div className="text-admin-colorLogin -mt-12">
                <h1 className="font-bold text-labelOpenMenu">Popular</h1>
                <Link
                  href="login"
                  className="text-productSize text-user-inSlider"
                >
                  <p>Programming</p>
                </Link>
                <Link
                  href="login"
                  className="text-productSize text-user-inSlider"
                >
                  <p>Books for children</p>
                </Link>
                <Link
                  href="login"
                  className="text-productSize text-user-inSlider"
                >
                  <p>Psychology</p>
                </Link>
                <Link
                  href="login"
                  className="text-productSize text-user-inSlider"
                >
                  <p>Business</p>
                </Link>
              </div>
              <div className="text-admin-colorLogin -mt-12">
                <h1 className="font-bold text-labelOpenMenu">Cash</h1>
                <Link
                  href="login"
                  className="text-productSize text-user-inSlider"
                >
                  <p>Delivery</p>
                </Link>
                <Link
                  href="login"
                  className="text-productSize text-user-inSlider"
                >
                  <p>Payment</p>
                </Link>
                <Link
                  href="login"
                  className="text-productSize text-user-inSlider"
                >
                  <p>About the store</p>
                </Link>
              </div>
              <div className="text-admin-colorLogin -mt-12">
                <h1 className="font-bold text-labelOpenMenu">Help</h1>
                <Link
                  href="login"
                  className="text-productSize text-user-inSlider"
                >
                  <p>Contacts</p>
                </Link>
                <Link
                  href="login"
                  className="text-productSize text-user-inSlider"
                >
                  <p>Purchase returns</p>
                </Link>
                <Link
                  href="login"
                  className="text-productSize text-user-inSlider"
                >
                  <p>Buyer help</p>
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
