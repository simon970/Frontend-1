import { ReactElement } from "react";
import { Button } from "./Button";
import { Side } from "./side";
import { Main } from "./Main";



export interface SideBarProps{
    img?:string,
    icon?:ReactElement,
    text:string
}

export function SideBar(){
    return <div>
        <div className="grid grid-cols-12">
            <div className=" col-span-2 text-black bg-white">
                <div className="sm:container h-screen">
               <div className="px-2 pt-4 flex justify-between hover">
                 <div>
                 <Button Variant="Secondary" size="sm" text={"Webinar.gg"} colour="text-txt"></Button>
                 </div>
                 <div >
                <img src={"./src/image/icon1.svg"} className="hover:scale-110"></img>
                 </div>
               </div>
              <Side text="Home" img="./src/image/icon1.svg"/>
              <Side text="Webinars" img="./src/image/icon1.svg"></Side>
              <Side text="Billing" img="./src/image/icon1.svg"></Side>
              <Side text="UserManagement" img="./src/image/icon1.svg"></Side>
              <Side text="Settings" img="./src/image/icon1.svg"></Side>
                </div>
            </div>
           
            
            <div className="col-span-10 pt-32 relative">
  
  
  <div className="bg-slate-100 h-full rounded shadow-md">
    <Main />
  </div>
</div>


            
        </div>
       

        </div>

   

}