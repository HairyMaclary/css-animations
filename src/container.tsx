import React from 'react';
import { Animation } from './animation';
import { CodeDisplay } from './code-display';
// import { examples } from './allStyles';

export interface ICode { styles: string, html: string};

export class Container extends React.Component<{}, {}> {

    // constructor(props: {}) {
    //     super(props);
    // }

    styles = `a {
      width: 220px;
      height: 80px;
      color: #ff0;
      background-color: transparent;
      font-size: 26px;
      text-decoration: none;
      text-transform: uppercase;
      text-align: center;
      line-height: 80px;
      transition: all 0.5s;
      position: relative;
    }
    
    a:before,
    a:after {
      content: "";
      position: absolute;
      top: 50%;
      width: 20px;
      height: 20px;
      background-color: #ff0;
      border-radius: 50%;
      transform: translateY(-50%);
      transition: all 0.3s;
      z-index: -1;
      opacity: 0;
    }
    
    a:before {
      left: 0;
      box-shadow: -100px 0 0 #ff0;
    }
    
    a:after {
      right: 0;
      box-shadow: 100px 0 0 #ff0;
    }
    
    a:hover:before {
      left: 50%;
      box-shadow: 30px 0 0 #ff0;
      transform: translateX(-50%) translateY(-50%);
      opacity: 1;
    }
    
    a:hover:after {
      right: 50%;
      box-shadow: -30px 0 0 #ff0;
      transform: translateX(50%) translateY(-50%);
      opacity: 1;
    }
    
    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #ff0;
      border-radius: 8px;
      transform: scale(0);
      transition: all 0.3s;
      z-index: -1;
    }
    
    a:hover span {
      transform: scale(1);
      transition-delay: 0.4s;
    }
    
    a:hover {
      color: #262626;
      transition-delay: 0.4s;
    }
    `


   updateStyle(block: string, property: string) {

    }

    clickHandler = (padding = '3', background = 'blue') => {
        console.log('clicked');
        this.setState({
            testStyle: `
            padding: ${padding}em;
            background: ${background};
            `
        })
      }
    
   
    render() {

        const html = '<a href="#"><span></span>hover me</a>';

        return (
          <div>
            <div className="animation-container" >
              <Animation code={{styles: this.styles, html}} updateStyle={() => this.clickHandler()}></Animation>
            </div>
            <CodeDisplay code={{styles: this.styles, html}}></CodeDisplay>
          </div>
        );
      }
}