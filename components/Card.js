import React from "react";
import Carousel from "nuka-carousel";
import { animated, interpolate} from "react-spring";
import Image from "next/image";

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, cards, bind, objs } = this.props;
    const { name, age, distance, text, pics } = objs[i];

    return (
      <animated.div
        key={i}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div
          {...bind(i)}
          style={{
            transform: interpolate([rot, scale], trans)
          }}
        >
          <div className="card">
            <Carousel>
              {pics.map((pic, index) => (
                <img src={pic} key={`${pic + index}`} alt="profilePicture" />
              ))}
            </Carousel>
            <h2>{name},</h2>
            <h2>{age}</h2>
            <h5>{distance}</h5>
            <h5>{text}</h5>
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

export default Card;
