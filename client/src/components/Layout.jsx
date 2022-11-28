import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import image from "../assets/images/logo.png";

const Layout = () => {

  const {user} = useAuth()
  console.log(user);

  return (
    <div className="py-20">
      <nav
            class="flex justify-between md:justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full px-10 fixed top-0 left-0 right-0 z-10  md:px-3">
            <div class="flex items-center">
                <Link to ="/" class="cursor-pointer">
                    <h3 class="text-2xl font-medium text-blue-500">
                        <img
                            class="h-10"
                            src={image}
                            alt="Store Logo"
                            width={120} 
                            />
                    </h3>
                </Link>
            </div>

            <div
                class="items-center md:space-x-8 justify-center justify-items-start md:justify-items-center md:flex md:pt-2 w-full left-0 top-16 px-5 md:px-10 py-3 md:py-0 border-t md:border-t-0">
                <Link to = "/"
                    class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                    Home
                </Link>
                <Link to = "/form"
                    class="flex text-gray-600 cursor-pointer transition-colors duration-300 hover:text-blue-600">
                    Form
                </Link>

                <Link to = "/notification"
                    class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                    Notification
                </Link>

                <a href="https://www.jiit.ac.in/"
                    class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                    About Us
                </a>
            </div>

            <div class="flex items-center space-x-5  md:flex">
                <div
                    class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                    
                    {user.role.firstName}
                    
                </div>
                <Link to ="/setting"
                    class="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold hover:text-blue-600">
                    Settings
                </Link>
            </div>
        </nav>
        <Outlet />
    </div>
  )
};


export default Layout;


// import { Outlet, Link } from "react-router-dom";
// import { useAuth } from "../context/authContext";
// // import { Highlight } from "@material-ui/icons";

// const Layout = () => {

//   const {user} = useAuth()
//   console.log(user);

//   return (
//     <div className="py-17">
    
//       <nav>
//         <ul className="flex py-4 bg-amber-400">
//           <li className="px-2">
//             <Link to="/"><h1 className="text-xl">JIIT-NOW</h1></Link>
//           </li>
//           <li className="px-2 text-xl" style={{paddingLeft: "1420px"}}>
//             <Link to="/"><h1>Home</h1></Link>
//           </li>
//           <li className="px-2 text-xl">
//             <Link to="/form">Form</Link>
//           </li>
//           <li className="px-2 text-xl">
//             <Link to="/notification">Notification</Link>
//           </li>
//           <li className="px-2 text-xl">
//             <Link to = "/setting">Hello {user.role.firstName}</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     <link rel="preconnect" href="https://fonts.googleapis.com" />
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
// <link
//     href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;1,100;1,200&display=swap"
//     rel="stylesheet" />

// {/* <style>
//     section {
//         font-family: "Poppins", sans-serif;
//     }
// </style> */}

// <main class="flex flex-col items-center justify-center mt-32">
//     <header class="container">
//         <nav
//             class="flex justify-between md:justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full px-10 fixed top-0 left-0 right-0 z-10 px-8 md:px-3">
//             <div class="flex items-center">
// \                <a class="cursor-pointer">
//                     <h3 class="text-2xl font-medium text-blue-500">
//                         <img
//                             class="h-10"
//                             src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
//                             alt="Store Logo" />
//                     </h3>
//                 </a>
//             </div>

//             <div
//                 class="items-center md:space-x-8 justify-center justify-items-start md:justify-items-center md:flex md:pt-2 w-full left-0 top-16 px-5 md:px-10 py-3 md:py-0 border-t md:border-t-0">
//                 <a
//                     class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
//                     Home
//                 </a>

//                 <a
//                     class="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold text-blue-600">
//                     Themes
//                 </a>

//                 <a
//                     class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
//                     Developers
//                 </a>

//                 <a
//                     class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
//                     Pricing
//                 </a>

//                 <a
//                     class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
//                     Blog
//                 </a>

//                 <a
//                     class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
//                     About Us
//                 </a>
//             </div>

//             <div class="flex items-center space-x-5 hidden md:flex">
//                 <a
//                     class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
//                     Register
//                 </a>

//                 <a
//                     class="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold text-blue-600">
                    

//                     Login
//                 </a>
//             </div>

//             <button
//                 class="w-10 h-10 md:hidden justify-self-end rounded-full hover:bg-gray-100">
                
//             </button>
//         </nav>
//     </header>

//     <section
//         class="flex flex-wrap items-center -mx-3 font-sans px-4 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md pb-20">
//         <div class="px-3 w-full lg:w-2/5">
//             <div
//                 class="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left">
//                 <h2 class="mb-4 text-3xl font-bold text-left lg:text-5xl">
//                     Exclusive Agency For

//                     <span class="text-5xl text-blue-500 leading-relaxeds"
//                         >Technology
//                     </span>

//                     Provide Solution
//                 </h2>

//                 <p
//                     class="visible mx-0 mt-3 mb-0 text-sm leading-relaxed text-left text-slate-400">
//                     Helping you maximize operations management with digitization
//                 </p>
//             </div>

