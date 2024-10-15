import React, { useState } from 'react';
import '../../../sass/layout/_counter.scss';

type CounterProps = {
    title: string | null,
    startingNumber: number | null,
}

export const Counter: React.FC<CounterProps> = ({ title, startingNumber }) => {
    const [counter, setCounter] = useState<number>(startingNumber != null ? startingNumber : 0);

    const incrementCounter : () => void = () => {
        setCounter(prevState => prevState + 1);
    };

    const decrementCounter : () => void = () => {
        setCounter(prevState => prevState - 1);
    }

    return (
        <section className="counter">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className='counter-wrap'>
                            <h2 className='counter-title'>{title}</h2>
                            <p className='counter-text'>{ counter }</p>
                            <div className='counter-buttons'>
                                <button className='button' onClick={decrementCounter}>Decrement</button>
                                <button className='button' onClick={incrementCounter}>Increment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}