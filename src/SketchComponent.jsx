import React, { useEffect, useRef, useState } from 'react';
import p5 from 'p5';
import opentype from 'opentype.js';

const SocialShosha = () => {
  const canvasRef = useRef(null);
  const p5InstanceRef = useRef(null);
  const [starterText, setStarterText] = useState('SOCIAL\nSHOSHA');
  const [widgetOn, setWidgetOn] = useState(true);

  useEffect(() => {
    const sketch = (p) => {
      let tFont = [];
      let tFontData = [];
      let myFont = [];
      let tFontFactor = [0.73, 0.75, 0.7, 0.675, 0.7, 0.82, 0.75, 0.95, 0.5];
      let inputText = [];
      let bkgdColor = '#000000';
      let textColor = '#ffffff';
      let sideSolidColor = '#f26666';
      let pgTextSize = 100;
      let frate = 30;
      let res = 8;
      let extrudeType = 1;
      let tumbleDepthLength = -75;
      let wWindow, wWindowMin, wWindowMax;
      let scaler = 0.6;
      let cwidth, cheight;
      let enableOrbit = true;
      let orbitOnToggle = false;
      let fontCount = 9;
      let thisDensity = 1;
      let selFont = 0;
      let baseAnimA = 60;
      let animA = 60; // Intro frames
      let baseAnimB = 0;
      let animB = animA; // Stay frames
      let baseAnimC = 60;
      let animC = animB + 60; // Outro frames
      let ticker = 0;

      // CoreBase with animation
      let coreBase = {
        lines: [],
        setup(textLines) {
          this.lines = textLines.map((text, i) => ({
            text,
            yPos: i * pgTextSize - (textLines.length - 1) * pgTextSize * 0.5,
          }));
        },
        run() {
          p.push();
          p.translate(0, 0, 0);

          // Animation logic
          let totalFrames = animA + animB + animC;
          let t = (ticker % totalFrames) / totalFrames;
          let scale, zOffset;

          if (ticker < animA) {
            // Intro: Scale up from 0 to 1
            let introT = ticker / animA;
            scale = p.lerp(0, 1, introT);
            zOffset = p.lerp(-200, 0, introT);
          } else if (ticker < animA + animB) {
            // Stay: Hold position
            scale = 1;
            zOffset = 0;
          } else {
            // Outro: Scale down and move back
            let outroT = (ticker - (animA + animB)) / animC;
            scale = p.lerp(1, 0, outroT);
            zOffset = p.lerp(0, -200, outroT);
          }

          p.scale(scale);
          p.translate(0, 0, zOffset);

          p.fill(textColor);
          p.noStroke();
          p.textFont(tFont[selFont]);
          p.textSize(pgTextSize);
          p.textAlign(p.CENTER, p.CENTER);

          this.lines.forEach((line) => {
            // 3D extrusion with animation
            for (let z = 0; z > tumbleDepthLength; z -= 5) {
              p.push();
              p.translate(0, line.yPos, z);
              p.fill(z === 0 ? textColor : sideSolidColor);
              p.text(line.text, 0, 0);
              p.pop();
            }
          });

          p.pop();

          // Increment ticker for animation
          ticker = (ticker + 1) % totalFrames;
        },
        liveReset() {
          this.setup(inputText);
          ticker = 0;
        },
        tickerReset() {
          ticker = 0;
        },
      };

      p.preload = () => {
        try {
          tFont[0] = p.loadFont('/boost_resources/Milligram-Medium.ttf', () => {
            console.log('Font loaded successfully');
          }, () => {
            console.error('Failed to load font');
          });
          tFontData[0] = p.loadBytes('/boost_resources/Milligram-Medium.ttf', () => {
            console.log('Font data loaded');
          }, () => {
            console.error('Failed to load font data');
          });
        } catch (e) {
          console.error('Preload error:', e);
        }
      };

      p.setup = () => {
        try {
          const canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
          canvas.parent(canvasRef.current);
          thisDensity = p.pixelDensity();
          cwidth = p.width;
          cheight = p.height;

          if (tFontData[0]?.bytes) {
            myFont[0] = opentype.parse(tFontData[0].bytes.buffer);
          } else {
            console.warn('Font data not available');
          }

          wWindowMin = p.width / 8;
          wWindowMax = p.width;
          wWindow = p.map(scaler, 0, 1, wWindowMin, wWindowMax);

          p.frameRate(frate);
          p.curveDetail(res);
          p.strokeJoin(p.ROUND);
          p.strokeCap(p.ROUND);
          p.rectMode(p.CENTER);

          p.setText();
        } catch (e) {
          console.error('Setup error:', e);
        }
      };

      p.setText = () => {
        inputText = starterText.split('\n');
        coreBase.setup(inputText);
      };

      p.draw = () => {
        try {
          if (extrudeType === 0) {
            p.ortho();
          } else {
            p.perspective();
          }

          p.background(bkgdColor);

          if (enableOrbit && orbitOnToggle) {
            p.orbitControl();
          }

          coreBase.run();
        } catch (e) {
          console.error('Draw error:', e);
        }
      };

      p.windowResized = () => {
        p.resizeForPreview();
      };

      p.resizeForPreview = () => {
        try {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
          cwidth = p.width;
          cheight = p.height;
          wWindowMin = p.width / 8;
          wWindowMax = p.width;
          wWindow = p.map(scaler, 0, 1, wWindowMin, wWindowMax);
          p.setText();
        } catch (e) {
          console.error('Resize error:', e);
        }
      };
    };

    p5InstanceRef.current = new p5(sketch);
    return () => {
      p5InstanceRef.current.remove();
    };
  }, []);

  useEffect(() => {
    if (p5InstanceRef.current) {
      p5InstanceRef.current.setText();
    }
  }, [starterText]);

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center">
      <div ref={canvasRef} className="w-full h-full" />
      {widgetOn && (
        <div
          id="widget"
          className="absolute bottom-10 left-10 bg-gray-800 bg-opacity-75 p-4 rounded-lg text-white"
          onMouseEnter={() => p5InstanceRef.current && (p5InstanceRef.current.enableOrbit = false)}
          onMouseLeave={() => p5InstanceRef.current && (p5InstanceRef.current.enableOrbit = true)}
        >
          <textarea
            id="textArea"
            value={starterText}
            onChange={(e) => setStarterText(e.target.value)}
            className="bg-gray-900 text-white p-2 rounded resize-none"
            rows="4"
            cols="20"
          />
        </div>
      )}
    </div>
  );
};

export default SocialShosha;