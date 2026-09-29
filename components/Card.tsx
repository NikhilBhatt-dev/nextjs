type CardProps ={
    title: string;
    description: string;
}


export default function Card({title, description}: CardProps){
    return(
        <div className="card p-4 rounded shadow-md w-fit bg-gray-900">
            <h1 className="">{title}</h1>
            <p>{description}</p>
        </div>
    )
}