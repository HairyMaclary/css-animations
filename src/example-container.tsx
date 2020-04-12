import React from 'react';
import { CodeTest } from './codeTest';
import { examples } from './allStyles';


export class ExampleContainer extends React.Component<{}, {testStyle: string}> {

    constructor(props: {}) {
        super(props);
        this.state = {
            testStyle: examples[1]
        }
    }


   updateStyle(block: string, property: string) {

    }

    clickHandler = (padding = '3', background = 'blue') => {
        console.log('clicked');
        this.setState({
            testStyle: `
            padding: ${padding}em;
            background: ${background};
            `
        })
      }
    
   
    render() {

        const html = '<a href="#"><span></span>hover me</a>';
        return (
          <div className="example-container" >
            <CodeTest styles={this.state.testStyle} html={html} updateStyle={() => this.clickHandler()}></CodeTest>
          </div>
        );
      }
}