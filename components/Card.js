import React, {useEffect, useState} from "react";
import Carousel from "nuka-carousel";
import {animated, to} from "react-spring";

function Card({i, x, y, rot, scale, trans, cards, bind, objs}) {
  const {name, age, distance, text, pics} = objs[i];

  // function test(x) {
  //   if (x === -575) {
  //     console.log("DISLIKE")
  //   } else if (x === 575) {
  //     console.log("LIKE")
  //   }
  // }

  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth + 200)
  }, [])

  const reaction = x => {
    if (x === Number(`-${windowWidth}`) && x !== 0) {
      console.log("DISLIKE")
    } else if (x === windowWidth && x !== 0) {
      console.log("LIKE")
    }
  }

  return (
      <animated.div
          key={i}
          style={{
            transform: to([x, y], (x, y) => `translate3d(${reaction(x),x}px,${y}px,0)`,)
          }}
      >
        <animated.div
            {...bind(i)}
            style={{
              transform: to([rot, scale], trans)
            }}
        >
          <div className="card">
            <Carousel>
              {pics.map((pic, index) => (
                  <img src={pic} key={`${pic + index}`} alt="profilePicture"/>
              ))}
            </Carousel>
            <h2>{name},</h2>
            <h2>{age}</h2>
            <h5>{distance}</h5>
            <h5>{text}</h5>
          </div>
        </animated.div>
      </animated.div>
  )
}

export default Card;
