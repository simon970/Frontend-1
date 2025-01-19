
import { SideBar } from "../components/SideBar";

export function Workspace(){
    return <div className="relative h-screen">
    
    <div className="absolute inset-0">
      <div className="relative h-full w-full bg-slate-950 [&>div]:absolute [&>div]:bottom-0 [&>div]:right-[-20%] [&>div]:top-[-10%] [&>div]:h-[500px] [&>div]:w-[500px] [&>div]:rounded-full [&>div]:bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
      <div></div>
       </div>
    </div>
    <div >
    <div className=" relative w-full h-full text-white">
        <div>
       <SideBar />
        </div>
     </div>
    
    </div>
    

    
    
  </div>
}