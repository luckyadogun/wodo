

const Fonts = {
    home : {
        main: { fontFamily: 'Libre Baskerville, serif'},
        body: { fontFamily: 'Antic Slab, serif' }
    } 
}


export const Button = ({fontStyle, className, text}) => {
    return (
        <button 
            style={fontStyle}
            className={className}>
            {text}
        </button>
    )
}


// export const defaultOptions = ({ animationData }) => {
//     return (
//         {
//             loop: true,
//             autoplay: true,
//             animationData: animationData,
//             rendererSettings: {
//                 preserveAspectRatio: "xMidYMid slice"
//             }
//         }
//     )
// }


export default Fonts;
