import { ReactElement } from "react";

export interface ButtonProps{
    Variant: "Primary"|"Secondary",
    text:string,
    endIcon?:ReactElement,
    onClick?:()=>void,
    size:"sm"|"md"|"lg",
    img?:string,
    icon?:ReactElement,
    colour?:string
    
}

const Variant={
    "Primary":"bg-btngrey ",
    "Secondary":"bg-bgblue"
}

const size={
    "sm":"px-2 py-1",
    "md":"px-2 py-4",
    "lg":"px-20 py-1 m-4 hover hover:bg-hover"
}

const defaultStyles="rounded-md font-normal  text-xs  ";

export function Button(props:ButtonProps){
    return <button onClick={props.onClick} type="submit" className={`${Variant[props.Variant]} ${size[props.size]} ${defaultStyles} ${props.colour}`} >
        <div className="flex items-center">
            {props.text}

        </div>
    </button>

}