//             <div class="text-center lg:text-left">
//                 <a
//                     class="block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-blue-500 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block"
//                     >Key Features</a
//                 >

//                 <a
//                     class="block visible py-4 px-8 text-xs font-semibold leading-none bg-white rounded border border-solid cursor-pointer sm:inline-block border-slate-200 text-slate-500"
//                     >How We Work?</a
//                 >
//             </div>
//         </div>

//         <div class="px-3 mb-12 w-full lg:mb-0 lg:w-3/5">
//             <div class="flex justify-center items-center">
                
//             </div>
//         </div>
//     </section>

//     <section
//         class="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center flex justify-center items-center"
//         style="
//             background-image: url(https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&fit=crop&w=880&q=80);
//         ">
//         <h1 class="text-white text-5xl font-semibold mt-20 mb-10">
//             This is Parallax Effect
//         </h1>

//         <span class="text-center font-bold my-20 text-white/90">
//             <a
//                 href="https://egoistdeveloper.github.io/twcss-to-sass-playground/"
//                 target="_blank"
//                 class="text-white/90 hover:text-white">
//                 Convetert to SASS
//             </a>

//             <hr class="my-4" />

//             <a
//                 href="https://unsplash.com/photos/8Pm_A-OHJGg"
//                 target="_blank"
//                 class="text-white/90 hover:text-white">
//                 Image Source
//             </a>

//             <hr class="my-4" />

//             <p>
//                 <a
//                     href="https://github.com/EgoistDeveloper/my-tailwind-components/blob/main/src/templates/parallax-landing-page.html"
//                     target="_blank"
//                     class="text-white/90 hover:text-white">
//                     Source Code
//                 </a>
//                 |
//                 <a
//                     href="https://egoistdeveloper.github.io/my-tailwind-components/./src/templates/parallax-landing-page.html"
//                     target="_blank"
//                     class="text-white/90 hover:text-white">
//                     Full Preview
//                 </a>
//             </p>
//         </span>
//     </section>

//     <section class="p-20 space-y-8">
//         <h1 class="text-4xl text-center my-20">Tempor sit labore nostrud</h1>

//         <p>
//             Exercitation non Lorem exercitation tempor amet ad esse velit. Anim
//             deserunt id nulla quis ex magna culpa exercitation. Mollit consequat
//             enim eiusmod cupidatat commodo eiusmod nulla. Id quis amet incididunt
//             cillum dolore consectetur nulla incididunt laborum excepteur
//             consectetur consectetur sunt tempor. Minim fugiat sint sunt ad elit
//             laboris est sit est laboris labore do velit. Cillum aliquip pariatur
//             deserunt eiusmod. Consequat irure nulla adipisicing deserunt culpa.
//             Veniam enim deserunt sint consequat labore. Enim ullamco ea aute duis
//             et nostrud voluptate fugiat consectetur et velit cillum anim dolore.
//             In exercitation proident proident nostrud voluptate. Fugiat elit esse
//             labore pariatur ex. Ex labore esse voluptate nisi in. Ad anim deserunt
//             reprehenderit est. Aliquip pariatur nulla dolor amet quis aliqua sit
//             nisi officia enim velit. Ad enim eu dolor quis ipsum. Nulla amet
//             consectetur adipisicing ullamco qui tempor dolor excepteur dolore anim
//             pariatur quis laboris consequat. Consectetur ullamco consectetur minim
//             eiusmod quis veniam esse consectetur anim nostrud est pariatur
//             laborum. Mollit tempor minim amet esse. Lorem officia consequat
//             eiusmod sunt. Proident occaecat velit et consequat irure est cupidatat
//             tempor ullamco. Aliquip est pariatur ea ut qui ad sit dolor laboris
//             adipisicing officia eiusmod sit. Proident Lorem ex cillum sint
//             cupidatat amet nulla veniam laborum velit pariatur. Fugiat excepteur
//             culpa sunt est anim sunt. Ea voluptate non do proident sunt ad cillum
//             enim esse.
//         </p>

//         <p>
//             Incididunt eu pariatur laborum reprehenderit duis ex cillum fugiat.
//             Occaecat tempor commodo officia esse reprehenderit commodo. Irure nisi
//             culpa anim velit esse do esse veniam dolore fugiat. Non anim elit ad
//             ad esse veniam dolore labore consectetur nulla dolor occaecat quis
//             tempor. Ad do exercitation cillum duis consequat. Ea anim aute elit
//             velit duis quis. Anim sint ut occaecat officia id exercitation ea
//             incididunt exercitation sint ex. Reprehenderit ut qui eiusmod
//             cupidatat incididunt ad reprehenderit culpa tempor quis. Elit eu dolor
//             anim tempor eu fugiat voluptate dolor aliqua sint ex proident ullamco.
//             Labore deserunt velit quis cupidatat aliquip elit do labore ut.
//             Laborum dolore incididunt officia esse reprehenderit pariatur ullamco
//             consectetur tempor officia. Dolor culpa irure enim aute ex non veniam
//             eiusmod ipsum elit est sit mollit dolor. Est ad anim pariatur
//             consequat ad sit nisi.
//         </p>

