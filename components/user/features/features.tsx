import React from "react";
import FeaturesCardComp from "./featureCard";
const FeaturesComp = () => {
    return (
        <>
            <div className="grid grid-cols-6 gap-6 ">
                <FeaturesCardComp title='Disctount Bpucher' description='Lorem ipsum is placeholder commonly used in the graphic' img='../images/userImg/features/img.svg'/>
                <FeaturesCardComp title='Fresh healthy Food' description='Lorem ipsum is placeholder commonly used in the graphic' img='../images/userImg/features/img2.svg'/>
                <FeaturesCardComp title='Fast Home Delivery' description='Lorem ipsum is placeholder commonly used in the graphic' img='../images/userImg/features/img3.svg'/>          
            </div>
        </>
    );
};

export default FeaturesComp;
