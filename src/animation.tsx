
import React, { ReactElement } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Style from 'style-it';
import { ICode } from './container';
import './animation.css';
interface IStyle {
  it: (cssText: string, rootElement: ReactElement) => string; 
};

export interface IAnimationProps {
  code: ICode,
  index: number,
  isOnDisplay: boolean
  showClickHander: () => void,
  resetClickHandler: () => void,
}

export function Animation(props: IAnimationProps) {

  const { css, html } = props.code;
  const className = `animation animation-${props.index}`;
  const animation = <div className={className}>{ReactHtmlParser(html)}</div>;
  const buttons = props.isOnDisplay ?
    <div className={'button reset-button'} onClick={props.resetClickHandler}>reset</div> :
    <div className={'button show-button'} onClick={props.showClickHander}>show</div>

  return (
    <div>
      <div className='animation-container'>
        {buttons}
        {(Style as unknown as IStyle).it(css, animation)}
      </div>
    </div>
  )
}