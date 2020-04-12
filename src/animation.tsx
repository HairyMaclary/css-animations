import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Style from 'style-it';
import { ICode } from './container';

function animationWithStyle(props: ICode) {
    return (Style as any).it(props.styles, ReactHtmlParser(props.html));
}

export function Animation(props: {code: ICode, updateStyle: () => any}) {
  
    const { styles, html } = props.code;

    return (
      <div>
          <div className="animation">
            {animationWithStyle({styles, html})}
            {ReactHtmlParser(html)}
          </div>
      </div>
    )
}