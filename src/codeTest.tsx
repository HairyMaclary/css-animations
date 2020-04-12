import React from 'react';
import './codeTest.css';


export function CodeTest() {
    return (
        <div>
            <div className="example-container">
                <div className="animation">
                    <a href="#"><span></span>hover me</a>
                </div>
                <div className="codeBlock"></div>
                <pre>
                    <code>
                    {
                        `code {
                            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
                        }`
                    }
                    </code>
                </pre>
            </div>
        </div>
    )
}