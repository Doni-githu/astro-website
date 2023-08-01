import { useState } from "react";
import { IPost, IProductCardProps } from "../types";



export default function ProductCard({ product }: IProductCardProps): JSX.Element {
    const [detail, setDetail] = useState(false)

    const toogle = () => {
        setDetail((prev) => !prev)
    }

    return (
        <div className='border rounded mb-2 p-3 flex flex-col gap-5'>
            <h2 className="text-3xl">{product.title}</h2>
            <p>{product.body}</p>
            <div className="flex gap-5">
                <button className="border py-2 px-4 bg-yellow-400 text-white border-r-4" onClick={toogle}>Toggle Description</button>
                <a href={`/post/${product.id}`} className="border py-2 px-4 bg-green-400 text-white border-r-4">To Description</a>
            </div>

            {detail ? <>
                <p>Post by {product.userId}</p>
            </> : null}
        </div>
    )
}