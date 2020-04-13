import React from 'react';
import { ICode } from './container';
import './code-display.css'

export interface ICodeDisplayProps {
    code: ICode, updateCode: any
}

export interface ICodeDisplayState {
    cssDisplay: string
}

// export function CodeDisplay(props: {code: ICode, updateCode: any}) {
    export class CodeDisplay extends React.Component<ICodeDisplayProps, ICodeDisplayState> {

    constructor(props: ICodeDisplayProps) {
        super(props);
        this.state={cssDisplay: props.code.css}
    }

    shouldComponentUpdate(nextProps: ICodeDisplayProps) {
        if(nextProps.code.css !== this.state.cssDisplay) {
            this.setState({cssDisplay: nextProps.code.css})
            return true;
        }
        return false;
    }

    updateCSS = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        event.preventDefault();
        this.props.updateCode(event);
        this.setState({cssDisplay: event.target.value});
    }

    render() {
        const textRowCount = this.state.cssDisplay.split(':').length;
        const rows = textRowCount + 1;
        
        // console.log('updating display', rows, this.state.cssDisplay);
        return (
            <div className="codeBlock">
                <pre>
                    <code>
                    {
                        this.props.code.html
                    }
                    </code>
                    <br></br>
                    <br></br>
                    <textarea name={'display'} rows={rows} value={this.state.cssDisplay} onChange={this.updateCSS}/>
                </pre>
            </div>
        )

    }

}
