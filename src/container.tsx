import React from 'react';
import { Animation } from './animation';
import { CodeDisplay } from './code-display';
import { examples } from './examples';
import './container.css';

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

  updateCurrentAnimation = (index: number) => {
    this.setState({
      displayedAnimation: examples[index]
    })
  }

  animations() {
    return this.state.animations.map((animation, index) => {
      const html = animation.html;
      const css = animation.css;
      return <Animation
        key={index} 
        index={index} 
        code={{ css, html }} 
        showClickHander={() => this.updateCurrentAnimation(index)}
      ></Animation>
    });
  }

  render() {

    const html = this.state.displayedAnimation.html;
    const css = this.state.displayedAnimation.css;

    return (
      <div className="container">
        <div className="animations-container" >
          {this.animations()}
        </div>
        <CodeDisplay code={{ css, html }}></CodeDisplay>
      </div>
    );
  }
}