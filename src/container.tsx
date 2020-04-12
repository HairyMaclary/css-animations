import React from 'react';
import { Animation } from './animation';
import { CodeDisplay } from './code-display';
import { examples } from './examples';

export interface ICode { css: string, html: string };
export interface IAnimationData {   description: string;
  html: string;
  importantProperties: string[];
  css: string; 
}

export class Container extends React.Component<{}, {animations: IAnimationData[]}> {

  constructor(props: {}) {
      super(props);
      this.state = {animations: examples}
  }


  updateStyle(block: string, property: string) {

  }

  clickHandler = (padding = '3', background = 'blue') => {
    console.log('clicked');
    // this.setState({
    //   testStyle: `
    //         padding: ${padding}em;
    //         background: ${background};
    //         `
    // })
  }


  render() {
    const html = this.state.animations[1].html;
    const css = this.state.animations[1].css;

    return (
      <div>
        <div className="animation-container" >
          <Animation code={{ css, html }} updateStyle={() => this.clickHandler()}></Animation>
        </div>
        <CodeDisplay code={{ css, html }}></CodeDisplay>
      </div>
    );
  }
}