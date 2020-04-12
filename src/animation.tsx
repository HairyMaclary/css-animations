import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Style from 'style-it';

function animationWithStyle(props: {styles: string, html: string}) {
    return (Style as any).it(props.styles, ReactHtmlParser(props.html));
}

export function Animation(props: {styles: string, html: string, updateStyle: () => any}) {
  
    const { styles, html } = props;

    console.log(styles)

    return (
      <div>
          <div className="animation">
            {animationWithStyle({styles, html})}
            {/* <a href="#"><span></span>hover me</a> */}
            { ReactHtmlParser(props.html) }
          </div>
      </div>
    )
}