export interface SideProps{
    text:string,
    img:string
}


export function Side(props:SideProps){
    return <div>
         <div className="pt-6 px-1 ">
               <div className=" flex justify-between rounded hover:bg-slate-200 cursor-pointer ">
                 <div className="text-xs flex items-center">
                 {props.text}
                 </div>
                 <div >
                <img src={props.img} className="hover:scale-110"></img>
                 </div>
               </div>
               </div>
    </div>
}