export const hexagon = {
   options: {
     particles: {
       color: {
         value: "#0000ff",
         animation: {
           enable: true,
           speed: 10
         }
       },
       effect: {
         type: "trail",
         options: {
           trail: {
             length: 50,
             minWidth: 4
           }
         }
       },
       move: {
         direction: "none",
         enable: true,
         outModes: {
           default: "destroy"
         },
         path: {
           clamp: false,
           enable: true,
           delay: {
             value: 0
           },
           generator: "polygonPathGenerator",
           options: {
             sides: 6,
             turnSteps: 30,
             angle: 30
           }
         },
         random: false,
         speed: 3,
         straight: false
       },
       number: {
         value: 0
       },
       opacity: {
         value: 1
       },
       shape: {
         type: "circle"
       },
       size: {
         value: 2
       }
     },
     background: {
       color: "#000"
     },
     fullScreen: {
       zIndex: -1
     },
     emitters: {
       direction: "none",
       rate: {
         quantity: 1,
         delay: 0.25
       },
       size: {
         width: 0,
         height: 0
       },
       position: {
         x: 50,
         y: 50
       }
     }
   }
}

export const links = {
  background: {
    color: {
      value: "",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  fullScreen: {
      enable: false, // Disable fullscreen
  },
  particles: {
    color: {
      value: ["#2962ff", '#00bfa5'],
    },
    links: {
      color: "#888888",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
}

export const links2 = {
   fpsLimit: 60,
   particles: {
     number: {
       value: 88,
       density: {
         enable: true,
         value_area: 700
       }
     },
     color: {
       value: ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
     },
     shape: {
       type: "circle",
       stroke: {
         width: 0,
         color: "#000000"
       },
       polygon: {
         nb_sides: 15
       }
     },
     opacity: {
       value: 1,
       random: false,
       anim: {
         enable: false,
         speed: 1.5,
         opacity_min: 0.15,
         sync: false
       }
     },
     size: {
       value: 2.5,
       random: false,
       anim: {
         enable: true,
         speed: 2,
         size_min: 0.15,
         sync: false
       }
     },
     line_linked: {
       enable: true,
       distance: 110,
       color: "#33b1f8",
       opacity: 0.25,
       width: 1
     },
     move: {
       enable: true,
       speed: 1.6,
       direction: "none",
       random: false,
       straight: false,
       out_mode: "out",
       bounce: false,
       attract: {
         enable: false,
         rotateX: 600,
         rotateY: 1200
       }
     }
   },
   interactivity: {
     detect_on: "canvas",
     events: {
       onhover: {
         enable: false,
         mode: "repulse"
       },
       onclick: {
         enable: false,
         mode: "push"
       },
       resize: true
     },
     modes: {
       grab: {
         distance: 400,
         line_linked: {
           opacity: 1
         }
       },
       bubble: {
         distance: 400,
         size: 40,
         duration: 2,
         opacity: 8,
         speed: 3
       },
       repulse: {
         distance: 200,
         duration: 0.4
       },
       push: {
         particles_nb: 4
       },
       remove: {
         particles_nb: 2
       }
     }
   },
   retina_detect: true
}

export const gradients = {
   fpsLimit: 60,
   fullScreen: { enable: false },
   particles: {
     number: {
       value: 50
     },
     shape: {
       type: "circle"
     },
     opacity: {
       value: 0.5
     },
     size: {
       value: 400,
       random: {
         enable: true,
         minimumValue: 200
       }
     },
     move: {
       enable: true,
       speed: 2,
       direction: "top",
       outModes: {
         default: "out",
         top: "destroy",
         bottom: "none"
       }
     }
   },
   interactivity: {
     detectsOn: "canvas",
     events: {
       resize: true
     }
   },
   style: {
     filter: "blur(50px)"
   },
   detectRetina: true,
   themes: [
     {
       name: "light",
       default: {
         value: true,
         mode: "light"
       },
       options: {
         background: {
           color: "#f7f8ef"
         },
         particles: {
           color: {
             value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
           }
         }
       }
     },
     {
       name: "dark",
       default: {
         value: true,
         mode: "dark"
       },
       options: {
         background: {
           color: "#080710"
         },
         particles: {
           color: {
             value: ["0d47a1", "#000000",  "#311b92", "#000000", "#1a237e"]
           }
         }
       }
     }
   ],
   emitters: {
     direction: "top",
     position: {
       x: 50,
       y: 150
     },
     rate: {
       delay: 0.2,
       quantity: 2
     },
     size: {
       width: 100,
       height: 0
     }
   }
}