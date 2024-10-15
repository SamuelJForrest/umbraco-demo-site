type CounterBlock = {
    contentType: 'reactCounter',
    properties: {
        counterTitle: string | null,
        startingNumber: number | null,
    }
}

type RepeaterBlock = {
    contentType: 'reactRepeater',
    properties: {
        repeaterTitle: string | null
    }
}

type ReactBlock = CounterBlock | RepeaterBlock

export type { ReactBlock }