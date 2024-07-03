import Spline from '@splinetool/react-spline';

export default function Grass(props) {

let cssClass = props.cssClass;


  return (
    <div className={`${cssClass}`}>
   <Spline scene="https://prod.spline.design/9zKUBVn7vUYkxFZA/scene.splinecode" />
   </div>
  );
}

