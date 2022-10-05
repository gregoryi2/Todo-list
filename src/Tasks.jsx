import { Trash } from "phosphor-react";

import './Tasks.css';

export function Tasks() {
    return (
        <div>
            <div className='tasks'>
                <input type="checkbox" />
                <p>Terminar esse projeto essa semana de preferência.</p>
                <button type="submit"><Trash size={20} /></button>
            </div>

            <div className='tasks'>
                <input type="checkbox" />
                <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                <button type="submit"><Trash size={20} /></button>
            </div>
            
            <div className='tasks'>
                <input type="checkbox" />
                <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                <button type="submit"><Trash size={20} /></button>
            </div>
            
            <div className='tasks'>
                <input type="checkbox" />
                <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                <button type="submit"><Trash size={20} /></button>
            </div>
            
            <div className='tasks'>
                <input type="checkbox" />
                <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                <button type="submit"><Trash size={20} /></button>
            </div>
        </div>
    )
}