//         <p>
//             Ipsum ea ad fugiat incididunt ea sit laborum cupidatat in ullamco
//             ullamco fugiat et id. Sit commodo enim enim veniam do. Ad id ad tempor
//             deserunt cupidatat reprehenderit ullamco officia excepteur culpa.
//             Officia amet in do voluptate exercitation pariatur officia et sit.
//             Adipisicing deserunt do aliquip ad id elit sint voluptate sit anim
//             nulla pariatur dolore. Lorem do commodo aute veniam deserunt magna
//             commodo cillum magna veniam. Ea amet nostrud commodo nisi adipisicing
//             cillum commodo. Nostrud aliquip cupidatat veniam culpa aute officia
//             commodo velit. Laborum quis aute nulla amet officia esse proident sunt
//             irure dolor fugiat incididunt occaecat. Commodo esse eiusmod fugiat eu
//             enim nisi sit id ut adipisicing. Enim nisi mollit ea aliqua nisi qui
//             ullamco eu velit et ullamco. Magna eiusmod eiusmod culpa proident
//             minim laboris fugiat enim laborum quis mollit minim do nisi. Elit
//             irure incididunt duis ullamco exercitation nulla fugiat. Eu ullamco
//             aliquip aute consectetur excepteur consequat. Non nostrud officia sint
//             enim et ad sunt amet pariatur deserunt enim reprehenderit. Aute Lorem
//             adipisicing laborum labore labore tempor officia officia reprehenderit
//             incididunt enim officia laborum. Proident eu irure occaecat ipsum elit
//             elit anim eu aute commodo ullamco reprehenderit incididunt elit.
//             Mollit voluptate eiusmod ullamco fugiat ex enim in fugiat et
//             consectetur duis do. Et aliqua ad labore labore ea ipsum nostrud
//             veniam et reprehenderit. Sint ad sit voluptate consequat cillum do
//             fugiat Lorem. Pariatur ad ad reprehenderit cupidatat nulla ipsum
//             voluptate. Dolore pariatur ea laboris est excepteur.
//         </p>
//     </section>
// </main>

// <footer class="bg-gray-800 pt-10 sm:mt-10 pt-10 w-full">
//     <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
//         <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
//             <div class="text-xs uppercase text-gray-400 font-medium mb-6">
//                 Getting Started
//             </div>

//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 Installation
//             </a>
//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 Release Notes
//             </a>
//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 Upgrade Guide
//             </a>
//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 Using with Preprocessors
//             </a>
//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 Optimizing for Production
//             </a>
//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 Browser Support
//             </a>
//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 IntelliSense
//             </a>
//         </div>

//         <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
//             <div class="text-xs uppercase text-gray-400 font-medium mb-6">
//                 Core Concepts
//             </div>

//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 Utility-First
//             </a>
//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 Responsive Design
//             </a>
//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 Hover, Focus, & Other States
//             </a>
//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 Dark Mode
//             </a>
//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 Adding Base Styles
//             </a>
//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 Extracting Components
//             </a>
//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 Adding New Utilities
//             </a>
//         </div>

//         <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
//             <div class="text-xs uppercase text-gray-400 font-medium mb-6">
//                 Customization
//             </div>

//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 Configuration
//             </a>
//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 Theme Configuration
//             </a>
//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 Breakpoints
//             </a>
//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 Customizing Colors
//             </a>
//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 Customizing Spacing
//             </a>
//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 Configuring Variants
//             </a>
//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 Plugins
//             </a>
//         </div>

//         <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
//             <div class="text-xs uppercase text-gray-400 font-medium mb-6">
//                 Community
//             </div>
//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 GitHub
//             </a>
//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 Discord
//             </a>
//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 Twitter
//             </a>
//             <a
//                 href="#"
//                 class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
//                 YouTube
//             </a>
//         </div>
//     </div>
//     <div class="pt-2">
//         <div
//             class="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl">
//             <div class="mt-2">© Copyright 1998-year. All Rights Reserved.</div>
//             <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
//                 <a href="#" class="w-6 mx-1">
//                     <i class="uil uil-facebook-f"></i>
//                 </a>
//                 <a href="#" class="w-6 mx-1">
//                     <i class="uil uil-twitter-alt"></i>
//                 </a>
//                 <a href="#" class="w-6 mx-1">
//                     <i class="uil uil-youtube"></i>
//                 </a>
//                 <a href="#" class="w-6 mx-1">
//                     <i class="uil uil-linkedin"></i>
//                 </a>
//                 <a href="#" class="w-6 mx-1">
//                     <i class="uil uil-instagram"></i>
//                 </a>
//             </div>
//         </div>
//     </div>
// </footer>
// </div>
//   )
// };

// export default Layout;