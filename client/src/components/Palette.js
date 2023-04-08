import {useState} from "react";
import {send} from '../socketApi';
function Palette({activeColor}) {
    const [color, setColor] = useState('#000');
    return (
        <div className="palette flex flex-col items-center justify-center gap-4 bg-white p-8 rounded-xl">
            <input type="color" value={activeColor} onChange={(e) => setColor(e.target.value)}/>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => send(color)}>Click</button>
        </div>
    );
}

export default Palette;
