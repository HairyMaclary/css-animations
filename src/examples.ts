import { IAnimationData } from "./container";

export const examples: IAnimationData[] = [
    {
        description: 'Homing Window',
        html: `<ul>
        <li>
            Home
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </li>
        <li>
            About
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </li>
        <li>
            Services
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </li>
        <li>
            Contact
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </li>
        </ul>`,
        importantProperties: ['', ''],
        css: `
        ul {
          display: flex;
          width: 60%;
          flex-direction: row;
      }
      
      li {
          flex: 1;
          display: inline-block;
          height: 75px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.5s linear;
          overflow: hidden;
          border-radius: 8px;
          margin: 3px;
          perspective: 900px;
      }
      
      li:hover {
          color: white;
      }
      
      span {
          position: absolute;
          left: 0;
          top: 0;
          background-color: blue;
          height: 100%;
          width: 25%; 
          z-index: -1;
          transform: scale(0) translateY(100%) translateX(100%);
          transition: all 0.8s ease-in;
          transform-origin: top;
      }
      
      
      li:hover span {
          transform: scale(1) translateY(0) translateX(0);
      }
      
      span:nth-child(2) {
          left: 12.5%;
          transition-delay: 0.1s;
      }
      
      span:nth-child(3) {
          left: 25%;
          transition-delay: 0.2s;
      }
      
      span:nth-child(4) {
          left: 37.5%;
          transition-delay: 0.3s;
      }
      
      span:nth-child(5) {
          left: 50%;
          transition-delay: 0.4s;
      }
      
      span:nth-child(6) {
          left: 62.5%;
          transition-delay: 0.5s;
      }
      
      span:nth-child(7) {
          left: 75%;
          transition-delay: 0.6s;
      }
      
      span:nth-child(8) {
          left: 87.5%;
          transition-delay: 0.7s;
      }
    `
    },
    {
        description: 'Fold Message Over Top',
        html: `<button>Hover Me</button>`,
        importantProperties: [''],
        css: `button {
          border: 2px solid black;
          height: 100px;
          width: 200px;
          position: relative;
          font-size: 20px;
          letter-spacing: 2px;
          font-family: cursive;
          text-transform: uppercase;
      }
      
      button::before {
          content: 'Hover Me';
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: greenyellow;
          position: absolute;
          top: 0px;
          left: 0px;
          height: 100%;
          width: 100%;
          transform-origin: top;
          transform: rotateX(270deg);
          transition: transform 1s linear;
      }
      
      button::after {
          content: 'Hover Me';
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: tomato;
          position: absolute;
          top: 0px;
          left: 0px;
          height: 100%;
          width: 100%;
          transform-origin: top;
          transform: rotateX(270deg);
          transition: transform 1s linear 1s;
      }
      
      button:hover::before, button:hover::after{
          transform: rotateX(-0deg);
      }
  `
    },
    {
        description: 'Horizontal Expansion',
        html: `<button>button</button>`,
        importantProperties: [''],
        css: `
      button {
        color: red;
        width: 200px;
        height: 100px;
        border: 2px solid red;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.5s linear;
        font-size: 16px;
        font-family: sans-serif;
        font-weight: 300;
    }
    
    button:hover {
        width: 250px;
        border: 3px solid red;
        letter-spacing: 10px;
        font-weight: 600;
    }
    `},
    {
        description: 'Shiny Button',
        html: `<a href="">hover me</a>`,
        importantProperties: [''],
        css: `
      a {
        text-decoration: none;
        border-radius: 6px;
        border: 2px solid white;
        color: white;
        background-color: #999;
        padding: 40px;
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        transition: all 1s ease-out;
        position: relative;
        overflow: hidden;
    
    }
    
    a::before {
        content: '';
        width: 140%;
        height: 40%;
        background-color: white;
        position: absolute;
        bottom: -50%;
        left: -70%;
        z-index -1;
        transform: rotateZ(50deg);
        transform-origin: top;
        transition: all 1s;
    }
    
    a:hover{
        background-color: red;
    }
    
    a:hover::before{
        transform: rotateZ(50deg) translateY(-300px);
    }
    
      `},
    {
        description: 'Button zoom in',
        html: `<a href="">hover me</a>`,
        importantProperties: [''],
        css: `
        a {
            perspective: 100px;
            text-decoration: none;
            border-radius: 6px;
            border: 2px solid white;
            color: white;
            background-color: #999;
            padding: 40px;
            width: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            transition: all 1s ease-out;
            position: relative;
            overflow: hidden;
        }
        
        a::before {
            content: 'hovered';
            width: 100%;
            height: 100%;
            color: white;
            font-size: 2em;
            background-color: blue;
            position: absolute;
            top: 0;
            left: 0;
            transform: translateZ(200px);
            transition: all 1.5s ease-out;
            
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        a:hover{
            background-color: transparent;
            color: transparent;
        }
        
        a:hover::before{
            transform: translateZ(0px);
            background-color: blue;
            font-size: 2em;
        }
    `},
    {
        description: 'The old switcheroo',
        html: `<a href=""></a>`,
        importantProperties: [''],
        css: `
        a {
            text-decoration: none;
            border: 2px solid #ff0;
            color: #ff0;
            background-color: #999;
            padding: 30px;
            width: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            transition: all 1s ease-out;
            position: relative;
            text-transform: uppercase;
        }
        
        a::before, a::after {
            content: 'hovered';
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ff0;
            font-size: 2em;
            background-color: #363636;
            position: absolute;
            top: 0;
            left: 0;
            transform: translateX(-100%) scale(0) rotateY(180deg);
            transition: all 1s ease-out;
        }
        
        a::after {
            content: 'hover me';
            transform: translateX(0) scale(1) rotateY(0);
        }
        
        a:hover::before{
            transform: translateX(0) scale(1) rotateY(0);
        }
        
        a:hover::after{
            transform: translateX(100%) scale(0) rotateY(-180deg);
        }
    `},
    {
        description: 'expanding dots',
        html: `<div><a>Hover Me<span></span></a></div>`,
        importantProperties: [''],
        css: `
        div {
            position: relative; 
            z-index: 1;
        }
        a {
            text-decoration: none;
            color: #ff0;
            width: 220px;
            height: 80px;
            font-size: 26px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            transition: all 0.9s;
            position: relative;
            text-transform: uppercase;
            background-color: transparent;
        }
        
        
        a::before, a::after {
            content: '';
            background-color: #ff0;
            border-radius: 50%;
            position: absolute;
            width: 20px;
            height: 20px;
            transform: translateX(-110px);
            box-shadow: -50px 0 0 #ff0;
            transition: all 0.4s ease-out;
            opacity: 0;
            z-index: -1;
        }
        
        a::after {
            content: '';
            background-color: #ff0;
            transform: translateX(110px);
            box-shadow: 50px 0 0 #ff0;
        }
        
        a:hover::before{
            box-shadow: -20px 0 0 #ff0;
            transform: translateX(0);
            opacity: 1;
        }
        
        a:hover::after{
            box-shadow: 20px 0 0 #ff0;
            transform: translateX(0);
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
          transition: all 0.4s;
          z-index: -1;
        }
        
        a:hover span {
            transform: scale(1);
            transition-delay: 0.35s;
        }
        
        a:hover {
            color: #262626;
            transition-delay: 0.4s;
        }
        
        `
    }
]