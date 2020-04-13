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
    this.state = { animations: [...examples], displayedAnimation: examples[0] }
  }

  updateStyle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // const animations = [...this.state.animations];
    // animations[0].css = event.target.value
    // console.log('updating style');

    const displayedAnimation = this.state.displayedAnimation;
    displayedAnimation.css = event.target.value;
    this.setState({ displayedAnimation })
  }

  updateCurrentAnimation = (index: number) => {
    console.log('updating current ani', index);
    const displayedAnimation = this.state.animations[index];
    this.setState({displayedAnimation})
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
        <CodeDisplay code={{ css, html }} updateCode={this.updateStyle}></CodeDisplay>
      </div>
    );
  }
}