import { useMenu } from "@helpers";
import { useRef, useEffect } from "react";

const param = {
  BUBBLE_MIN_SIZE: 10,
  BUBBLE_MAX_SIZE: 60,
  BUBBLE_PROBABILITY: 1 / 1000,
  BUBBLE_MIN_SPEED: 0.01,
  BUBBLE_MAX_SPEED: 0.3,
  BUBBLE_COLOR: "#7655FE",
  BUBBLE_LINE_WIDTH: 5,
  BUBBLE_FILL_PROBABILITY: 0.3,
  OPACITY: 0.3,
  BLUR: 5,
};

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const Background = () => {
  const canvasRef = useRef();
  const { isMenuOpen } = useMenu();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const bubbleArray = [];

    class Bubble {
      constructor({ init = false } = {}) {
        this.radius = random(param.BUBBLE_MIN_SIZE, param.BUBBLE_MAX_SIZE);
        this.filled = Math.random() < param.BUBBLE_FILL_PROBABILITY;
        this.speed = random(param.BUBBLE_MIN_SPEED, param.BUBBLE_MAX_SPEED);
        this.position = {
          x: random(-this.radius, canvas.width + this.radius),
          y: init
            ? random(-this.radius, canvas.height + this.radius)
            : canvas.height + this.radius,
        };
      }

      update() {
        this.position.y -= this.speed;
      }

      draw() {
        ctx.globalAlpha = this.filled ? param.OPACITY / 2 : param.OPACITY;
        ctx.filter = `blur(${param.BLUR}px)`;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);

        if (!this.filled) {
          ctx.strokeStyle = param.BUBBLE_COLOR;
          ctx.stroke();
          ctx.lineWidth = param.BUBBLE_LINE_WIDTH;
        }

        if (this.filled) {
          ctx.fill();
          ctx.fillStyle = param.BUBBLE_COLOR;
        }
      }
    }

    function init() {
      resize();
      for (let i = 0, max = canvas.height / 200; i < max; i++) {
        bubbleArray.push(new Bubble({ init: true }));
      }
    }

    function resize() {
      const size = canvas.getBoundingClientRect();
      canvas.width = size.width;
      canvas.height = size.height;
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < param.BUBBLE_PROBABILITY) {
        bubbleArray.push(new Bubble());
      }

      for (let i = 0, { length } = bubbleArray; i < length; i++) {
        bubbleArray[i].update();
        bubbleArray[i].draw();

        if (bubbleArray[i].position.y + bubbleArray[i].radius < 0) {
          bubbleArray.splice(i, 1);
          i--;
          length--;
        }
      }

      requestAnimationFrame(animate);
    }

    init();
    window.addEventListener("resize", resize);
    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 hidden lg:block"
      style={{
        height: "100vh",
        width: "18rem",
        zIndex: -100,
      }}
    />
  );
};

export default Background;
