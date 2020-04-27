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
        description: 'moving slash',
        html: `<div><a href="#">Hover Me</a></div>`,
        importantProperties: [''],
        css: `
        div {
            position: relative; 
            z-index: 1;
            overflow: hidden;
        }

        a {
            text-decoration: none;
            color: white;
            font-family: sans-serif;
            font-size: 40px;
            border: 3px solid white;
            padding: 40px 80px;
            position: relative;
            overflow: hidden;
        }
        
        a:before {
            content: '';
            background-color: #F44336;
            top: 0;
            left: 0;
            width: 120px;
            height: 100%;
            position: absolute;
            z-index: -1;
            transform: skew(-15deg);
            animation: moving 1.2s linear infinite;
            transition: all .1s;
        }
        
        @keyframes moving {
        
            from { left: -120px }
        
            to 	{ left: 100% }
        
        }
        
        a:hover:before {
            width: 100%;
            transform: skew(0deg);
            animation: none;
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
    },
    {
        description: 'flap slapper',
        html: `<div><a>Button Hover Effect</a></div>`,
        importantProperties: [''],
        css: `
        div {
            position: relative;
            z-index: 1;
        }
        
        a {
            font-family: verdana;
            text-decoration: none;
            color: white;
            width: 300px;
            height: 60px;
            display: flex;
            letter-spacing: 2px;
            font-weight: bold;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            transition: all 0.4s;
            position: relative;
            text-transform: uppercase;
            background-color: transparent;
        }
        
        
        
        a::before, a::after {
            content: '';
            background-color: #20caff;
            position: absolute;
            top: -3px;
            left: -3px;
            width: 100%;
            height: 100%;
        /*    opacity: 0.5;*/
            z-index: -1;
            transform-origin: top;
            transition: all 0.4s;
            mix-blend-mode: multiply;
            transition: all 0.3s linear;
        }
        
        
        a::after {
            content: '';
            background-color: #ff7675;
            bottom: 3px;
            right: 3px;
            transform: translate(4px, 4px);
            transform-origin: bottom;
        }
        
        a:hover::before{
            transform: perspective(500px) rotateX(80deg);
        }
        
        a:hover::after{
            transform: perspective(500px) rotateX(-80deg);
        }
        `
    },
    {
        description: 'darkening text',
        html: `<div><h1>text</h1></div>`,
        importantProperties: [''],
        css: `
        div {
            position: relative;
            z-index: 1;
        }
        
        h1 {
            font-family: verdana;
            font-size: 50px;
            letter-spacing: 7px;
            background-color: white;
            color: black;
            text-transform: uppercase;
            position: relative;
            overflow: hidden;
            padding: 20px;
            box-sizing: border-box;
        }
        
        h1::before {
            content: "";
            color: black;
            padding: 20px;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: all 0.5s linear;
            background-color: rgba(255,255,255,0.6);
        }
        
        h1:hover::before {
            transform: translateX(100%);
        }
        `
    },
    {
        description: 'Smokey Bandit',
        html: `
        <ul>
            <li>S</li>
            <li>M</li>
            <li>O</li>
            <li>K</li>
            <li>Y</li>
        </ul>
        `,
        importantProperties: [''],
        css: `
        ul {
            margin: 0;
            padding: 0;
            display: flex;
        }
        
        li {
            list-style: none;
            color: white;
            font-size: 100px;
            font-weight: bold;
            letter-spacing: 10px;
            transition: 2s ease-out;
        }
        
        ul:hover li {
            transform: translateX(100px) translateY(-100px) rotate(90deg);
            filter: blur(10px) opacity(0%);
        }
        
        li:nth-child(2) {
            transition-delay: 0.3s;
        }
        
        li:nth-child(3) {
            transition-delay: 0.6s;
        }
        
        li:nth-child(4) {
            transition-delay: 0.9s;
        }
        
        li:nth-child(5) {
            transition-delay: 1.2s;
        }
        `
    },
    {
        description: 'Angled menu borders',
        html: `
        <ul>
            <li><a href="#">home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">portfolio</a></li>
            <li><a href="#">services</a></li>
            <li><a href="#">contact</a></li>
	    </ul>
        `,
        importantProperties: [''],
        css: `
        ul {
            margin: 0;
            padding: 0;
            display: flex;
            list-style-type: none;
          }
          
          ul li a {
            color: lightgreen;
            font-size: 20px;
            text-decoration: none;
            text-transform: uppercase;
            padding: 5px 10px;
            margin: 0px 10px;
            position: relative;
            transition: all .5s
          }
          
          a:hover {
            background-color: #e91e63;
            color:white;
          }
          
          a:before {
            content: "";
            position: absolute;
            bottom: 12px;
            left: 12px;
            width: 12px;
            height: 12px;
            border: 3px solid #e91e63;
            border-width: 0 0 3px 3px;
            opacity: 0;
            transition: all 0.3s
          }
          
          a:hover:before {
            opacity: 1;
            bottom: -8px;
            left: -8px;
          }
          
          a:after {
            content: "";
            position: absolute;
            top: 12px;
            right: 12px;
            width: 12px;
            height: 12px;
            border: 3px solid #e91e63;
            border-width: 3px 3px 0 0;
            opacity: 0;
            transition: all 0.3s;
          }
          
          a:hover:after {
            opacity: 1;
            top: -8px;
            right: -8px;
          }
        `
    },
    {
        description: 'Social Media Buttons',
        html: `
        <div class="container">
            <a class="icon" href="#">
            <i class="fab fa-facebook-f"></i>
            </a>
            <a class="icon" href="#">
            <i class="fab fa-twitter"></i>
            </a>
            <a class="icon" href="#">
            <i class="fab fa-google"></i>
            </a>
            <a class="icon" href="#">
            <i class="fab fa-instagram"></i>
            </a>
            <a class="icon" href="#">
            <i class="fab fa-youtube"></i>
            </a>
        </div>
        `,
        importantProperties: [''],
        css: `
        .container{
            text-align: center;
            display: flex;
          }
          .icon{
            width: 90px;
            height: 90px;
            background: #f1f1f1;
            margin: 10px;
            border-radius: 30%;
            color: #10ac84;
            box-shadow: 0 5px 15px -5px #00000070;
            position: relative;
            overflow: hidden;
          }
          .icon i{
            line-height: 90px;
            font-size: 25px;
            transition: 0.2s;
          }
          .icon:hover i{
            transform: scale(1.3);
            color: #f1f1f1;
          }
          .icon::before{
            content: "";
            position: absolute;
            width: 120%;
            height: 120%;
            background: #10ac84;
            left: -110%;
            top: 90%;
            transform: rotate(45deg);
          }
          .icon:hover::before{
            animation: animation 0.7s 1 forwards;
          }
          @keyframes animation {
            0%{
              left: -110%;
              top: 90%;
            }50%{
              left: 15%;
              top: -30%;
            }100%{
              top: -10%;
              left: -10%;
            }
          }
        `
    },
    {
        description: 'Menu line',
        html: `
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        `,
        importantProperties: [''],
        css: `
        ul {
            padding: 0;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
        }
        
        ul li {
            list-style: none;
        }
        
        ul li a {
            text-decoration: none;
            color: #ff0;
            font-size: 22px;
            display: block;
            padding: 10px 15px;
            position: relative;
        }
        
        ul li a:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #3d3d3d;
            transform: scaleX(0);
            transition: all 0.5s;
            transform-origin: left
        }
        
         ul li a:hover:before, ul li a:hover:after {
             transform: scaleX(1);
         }
        
         ul li a:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #3d3d3d;
            transform: scaleX(0);
            transition: all 0.5s;
            transform-origin: right
        }
        `
    },
    {
        description: 'loading',
        html: `
        <div class='container'>
            <div class='loading'></div>
        </div>
        `,
        importantProperties: [''],
        css: `
        .container {
            perspective: 200px;
        }
        
        .loading {
            width: 100px;
            height: 100px;
            background-color: antiquewhite;
            border-radius: 10px;
            animation: loading 2s infinite linear;
        }
        
        @keyframes loading {
            50% {
                transform: rotateY(180deg);
            }
            100% {
                transform: rotateZ(-180deg);
            }
        }
        `
    },
    {
        description: 'word switch',
        html: `
            <h1>I love CSS<span></span></h1>
        `,
        importantProperties: [''],
        css: 
        `
        h1 {
            font-size: 1em;
            text-align: center;
            color: white;
            font-family: arial;
            letter-spacing: 10px;
            background-color: #ea2027;
            padding: 40px;
            position: relative;
            min-width: 400px;
        }
        
        span::before {
            content: 'transitions';
            text-transform: uppercase;
            font-family: arial;
            color: #1B1464;
            animation: word-switch 6s infinite;
            animation-timing-function: linear;
            animation-fill-mode: forwards;
        }

        @keyframes word-switch {
            0% {
                content: 'transitions';
            }
            33% {
                content: 'animations';
            }
            67% {
                content: 'transforms';
            }
        }
        `
    },
    {
        description: 'Lightning',
        html: `
        <ul>
            <li>L</li>
            <li>I</li>
            <li>G</li>
            <li>H</li>
            <li>T</li>
            <li>N</li>
            <li>I</li>
            <li>N</li>
            <li>G</li>
        </ul>
        `,
        importantProperties: [''],
        css: 
        `
        ul {
            margin: 0;
            padding: 0;
            display: flex;
        }
        
        ul li {
            list-style: none;
            color: #484848;
            font-size: 80px;
            letter-spacing: 15px;
            animation: lighting 1.6s linear infinite;
        
        }
        
        @keyframes lighting {
            0% {
                color: #484848;
                text-shadow: none;
            }
        
            90% {
                color: #484848;
                text-shadow: none;
            }
        
            100% {
                color: #fff900;
                text-shadow: 0 0 7px #fff900, 0 0 50px #ff6c00;
            }
        }
        
        ul li:nth-child(1) {
            animation-delay: 0
        }
        
        ul li:nth-child(2) {
            animation-delay: 0.1s
        }
        
        ul li:nth-child(3) {
            animation-delay: 0.2s
        }
        
        ul li:nth-child(4) {
            animation-delay: 0.3s
        }
        
        ul li:nth-child(5) {
            animation-delay: 0.4s
        }
        
        ul li:nth-child(6) {
            animation-delay: 0.5s
        }
        
        ul li:nth-child(7) {
            animation-delay: 0.6s
        }
        
        ul li:nth-child(8) {
            animation-delay: 0.7s
        }

        ul li:nth-child(9) {
            animation-delay: 0.8s
        }
        `
    }
]