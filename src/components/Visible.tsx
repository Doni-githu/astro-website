import { useState } from 'preact/hooks'


export default function Visible() {
    const [count, setCount] = useState(42)
    return (
        <div className="border p-6">
            <div class="text-2xl" >
                Visible {count}
            </div>
            <button className="border p-3 bg-green-400 text-white" onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        </div>
    )
}