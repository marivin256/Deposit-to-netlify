

function Tr () {
    return(
        <div className="">
            <div className="text-center py-4 px-10 ">
                <p id="sec" className="py-1 px-1 bg-purple-200 rounded-full items-center w-8 shadow-lg">1</p>
                <h1 className="font-bold text-3xl font-sans p-3">Social Media</h1>
                <p>A standard of nowadays interfaces is to allow users to log in and sign up with Social
                    media accounts like <span className="text-purple-700">Google, Apple,etc.</span>
                </p>
            </div>

            <div className="py-11 px-8 max-w-sm  mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4  sm:items-center space-y-6 sm:space-x-6">
                <h1 className="font-semibold">Log In</h1>
                <div className="font-arial">
                <span id="con" className="border hover:border-blue-500"><a href="" >Continue with Google</a></span><br/>
                <span id="cont" className="border hover:border-blue-500"><a href="">Continue with X</a></span><br />
                </div>
                <div id="lin" className="text-slate-400 font-arial">

                 <span class="line">__________________</span>
                 <span class="or">Or</span>
                 <span class="line">__________________</span>
                    </div>
                
                <div>
                <form action="">
                    <input type="text" placeholder="Email or Username" className="border border-slate-400 text-center border-2  rounded-xl w-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-red-500" id="inp"/><br/>
                    <input type="password" placeholder="Password " className="border border-slate-400 text-center border-2 rounded-xl w-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-red-500" id="in"/><br/>
                   <div id="bot">
                    <input type="checkbox" />
                
                    <label className="relative left-1" htmlFor="">Stay signed In</label>
                    <span className="relative left-10 underline underline-offset font-">Forgot Password?</span><br />

                    <button id="button" className="bg-blue-500 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">Log In</button>
                    <p className="relative top-3 relative left-7">Don't have an account? <span className="text-blue-900 hover:text-red-500 cursor-pointer">Sign Up</span></p>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default function Ttail (){
    return(
<>

<Tr/>
</>
    )
    }