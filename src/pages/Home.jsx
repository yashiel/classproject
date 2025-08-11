/*
 * File: /Users/yashi/Desktop/classproject/src/pages/Home.jsx
 * Project: /Users/yashi/Desktop/classproject
 * Created Date: Friday August 8th 2025
 * Author: Yashi EL
 * -----
 * Last Modified: Saturday August 9th 2025 12:40:57 am
 * Modified By: the developer formerly known as Yashi EL at <hi@yashiel.com>
 * -----
 * Copyright (c) 2025 Yashi Digital Agency
 * -----
 * HISTORY:
 */



const Home = () => {
    return (
			<>
			<section className="relative pt-12 overflow-hidden sm:pt-16 min-h-screen">
				{/* Creative Background Effects */}
				<div className="absolute inset-0 overflow-hidden">
					{/* Animated Gradient Background */}
					<div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 animate-pulse"></div>
					
					{/* Floating Shapes */}
					<div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
					<div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
					<div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
					<div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}></div>
					
					{/* Geometric Shapes */}
					<div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 transform rotate-45 opacity-10 animate-spin" style={{ animationDuration: '20s' }}></div>
					<div className="absolute top-3/4 right-1/4 w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 transform rotate-45 opacity-10 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
					
					{/* Particle Effect */}
					<div className="absolute inset-0">
						{[...Array(20)].map((_, i) => (
							<div
								key={i}
								className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-ping"
								style={{
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
									animationDelay: `${Math.random() * 2}s`,
									animationDuration: `${2 + Math.random() * 2}s`
								}}
							></div>
						))}
					</div>
					
					{/* Wave Effect */}
					<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
					
					{/* Mesh Gradient Overlay */}
					<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
				</div>

				<div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl z-10">
					<div className="max-w-4xl mx-auto text-center">
						<p className="text-sm font-normal tracking-widest uppercase">
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Discover Amazing Artists</span>
						</p>
						<h1 className="mt-8 text-4xl font-normal text-black sm:text-5xl lg:text-6xl xl:text-7xl">
							Where Art Meets Opportunity
						</h1>
						<p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
							Connect with extraordinary artists from around the world. Discover unique talents, explore stunning artworks, and find your next masterpiece in our curated artist directory.
						</p>

						<div className="flex flex-col items-center justify-center px-8 mt-12 space-y-5 sm:space-y-0 sm:px-0 sm:space-x-5 sm:flex-row">
							<div className="relative inline-flex items-center justify-center w-full sm:w-auto group">
								<div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
								<a href="/artists" title="" className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full sm:w-auto" role="button"> 
									Explore Artists 
								</a>
							</div>

							<a href="/events" title="" className="inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white transition-all duration-200 bg-black border border-gray-600 rounded-full sm:w-auto hover:border-white" role="button"> 
								View Events 
							</a>
						</div>

						{/* Feature Highlights */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
							<div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
								<div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
									<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
									</svg>
								</div>
								<h3 className="text-xl font-semibold text-gray-800 mb-2">Discover Talent</h3>
								<p className="text-gray-600">Find amazing artists from every corner of the globe, each with their unique style and story.</p>
							</div>
							
							<div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
								<div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
									<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
								<h3 className="text-xl font-semibold text-gray-800 mb-2">Live Events</h3>
								<p className="text-gray-600">Experience art in real-time with our curated events, exhibitions, and live auctions.</p>
							</div>
							
							<div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
								<div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
									<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
									</svg>
								</div>
								<h3 className="text-xl font-semibold text-gray-800 mb-2">Exclusive Products</h3>
								<p className="text-gray-600">Get your hands on limited edition artworks and exclusive artist merchandise.</p>
							</div>
						</div>
					</div>

					<div className="relative mt-12 -mb-4 sm:-mb-10 lg:-mb-12 sm:mt-16 lg:mt-24">
						<div className="absolute top-0 transform -translate-x-1/2 left-1/2">
							<svg
								className="blur-[64px]"
								width="645"
								height="413"
								viewBox="0 0 645 413"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								>
								<path
									d="M181.316 218.778C86.2529 123.715 -63.7045 134.94 31.3589 39.8762C126.422 -55.1873 528.427 41.1918 623.49 136.255C718.554 231.319 470.678 289.068 375.614 384.131C280.551 479.195 276.38 313.842 181.316 218.778Z"
									fill="url(#d)"
								/>
								<defs>
									<linearGradient
									id="d"
									x1="665.741"
									y1="178.506"
									x2="296.286"
									y2="474.62"
									gradientUnits="userSpaceOnUse"
									>
									<stop offset="0%" style={{ stopColor: "var(--color-cyan-500)" }} />
									<stop offset="100%" style={{ stopColor: "var(--color-purple-500)" }} />
									</linearGradient>
								</defs>
							</svg>
						</div>

						<div className="absolute inset-0">
							<img className="object-cover w-full h-full opacity-50" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt="" />
						</div>

						{/* <img className="relative w-full max-w-5xl mx-auto" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/4/dashboard-mockup.png" alt="" /> */}
					</div>
				</div>
			</section>
			
			</>
		);
};

export default Home;