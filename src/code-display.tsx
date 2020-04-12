import React from 'react';
import { ICode } from './container';

export function CodeDisplay(props: {code: ICode}) {
    return (
        <div className="codeBlock">
            <pre>
                <code>
                {
                    props.code.html
                }
                </code>
                <br></br>
                <br></br>
                <code>
                {
                    props.code.styles
                }
                </code>
            </pre>
        </div>
    )
}
