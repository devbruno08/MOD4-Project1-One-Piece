import { RiMenuAddLine } from "react-icons/ri"
import "./header.css"

export function Header() {

    return(
        <>
            <header className="header">
                <figure className="header-figure">
                    <img src="./onepiece.png" alt="one-piece-logo" height="90" />
                </figure>            
                <section>
                    <button className="insert-button">
                        <RiMenuAddLine size={30} />
                    </button>
                </section>
            </header></>
    );

}