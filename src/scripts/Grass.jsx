import Spline from '@splinetool/react-spline';

export default function Grass(props) {

let marginAll = props.marginAll;
let marginLeft = props.marginLeft;
let marginRight = props.marginRight;
let marginBottom = props.marginBottom;
let marginTop = props.marginTop;
let cssClass = props.cssClass;
let bgColor = props.bgColor;
let w = props.width;
let h = props.height;


  return (
    <div className={`${cssClass} ${w} ${h} ${bgColor} ${marginLeft} ${marginRight} ${marginBottom} ${marginTop} ${marginAll}`}>
   <Spline scene="https://prod.spline.design/9zKUBVn7vUYkxFZA/scene.splinecode" />
   </div>
  );
}

