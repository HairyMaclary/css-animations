import React from 'react';

export function CodeDisplay(props: {code: {styles: string, html: string}}) {
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
