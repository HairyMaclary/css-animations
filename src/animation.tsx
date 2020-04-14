import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Style from 'style-it';
import { ICode } from './container';
import './animation.css';

export interface IAnimationProps {
  code: ICode, 
  index: number, 
  isOnDisplay: boolean
  showClickHander: () => any, 
  resetClickHandler: () => any,
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
        {(Style as any).it(css, animation)}
      </div>
    </div>
  )
}