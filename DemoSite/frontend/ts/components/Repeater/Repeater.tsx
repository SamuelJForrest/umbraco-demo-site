import React, { useState } from "react";
import '../../../sass/layout/_repeater.scss';

type RepeaterProps = {
    title: string | null
}

const Repeater : React.FC<RepeaterProps> = ({ title }) => {
    const [repeatCount, setRepeatCount] = useState<number>(1);

    const incrementRepeater = () => {
        setRepeatCount(prevState => prevState + 1);
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
                                    <p className="repeater-item" key={index}>Item { index }</p>
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