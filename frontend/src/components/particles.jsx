import Particles from "react-tsparticles"
import {loadFull} from "tsparticles"

function PP()
{
    async function loadParticles(main){
        await loadFull(main)

    }

    return(
        <Particles
        id="tsparticles"
        init={loadParticles}
        options={{
            "autoPlay": true,
            "background": {
              "color": {
                "value": "#000"
              },
              "image": "",
              "position": "",
              "repeat": "",
              "size": "",
              "opacity": 1
            },
            "backgroundMask": {
              "composite": "destination-out",
              "cover": {
                "color": {
                  "value": "#fff"
                },
                "opacity": 1
              },
              "enable": false
            },
            "clear": true,
            "defaultThemes": {},
            "delay": 0,
            "fullScreen": {
              "enable": true,
              "zIndex": -1
            },
            "detectRetina": true,
            "duration": 0,
            "fpsLimit": 120,
            "interactivity": {
              "detectsOn": "window",
              "events": {
                "onClick": {
                  "enable": false,
                  "mode": []
                },
                "onDiv": {
                  "selectors": [],
                  "enable": false,
                  "mode": [],
                  "type": "circle"
                },
                "onHover": {
                  "enable": false,
                  "mode": "trail",
                  "parallax": {
                    "enable": false,
                    "force": 2,
                    "smooth": 10
                  }
                },
                "resize": {
                  "delay": 0.5,
                  "enable": true
                }
              },
              "modes": {
                "trail": {
                  "delay": 0.005,
                  "pauseOnStop": true,
                  "quantity": 5,
                  "particles": {
                    "color": {
                      "value": "#ff0000",
                      "animation": {
                        "enable": true,
                        "speed": 400,
                        "sync": true
                      }
                    },
                    "collisions": {
                      "enable": false
                    },
                    "links": {
                      "enable": false
                    },
                    "move": {
                      "outModes": {
                        "default": "destroy"
                      },
                      "speed": 2
                    },
                    "size": {
                      "value": {
                        "min": 1,
                        "max": 5
                      },
                      "animation": {
                        "enable": true,
                        "speed": 5,
                        "sync": true,
                        "startValue": "min",
                        "destroy": "max"
                      }
                    }
                  }
                },
                "attract": {
                  "distance": 200,
                  "duration": 0.4,
                  "easing": "ease-out-quad",
                  "factor": 1,
                  "maxSpeed": 50,
                  "speed": 1
                },
                "bounce": {
                  "distance": 200
                },
                "bubble": {
                  "distance": 200,
                  "duration": 0.4,
                  "mix": false,
                  "divs": {
                    "distance": 200,
                    "duration": 0.4,
                    "mix": false,
                    "selectors": []
                  }
                },
                "connect": {
                  "distance": 80,
                  "links": {
                    "opacity": 0.5
                  },
                  "radius": 60
                },
                "grab": {
                  "distance": 100,
                  "links": {
                    "blink": false,
                    "consent": false,
                    "opacity": 1
                  }
                },
                "push": {
                  "default": true,
                  "groups": [],
                  "quantity": 4
                },
                "remove": {
                  "quantity": 2
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4,
                  "factor": 100,
                  "speed": 1,
                  "maxSpeed": 50,
                  "easing": "ease-out-quad",
                  "divs": {
                    "distance": 200,
                    "duration": 0.4,
                    "factor": 100,
                    "speed": 1,
                    "maxSpeed": 50,
                    "easing": "ease-out-quad",
                    "selectors": []
                  }
                },
                "slow": {
                  "factor": 3,
                  "radius": 200
                },
                "light": {
                  "area": {
                    "gradient": {
                      "start": {
                        "value": "#ffffff"
                      },
                      "stop": {
                        "value": "#000000"
                      }
                    },
                    "radius": 1000
                  },
                  "shadow": {
                    "color": {
                      "value": "#000000"
                    },
                    "length": 2000
                  }
                }
              }
            },
            "manualParticles": [],
            "particles": {
              "bounce": {
                "horizontal": {
                  "value": 1
                },
                "vertical": {
                  "value": 1
                }
              },
              "collisions": {
                "absorb": {
                  "speed": 2
                },
                "bounce": {
                  "horizontal": {
                    "value": 1
                  },
                  "vertical": {
                    "value": 1
                  }
                },
                "enable": false,
                "maxSpeed": 50,
                "mode": "bounce",
                "overlap": {
                  "enable": true,
                  "retries": 0
                }
              },
              "color": {
                "value": "#ff0000",
                "animation": {
                  "h": {
                    "count": 0,
                    "enable": true,
                    "speed": 50,
                    "decay": 0,
                    "delay": 0,
                    "sync": false,
                    "offset": 0
                  },
                  "s": {
                    "count": 0,
                    "enable": false,
                    "speed": 1,
                    "decay": 0,
                    "delay": 0,
                    "sync": true,
                    "offset": 0
                  },
                  "l": {
                    "count": 0,
                    "enable": false,
                    "speed": 1,
                    "decay": 0,
                    "delay": 0,
                    "sync": true,
                    "offset": 0
                  }
                }
              },
              "effect": {
                "close": true,
                "fill": true,
                "options": {},
                "type": []
              },
              "groups": {},
              "move": {
                "angle": {
                  "offset": 0,
                  "value": 90
                },
                "attract": {
                  "distance": 200,
                  "enable": false,
                  "rotate": {
                    "x": 3000,
                    "y": 3000
                  }
                },
                "center": {
                  "x": 50,
                  "y": 50,
                  "mode": "percent",
                  "radius": 0
                },
                "decay": 0,
                "distance": {},
                "direction": "none",
                "drift": 0,
                "enable": true,
                "gravity": {
                  "acceleration": 9.81,
                  "enable": false,
                  "inverse": false,
                  "maxSpeed": 50
                },
                "path": {
                  "clamp": true,
                  "delay": {
                    "value": 0
                  },
                  "enable": false,
                  "options": {}
                },
                "outModes": {
                  "default": "out",
                  "bottom": "out",
                  "left": "out",
                  "right": "out",
                  "top": "out"
                },
                "random": false,
                "size": false,
                "speed": 2,
                "spin": {
                  "acceleration": 0,
                  "enable": false
                },
                "straight": false,
                "trail": {
                  "enable": false,
                  "length": 10,
                  "fill": {}
                },
                "vibrate": false,
                "warp": false
              },
              "number": {
                "density": {
                  "enable": true,
                  "width": 1920,
                  "height": 1080
                },
                "limit": {
                  "mode": "delete",
                  "value": 0
                },
                "value": 100
              },
              "opacity": {
                "value": {
                  "min": 0.3,
                  "max": 0.8
                },
                "animation": {
                  "count": 0,
                  "enable": true,
                  "speed": 0.5,
                  "decay": 0,
                  "delay": 0,
                  "sync": false,
                  "mode": "auto",
                  "startValue": "random",
                  "destroy": "none"
                }
              },
              "reduceDuplicates": false,
              "shadow": {
                "blur": 0,
                "color": {
                  "value": "#000"
                },
                "enable": false,
                "offset": {
                  "x": 0,
                  "y": 0
                }
              },
              "shape": {
                "close": true,
                "fill": true,
                "options": {},
                "type": "circle"
              },
              "size": {
                "value": {
                  "min": 1,
                  "max": 3
                },
                "animation": {
                  "count": 0,
                  "enable": true,
                  "speed": 3,
                  "decay": 0,
                  "delay": 0,
                  "sync": false,
                  "mode": "auto",
                  "startValue": "random",
                  "destroy": "none"
                }
              },
              "stroke": {
                "width": 3,
                "color": {
                  "value": "#A239A2",
                  "animation": {
                    "h": {
                      "count": 0,
                      "enable": false,
                      "speed": 1,
                      "decay": 0,
                      "delay": 0,
                      "sync": true,
                      "offset": 0
                    },
                    "s": {
                      "count": 0,
                      "enable": false,
                      "speed": 1,
                      "decay": 0,
                      "delay": 0,
                      "sync": true,
                      "offset": 0
                    },
                    "l": {
                      "count": 0,
                      "enable": false,
                      "speed": 1,
                      "decay": 0,
                      "delay": 0,
                      "sync": true,
                      "offset": 0
                    }
                  }
                },
                "opacity": 1
              },
              "zIndex": {
                "value": 0,
                "opacityRate": 1,
                "sizeRate": 1,
                "velocityRate": 1
              },
              "destroy": {
                "bounds": {},
                "mode": "none",
                "split": {
                  "count": 1,
                  "factor": {
                    "value": 3
                  },
                  "rate": {
                    "value": {
                      "min": 4,
                      "max": 9
                    }
                  },
                  "sizeOffset": true,
                  "particles": {}
                }
              },
              "roll": {
                "darken": {
                  "enable": false,
                  "value": 0
                },
                "enable": false,
                "enlighten": {
                  "enable": false,
                  "value": 0
                },
                "mode": "vertical",
                "speed": 25
              },
              "tilt": {
                "value": 0,
                "animation": {
                  "enable": false,
                  "speed": 0,
                  "decay": 0,
                  "sync": false
                },
                "direction": "clockwise",
                "enable": false
              },
              "twinkle": {
                "lines": {
                  "enable": true,
                  "frequency": 0.05,
                  "opacity": 1
                },
                "particles": {
                  "enable": true,
                  "frequency": 0.05,
                  "opacity": 1
                }
              },
              "wobble": {
                "distance": 5,
                "enable": false,
                "speed": {
                  "angle": 50,
                  "move": 10
                }
              },
              "life": {
                "count": 0,
                "delay": {
                  "value": 0,
                  "sync": false
                },
                "duration": {
                  "value": 0,
                  "sync": false
                }
              },
              "rotate": {
                "value": 0,
                "animation": {
                  "enable": false,
                  "speed": 0,
                  "decay": 0,
                  "sync": false
                },
                "direction": "clockwise",
                "path": false
              },
              "orbit": {
                "animation": {
                  "count": 0,
                  "enable": false,
                  "speed": 1,
                  "decay": 0,
                  "delay": 0,
                  "sync": false
                },
                "enable": false,
                "opacity": 1,
                "rotation": {
                  "value": 45
                },
                "width": 1
              },
              "links": {
                "blink": false,
                "color": {
                  "value": "random"
                },
                "consent": false,
                "distance": 100,
                "enable": true,
                "frequency": 1,
                "opacity": 1,
                "shadow": {
                  "blur": 5,
                  "color": {
                    "value": "#000"
                  },
                  "enable": false
                },
                "triangles": {
                  "enable": false,
                  "frequency": 1
                },
                "width": 1,
                "warp": false
              },
              "repulse": {
                "value": 0,
                "enabled": false,
                "distance": 1,
                "duration": 1,
                "factor": 1,
                "speed": 1
              }
            },
            "pauseOnBlur": true,
            "pauseOnOutsideViewport": true,
            "responsive": [],
            "smooth": false,
            "style": {},
            "themes": [],
            "zLayers": 100,
            "emitters": [],
            "motion": {
              "disable": false,
              "reduce": {
                "factor": 4,
                "value": true
              }
            }
          }}
        
        />
    )
}

