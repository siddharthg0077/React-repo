import React from 'react'

const NavBar = () => {
  const [open, setOpen] = React.useState(false)
  return (
    
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white transition-all">

      <a href="Home">
<a href="Home" className="flex items-center gap-2">
  <img
    className="h-9"
    src="data:image/png;base64,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"
    alt="Cake Logo"
  />
  <span className="text-lg font-semibold text-gray-800">Cake Haven</span>
</a>
     </a>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <a href="Home">Home</a>
        <a href="Products">Products</a>
        <a href="About">About Us</a>
        <a href="Posts">Posts</a>
        <a href="EnquiryForm">Enquiry</a>
        <a href="SignUpPage">SignUp</a>


<div
  class="p-5 overflow-hidden w-[60px] h-[60px] hover:w-[270px] bg-[#4070f4] shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-300"
>
  <div class="flex items-center justify-center fill-white">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Isolation_Mode"
      data-name="Isolation Mode"
      viewBox="0 0 24 24"
      width="22"
      height="22"
    >
      <path
        d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"
      ></path>
    </svg>
  </div>
  <input
    type="text"
    class="outline-none text-[20px] bg-transparent w-full text-white font-normal px-4"
  />
</div>


        <div className="relative cursor-pointer">
          <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">77</button>
        </div>

        <button
        
          class="cursor-pointer bg-gradient-to-b from-indigo-500 to-indigo-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group"
        // onClick={handleClick}
        >
          <div class="relative overflow-hidden">
            <p
              class="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
            >
              <a href="Login" >
              Log In
            </a>
            </p>
            <p
              class="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
            >
              
              <a href="Login" >
              Log In
            </a>
            </p>
          </div>
        </button>

      </div>

      <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
        {/* Menu Icon SVG */}
        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
        <a href="Home.jsx" className="block">Home</a>
        <a href="About.jsx" className="block">About</a>
        <a href="#" className="block">Contact</a>
        <a href="EnquiryForm">Enquiry</a>
        <a href="Posts">Posts</a>
        <a href="SignUpPage">SignUp</a>


        <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
          Login
        </button>
      </div>

    </nav>
  )
}

export default NavBar
