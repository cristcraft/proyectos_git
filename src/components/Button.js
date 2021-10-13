function Button(props){
    console.log(props)
    let colorClass = ''
    if(props.type === 1){
            colorClass = props.colorClass
        }
    return(
        <button className={`btn ${colorClass}`}>{props.content}</button>
    )
}

export default Button;