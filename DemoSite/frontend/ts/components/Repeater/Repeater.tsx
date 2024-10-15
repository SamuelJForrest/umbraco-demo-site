import React, { useState } from "react";
import '../../../sass/layout/_repeater.scss';

type RepeaterProps = {
    title: string | null
}

const Repeater : React.FC<RepeaterProps> = ({ title }) => {
    const [repeatCount, setRepeatCount] = useState<number>(1);

    const incrementRepeater = () => {
        setRepeatCount((prevState: number) => prevState + 1); // Explicitly typed prevState
    }

    const decrementRepeater = () => {
        setRepeatCount((prevState: number) => prevState - 1); // Explicitly typed prevState
    }

    return (
        <section className="repeater">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="repeater-wrap">
                            <div className="repeater-titlewrap">
                                <h2 className="repeater-title">{ title }</h2>
                                <button className="button" onClick={incrementRepeater}>Add new</button>
                            </div>

                            <div className="repeater-grid">
                                { Array.from({ length: repeatCount }, (_, index) => (
                                    <button className="repeater-item" key={index} onClick={decrementRepeater}>Item { index }</button>
                                )) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Repeater;
