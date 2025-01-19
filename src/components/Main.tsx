import { Card } from "./Card";
import { Web } from "./WebComponent";

export function Main(){

    return <div>
       <div className="relative">
  
  <div className="absolute -top-4">
    <Card />
  </div>

 
  <div className="bg-slate-100 rounded   items-center text-black pl-72 pt-10">
    <div>
    Sunday, 19 January
    </div>
    <div className="pt-10 font-sans flex  text-bgblue font-medium text-2xl">
       
        Good Morning,Simon <img src="./src/image/icon.svg" className="bg-black pl-2"></img>
    </div>
    <div className="pt-8 flex justify-start">
    <div className="w-[450px] h-[300px] bg-white rounded  p-4">
    <div className="hover:bg-slate-200 group">
  <div className="rounded flex justify-between">
    <div>
      <input
        type="date"
        className="cursor-pointer group-hover:bg-slate-200 rounded"
      />
    </div>

    <div>
      <img
        src="./src/image/icon.svg"
        className="relative bg-black cursor-pointer group-hover:bg-slate-200 rounded"
      />
    </div>
  </div>
  
</div>
<div className="pt-4">
    <Web/>
    <Web/>
  </div>
</div>
<div className="w-[250px] h-[200px] text-black bg-white rounded-md mx-11 ">
    <div className="flex justify-between p-10">
        <div className="w-[40px] h-[40px] bg-green-100 flex items-center justify-center rounded">
        <img src="./src/image/icon1.svg"></img>
        </div>
      
        <div className="w-[40px] h-[40px] bg-green-100 flex items-center justify-center rounded">
        <img src="./src/image/icon1.svg"></img>
        </div>
    </div>
    <div className="pl-10">
    <div className="w-[40px] h-[40px] bg-green-100 flex items-center justify-center rounded">
        <img src="./src/image/icon1.svg"></img>
        </div>
    </div>
    

    
</div>


</div>
 
  </div>
 
</div>


    </div>
    
}