import React, { useEffect, useState } from "react";
import { Counter } from "./Counter/Counter";
import { ReactBlock } from "../types/ReactBlocks";
import Repeater from "./Repeater/Repeater";

declare global {
    interface Window {
        currentPageGuid: string;
    }
}

type DataType = {
    properties: {
        reactBlocks: ReactBlock[];
    }
}

const App : React.FC = () => {
    const [data, setData] = useState<DataType | null>(null);
    const currentPageGuid = window.currentPageGuid;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/umbraco/delivery/api/v2/content/item/${currentPageGuid}`);
                if (!response.ok) {
                    throw new Error('Network response was not okay');
                }

                const result = await response.json();
                console.log(result.properties.reactBlocks);
                setData(result);
            }
            catch (error) {
                console.error(error);
            }
        }

        if (currentPageGuid) {
            fetchData();
        }
    }, [currentPageGuid])

    const blockMap = data?.properties.reactBlocks?.map((block: ReactBlock, index: number) => {
        switch (block.contentType) {
            case 'reactCounter':
                return (
                    <Counter key={index} title={block.properties.counterTitle} startingNumber={block.properties.startingNumber} />
                );
            case 'reactRepeater':
                return (
                    <Repeater key={index} title={block.properties.repeaterTitle} />
                )
            default:
                return null;
        }
    }) || [];

    return (
        <div>
            {blockMap}
        </div>
    )
}

export default App;