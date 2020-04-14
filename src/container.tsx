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

interface IContainerState {
  animations: IAnimationData[],
  displayedAnimationIndex: number
}

function deepCopy(obj: {}) {
  return JSON.parse(JSON.stringify(obj));
}

export class Container extends React.Component<{}, IContainerState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      animations: deepCopy(examples),
      displayedAnimationIndex: 0
    }
  }

  updateStyle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const animations = deepCopy(this.state.animations);
    animations[this.state.displayedAnimationIndex].css = event.target.value;
    this.setState({ animations })
  }

  changeCurrentAnimation = (index: number) => {
    this.setState({ displayedAnimationIndex: index })
  }

  // reset from source data
  resetCSS = (index: number) => {
    const animations = deepCopy(this.state.animations);
    animations[this.state.displayedAnimationIndex].css = deepCopy(examples[index].css);
    this.setState({ animations })
  }

  animations() {
    return this.state.animations.map((animation, index) => {
      const html = animation.html;
      const css = animation.css;
      return <Animation
        key={index}
        index={index}
        code={{ css, html }}
        showClickHander={() => this.changeCurrentAnimation(index)}
        resetClickHandler={() => this.resetCSS(index)}
        isOnDisplay={this.state.displayedAnimationIndex === index}
      ></Animation>
    });
  }

  render() {

    const { html, css } = this.state.animations[this.state.displayedAnimationIndex];
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