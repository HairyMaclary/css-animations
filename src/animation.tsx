import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Style from 'style-it';
import { ICode } from './container';

export function Animation(props: { code: ICode, updateStyle: () => any, index: number }) {

  const { css, html } = props.code;
  const className = `animation-${props.index}`;
  const animation = <div className={className}>{ReactHtmlParser(html)}</div>;

  return (
    <div>
      <div className='bob'>
         {(Style as any).it(css, animation)}
      </div>
    </div>
  )
}