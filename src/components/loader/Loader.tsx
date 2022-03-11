import React from 'react'
// import { Loader } from 'rsuite';
import {Oval, BallTriangle} from "react-loader-spinner"
// import 'rsuite/dist/rsuite.min.css';
import './loader.css'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

interface ILoaderComponentProps {
    text: string,
    type?: 'Oval' | 'Grid' | 'Rings' | 'TailSpin' | 'ThreeDots',
    className?: string
}

export const LoaderComponent: React.FC<ILoaderComponentProps> = ({text='Загрузка...', type, className = ''}) => {
    return (
        <div className={`loader-container ${className}`}>
             {/* <Loader content="Loading..." size="md" center backdrop inverse /> */}
             {/* <Loader
                type="Oval"
                // type="Grid"
                // type="Rings"
                // type="TailSpin"
                // type="ThreeDots"
                color="#191F28"
                height={50}
                width={50}
                // radius={10}
                // timeout={3000} //3 secs
            /> */}
            {/* <Oval
                ariaLabel="loading-indicator"
                height={100}
                width={100}
                strokeWidth={5}
                strokeWidthSecondary={1}
                color="blue"
                secondaryColor="white"
            /> */}
            <BallTriangle
                height="100"
                width="100"
                color="grey"
                ariaLabel="loading-indicator"
            />
            <p className='loader-text'>{text}</p> 
        </div>
    )
}

// const MyLoader = (props) => (
//   <ContentLoader 
//     speed={1}
//     width={600}
//     height={460}
//     viewBox="0 0 600 460"
//     backgroundColor="#e0e0e0"
//     foregroundColor="#ecebeb"
//     {...props}
//   >
//     <circle cx="403" cy="549" r="15" /> 
//     <rect x="485" y="469" rx="0" ry="0" width="60" height="106" /> 
//     <rect x="196" y="165" rx="0" ry="0" width="0" height="1" /> 
//     <rect x="19" y="68" rx="0" ry="0" width="560" height="42" /> 
//     <rect x="19" y="119" rx="0" ry="0" width="560" height="62" /> 
//     <rect x="18" y="31" rx="0" ry="0" width="560" height="30" />
//   </ContentLoader>
// )

// export default MyLoader



export const AnimatedBackgroundLoader = ({ text='Загрузка...', height=200, mb=0 }) => (
    <div className='animated-background-loader' style={{ minHeight: height, marginBottom: mb }}>
        {text}
        {/* <LoaderComponent text='Загрузка акта выполненных работ...'/>  */}
    </div> 
)


