import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Style from 'style-it';
import { ICode } from './container';

function animationWithStyle(props: ICode) {
    return (Style as any).it(props.css, ReactHtmlParser(props.html));
}

export function Animation(props: {code: ICode, updateStyle: () => any}) {
  
    const { css, html } = props.code;

    return (
      <div>
          <div className="animation">
            {animationWithStyle({css, html})}
            {ReactHtmlParser(html)}
          </div>
      </div>
    )
}