import { LayOut } from "./LayOut";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";


export function SignUp(){
   return <div className='bg-bgblue h-screen pt-20 items-center flex flex-col '>
    <LayOut></LayOut>
   <Header Variant='md' enabled={true} text='Verify Your Age'></Header>
     <Header Variant='sm' enabled={true} text=' Please Confirm Your Death Year.Your Data will Not be Stored.'></Header>
     <Input placeholder='Your Birth Year'></Input>
     <Button Variant='Primary' size='lg' text='Continue'></Button>
   </div>
  
    
}