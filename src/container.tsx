import React from 'react';
import { Animation } from './animation';
import { CodeDisplay } from './code-display';
import { examples } from './examples';

export interface ICode { css: string, html: string };
export interface IAnimationData {
  description: string;
  html: string;
  importantProperties: string[];
  css: string;
}

export class Container extends React.Component<
  {}, 
  { animations: IAnimationData[], displayedAnimation: IAnimationData }> {

  constructor(props: {}) {
    super(props);
    this.state = { animations: examples, displayedAnimation: examples[0] }
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

  animations() {
    return this.state.animations.map((animation, index) => {
      const html = animation.html;
      const css = animation.css;
      return <Animation key={index} index={index} code={{ css, html }} updateStyle={() => this.clickHandler()}></Animation>
    });
  }

  render() {

    const html = this.state.displayedAnimation.html;
    const css = this.state.displayedAnimation.css;

    // When an Animation element is clicked, that element becomes the displayedAnimation

    return (
      <div>
        <div className="animations-container" >
          {this.animations()}
          {/* <Animation code={{ css, html }} updateStyle={() => this.clickHandler()}></Animation> */}
        </div>
        <CodeDisplay code={{ css, html }}></CodeDisplay>
      </div>
    );
  }
}