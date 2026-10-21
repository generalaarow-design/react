const Lists =({data})=>{
    return(
        <ol>
            {data.map((value,i)=><li key={i}>{value}</li>)}


        </ol>
    )

}
export default Lists;