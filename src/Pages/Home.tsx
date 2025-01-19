import { Header } from "../components/Header";
import { LayOut } from "./LayOut";

export function Home(){
    return <div className='bg-bgblue h-screen pt-20 items-center flex flex-col '>
         <LayOut/>
         <Header enabled={true} text="Welcome to Webinar.gg!" Variant="md"/>
         
    </div>
}