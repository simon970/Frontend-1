import { ReactElement } from "react";

export interface ButtonProps{
    Variant: "Primary"|"Secondary",
    text:string,
    endIcon?:ReactElement,
    onClick?:()=>void,
    size:"sm"|"md"|"lg"
    
}

const Variant={
    "Primary":"bg-btngrey ",
    "Secondary":"bg-white"
}

const size={
    "sm":"px-1 py-2",
    "md":"px-2 py-4",
    "lg":"px-20 py-1 m-4 hover hover:bg-hover"
}

const defaultStyles="rounded-md font-normal";

export function Button(props:ButtonProps){
    return <button onClick={props.onClick} type="submit" className={`${Variant[props.Variant]} ${size[props.size]} ${defaultStyles}`} >
        <div className="flex items-center">
            {props.text}

        </div>
    </button>

}