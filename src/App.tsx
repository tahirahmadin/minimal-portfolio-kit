import { FaTwitter, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

function App() {
  return (
    <div className="bg-primary/90 backdrop-blur-lg text-white p-8 rounded-[2rem] max-w-6xl w-full shadow-2xl transition-all duration-300 hover:shadow-accent/20">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6 lg:mb-4">
            <h1 className="text-xl lg:text-2xl font-bold">Tahir Ahmad</h1>
            <button className="text-xl">≡</button>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 lg:mb-4">
            <span className="bg-gradient-to-r from-accent to-purple-300 bg-[length:200%] animate-[textGradient_3s_ease-in-out_infinite] bg-clip-text text-transparent">Full-Stack Developer</span><br />
            <span className="bg-gradient-to-r from-blue-400 to-accent bg-[length:200%] animate-[textGradient_3s_ease-in-out_infinite_1s] bg-clip-text text-transparent">Crafting Seamless</span><br />
            <span className="bg-gradient-to-r from-purple-300 to-blue-400 bg-[length:200%] animate-[textGradient_3s_ease-in-out_infinite_2s] bg-clip-text text-transparent">Digital Experiences</span>
          </h2>
          
          <a href="https://t.me/tahirahmadin" className="inline-block bg-gradient-to-r from-accent to-purple-500 hover:from-purple-500 hover:to-accent text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl mb-6 lg:mb-8 text-sm lg:text-base transition-all duration-300 hover:scale-105">
            Connect with Me 👋
          </a>
          
          <div className="grid grid-cols-3 gap-2 lg:gap-4 mb-6 lg:mb-8">
            <div className="bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-700 p-4 lg:p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg animate-[float_4s_ease-in-out_infinite] backdrop-blur-sm">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">4+</div>
              <div className="text-sm text-white font-medium">Years of Experience</div>
            </div>
            <div className="bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 p-4 lg:p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg animate-[float_4s_ease-in-out_infinite_0.2s] backdrop-blur-sm">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-sm text-white font-medium">Hackathon Wins</div>
            </div>
            <div className="bg-gradient-to-br from-rose-400 via-rose-500 to-rose-700 p-4 lg:p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg animate-[float_4s_ease-in-out_infinite_0.4s] backdrop-blur-sm">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">8000+</div>
              <div className="text-sm text-white font-medium">Subscribers</div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg lg:text-xl font-bold">Hackathon Portfolio</h3>
              <a href="https://devfolio.co/projects/firstcrypto-a-finance-app-for-millennials-8130" className="text-gray-400 hover:text-white transition-colors hover:scale-105 transform duration-300">See All</a>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
              <a 
                href="https://devfolio.co/projects/firstcrypto-a-finance-app-for-millennials-8130"
                className="bg-gray-800 rounded-xl aspect-video overflow-hidden hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <img 
                  src="https://assets.devfolio.co/hackathons/becdb269b9ea4e708c7d96329563e478/projects/20d2f90eecc7412a85ad1b3a9a19fb41/3855aa65-226c-4c53-a356-494124dda9ec.png"
                  alt="FirstCrypto - A Finance App for Millennials"
                  className="w-full h-full object-cover"
                />
              </a>
                 <a 
                href="https://ethglobal.com/showcase/amca-4wo1i"
                className="bg-gray-800 rounded-xl aspect-video overflow-hidden hover:opacity-90 transition-opacity"
              >
                <img 
                  src="https://ethglobal.b-cdn.net/projects/4wo1i/screenshots/utn0b/default.jpg"
                  alt="Amca - Beat inflation"
                  className="w-full h-full object-cover"
                />
              </a>
              <a 
                href="https://devfolio.co/projects/flow-bd3f"
                className="bg-gray-800 rounded-xl aspect-video overflow-hidden hover:opacity-90 transition-opacity"
              >
                <img 
                  src="https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fd64ead180bfc42bda8cee408f6d39b80%2Fprojects%2F46fbf50ba3164db58c5090ba2b1279ea%2F5cbf8b92-cd04-4b20-956d-c8598cb23c1d.png&w=1440&q=75"
                  alt="Flow3 - Achieve your Web3 goals with No code."
                  className="w-full h-full object-cover"
                />
              </a>
           
            </div>
          </div>
          
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg lg:text-xl font-bold">Experience</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg animate-[float_4s_ease-in-out_infinite]">
                <div className="flex justify-center mb-4">
                  <img 
                  src="https://www.gobbl.io/gobbl_logo.svg" 
                  alt="Curelink"
                  className="w-16 h-16 rounded-lg"
                  />
                </div>
                <h4 className="text-white font-semibold mb-1 text-center">GobblAI</h4>
                <p className="text-white text-sm mb-2 text-center">Senior Frontend Engineer</p>
                <p className="text-gray-400 text-xs text-center">Jan 2022 - Present</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg animate-[float_4s_ease-in-out_infinite_0.2s]">
                <div className="flex justify-center mb-4">
                  <img 
                  src="https://storage.top100token.com/images/c760e859-a6ef-4042-b4a6-8bb7d28d13ac.webp" 
                  alt="PolkaBridge"
                  className="w-18 h-16 rounded-lg"
                  />
                </div>
                <h4 className="text-white font-semibold mb-1 text-center">PolkaBridge </h4>
                <p className="text-white text-sm mb-2 text-center">Frontend Engineer</p>
                <p className="text-gray-400 text-xs text-center">Feb 2021 - Dec 2021</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg animate-[float_4s_ease-in-out_infinite_0.4s]">
                <div className="flex justify-center mb-4">
                  <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMvPDTVLcrylWm-JLJ1zbpbuSHqTQ5Ofo8Eg&s" 
                  alt="Rizer"
                  className="w-22 h-16 rounded-lg"
                  />
                </div>
                <h4 className="text-white font-semibold mb-1 text-center">Rizer</h4>
                <p className="text-white text-sm mb-2 text-center">Frontend Developer</p>
                <p className="text-gray-400 text-xs text-center">Jan 2020 - Oct 2020</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="w-full lg:w-96">
          <div className="bg-accent rounded-xl overflow-hidden mb-4">
            <img 
              src="https://pbs.twimg.com/profile_images/1820592343080206336/4qbhDgMI_400x400.jpg" 
              alt="Profile"
              className="w-full h-48 lg:h-auto aspect-square object-cover"
            />
          </div>
          
          <div className="bg-gray-900 rounded-xl p-4 mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">Name :</span>
              <span>Tahir Ahmad</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Based in :</span>
              <span>New Delhi</span>
            </div>
          </div>
          
          <div className="flex gap-2 mb-4">
            <a href="https://www.linkedin.com/in/tahirahmadin/" className="bg-blue-600 p-1.5 lg:p-2 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-lg"><FaLinkedin size={16} className="lg:w-5 lg:h-5" /></a>
            <a href="https://github.com/tahirahmadin" className="bg-gray-700 p-1.5 lg:p-2 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-lg"><FaGithub size={16} className="lg:w-5 lg:h-5" /></a>
            <a href="https://x.com/tahirahmadin" className="bg-blue-400 p-1.5 lg:p-2 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-lg"><FaTwitter size={16} className="lg:w-5 lg:h-5" /></a>
            <a href="https://www.youtube.com/@tahirahmad.crypto" className="bg-red-600 p-1.5 lg:p-2 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-lg"><FaYoutube size={16} className="lg:w-5 lg:h-5" /></a>
          </div>
          
          <div className="flex gap-4 mb-4">
            <button className="flex-1 bg-gray-800 py-2 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-700 hover:shadow-lg">About</button>
            <a 
              href="https://drive.google.com/file/d/1b2Y1rqHeak-SS0TKCeguZFaG29MIa1Zi/view"
              target="_blank"
              className="flex-1 bg-gray-800 py-2 rounded-xl font-semibold text-center transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
            >
             Resume
            </a>
          </div>
          
          <p className="text-gray-400 text-sm leading-relaxed">
         An experienced DApps developer with a strong background in Frontend Engineering specializes in creating intuitive UI/UX for decentralized applications, boasting a portfolio of over 10 successful DeFi and NFT projects. 
          </p><br/>
              <p className="text-gray-400 text-sm leading-relaxed">
          Recognized at EthGlobal Hackathons in Istanbul and Bangalore, they combine technical expertise with entrepreneurial insights gained from founding two startups, aiming to enhance user experiences in the DeFi ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;