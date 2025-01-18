export interface DivProps{
    enabled?:boolean,
    text:string,
    Variant:"sm"|"md"
}

const Variant={
    "md":"text-white m-10 text-2xl",
    "sm":"m-4 text-grey"

}

export function Header(props:DivProps){

return props.enabled && <div className= {`${Variant[props.Variant]}`}>
        {props.text}
    </div>
}