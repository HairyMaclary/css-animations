import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Style from 'style-it';
import { ICode } from './container';
import './animation.css';

export function Animation(props: { code: ICode, showClickHander: () => any, index: number }) {

  const { css, html } = props.code;
  const className = `animation animation-${props.index}`;
  const animation = <div className={className}>{ReactHtmlParser(html)}</div>;

  return (
    <div>
      <div className='animation-container'>
          <div className={'button show-button'} onClick={props.showClickHander}>show</div>
          <div className={'button reset-button'}>reset</div>
         {(Style as any).it(css, animation)}
      </div>
    </div>
  )
}