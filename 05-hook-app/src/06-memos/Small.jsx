import { memo } from 'react';


export const Small = memo(({ value }) => {

    memo

    console.log('Me volvi a generar');

    return (
        <small>{ value }</small>
    )
})

