import React from 'react';
import Lottie from 'lottie-react';
import sandyload from '../../assets/animation/Sandy Loading.json';

const Loading = () => {
    return (
        <div className="flex items-center justify-center w-full h-full py-20">
            <Lottie 
                animationData={sandyload} 
                loop={true}
                className="w-40 h-40"  // Adjust size here
            />
        </div>
    );
};

export default Loading;
