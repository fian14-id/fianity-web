// const LoadingScreen = () => {
    

//     const startLoader = () => {
//         let counterElement: HTMLDivElement = document.querySelector(".counter");
//         let currentCount: number = 0;

//         function updateCounter() {
//             if (currentCount === 100) {
//                 return;
//             }
//             currentCount += Math.floor(Math.random() * 10) + 1;

//             if (currentCount > 100) {
//                 currentCount = 100;
//             }

//             counterElement.textContent = currentCount;

//             let delay = Math.floor(Math.random() * 200) + 50;
//             setTimeout(updateCounter, delay);
//         }
//     }
//     return (
//         <>
//             <h1 className="counter">0</h1>
//             <div className="overlay">
//                 <div className="bar"></div>
//                 <div className="bar"></div>
//                 <div className="bar"></div>
//                 <div className="bar"></div>
//                 <div className="bar"></div>
//                 <div className="bar"></div>
//                 <div className="bar"></div>
//                 <div className="bar"></div>
//                 <div className="bar"></div>
//                 <div className="bar"></div>
//                 <div className="bar"></div>
//                 <div className="bar"></div>
//                 <div className="bar"></div>
//                 <div className="bar"></div>
//             </div>
//         </>
//     )
// }

// export default LoadingScreen;