export default PP;
// import Particles from "react-tsparticles";
// import "../styles/pp.css";

// export default function PP() {
//   return (
//     <Particles
//       options={{
//         fullScreen: {
//           enable: true,
//           zIndex: 0
//         },
//         particles: {
//           number: {
//             value: 200,
//             limit: 300,
//             density: {
//               enable: true,
//               value_area: 800
//             }
//           },
//           color: {
//             value: "#ffffff"
//           },
//           shape: {
//             type: "circle",
//             stroke: {
//               width: 0,
//               color: "#000000"
//             },
//             polygon: {
//               nb_sides: 5
//             },
//             image: {
//               src: "images/github.svg",
//               width: 100,
//               height: 100
//             }
//           },
//           opacity: {
//             value: 0.5,
//             random: true,
//             anim: {
//               enable: true,
//               speed: 1,
//               opacity_min: 0.5,
//               sync: false
//             }
//           },
//           size: {
//             value: 30,
//             random: true,
//             anim: {
//               enable: true,
//               speed: 10,
//               size_min: 10,
//               sync: false
//             }
//           },
//           line_linked: {
//             enable: true,
//             distance: 100,
//             color: "#ffffff",
//             opacity: 1,
//             width: 1
//           },
//           move: {
//             enable: true,
//             speed: 3,
//             direction: "none",
//             random: false,
//             straight: false,
//             out_mode: "out",
//             bounce: false,
//             attract: {
//               enable: false,
//               rotateX: 600,
//               rotateY: 1200
//             }
//           }
//         },
//         interactivity: {
//           detect_on: "canvas",
//           events: {
//             onHover: {
//               enable: true,
//               mode: "bubble",
//               parallax: {
//                 enable: false,
//                 force: 60,
//                 smooth: 10
//               }
//             },
//             onClick: {
//               enable: true,
//               mode: "push"
//             },
//             resize: true
//           },
//           modes: {
//             grab: {
//               distance: 400,
//               lineLinked: {
//                 opacity: 1
//               }
//             },
//             bubble: {
//               distance: 400,
//               size: 100,
//               duration: 2,
//               opacity: 1,
//               speed: 2
//             },
//             repulse: {
//               distance: 200
//             },
//             push: {
//               particles_nb: 4
//             },
//             remove: {
//               particles_nb: 2
//             }
//           }
//         },
//         backgroundMask: {
//           enable: true,
//           cover: {
//             color: {
//               value: {
//                 r: 0,
//                 g: 0,
//                 b: 0
//               }
//             }
//           }
//         },
//         retina_detect: true,
//         fps_limit: 60,
//         background: {
//           image: "url('https://particles.js.org/images/background3.jpg')"
//         }
//       }}
//     />
//   );
// }
