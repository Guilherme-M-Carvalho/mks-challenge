import { ReactNode } from "react";
import './style.scss'

export default function Main({children}: { children?: ReactNode }){
    return (<main>
        {children}
    </main>)
}