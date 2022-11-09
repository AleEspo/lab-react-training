export function Rating(props){

    if (Math.round(props.children) === 5 )
    return (
        <div>  
            <text>★★★★★</text>
        </div>
    )

    if (Math.round(props.children) === 4 )
    return (
        <div>  
            <text>★★★★☆</text>
        </div>
    )

    if (Math.round(props.children) === 3 )
    return (
        <div>  
            <text>★★★☆☆</text>
        </div>
    )

    if (Math.round(props.children) === 2 )
    return (
        <div>  
            <text>★★☆☆☆</text>
        </div>
    )

    if (Math.round(props.children) === 1 )
    return (
        <div>  
            <text>★☆☆☆☆</text>
        </div>
    )

    if (Math.round(props.children) === 0 )
    return (
        <div>  
            <text>☆☆☆☆☆</text>
        </div>
    )
}
