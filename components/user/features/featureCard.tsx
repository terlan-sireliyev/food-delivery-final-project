import React, { useEffect } from "react";
// import img from '../../../public/images/userImg/Rectangle1.svg'
const FeaturesCardComp = ({title,img,description}:any) => {
    
    return (
        <>
            <div className="border-2 border-admin-inputBorder  ">
                <div className="p-5">
                    <div className="">
                        <img
                            src={img}
                            alt="Have your error"
                            className='w-full'
                        />
                    </div>
                    <h1 className="font-bold text-center">
                        {title}
                    </h1>
                    <p className="text-center text-admin-inputBorder">{description}</p>
                    {/* <button onClick={}></button> */}
                </div>
            </div>
        </>
    );
};

export default FeaturesCardComp;
