particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 300,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": ["#ffffff", "#fce38a", "#f38181"] // Warm star colors
        },
        "shape": {
          "type": "star",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.9,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1.5,
            "opacity_min": 0.2,
            "sync": false
          }
        },
        "size": {
          "value": 2.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 4,
            "size_min": 0.5,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 100,
          "color": "#ffffff",
          "opacity": 0.1,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "bounce",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 200,
            "size": 6,
            "duration": 2,
            "opacity": 0.8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }
);
// Function to initialize particles with responsive settings
function initParticles() {
  const isMobile = window.innerWidth < 768; // Adjust breakpoint as needed
  const particlesConfig = {
    particles: {
      number: {
        value: isMobile ? 50 : 100, // Fewer particles on mobile
        density: {
          enable: true,
          value_area: isMobile ? 600 : 800, // Adjust density for mobile
        },
      },
      color: {
        value: ["#ffffff", "#fce38a", "#f38181"], // Warm star colors
      },
      shape: {
        type: "star",
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.9,
        random: true,
        anim: {
          enable: true,
          speed: 1.5,
          opacity_min: 0.2,
          sync: false,
        },
      },
      size: {
        value: isMobile ? 3 : 2.5, // Slightly larger particles on mobile
        random: true,
        anim: {
          enable: true,
          speed: 4,
          size_min: 0.5,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: isMobile ? 100 : 150, // Shorter lines on mobile
        color: "#ffffff",
        opacity: 0.1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "bounce",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: isMobile ? 150 : 200, // Smaller grab distance on mobile
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: isMobile ? 150 : 200, // Smaller bubble distance on mobile
          size: 6,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        repulse: {
          distance: isMobile ? 100 : 200, // Smaller repulse distance on mobile
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  // Load particles with the updated configuration
  particlesJS("particles-js", particlesConfig);
}

// Initialize particles on page load
initParticles();

// Reinitialize particles on window resize
window.addEventListener("resize", function () {
  particlesJS("particles-js").empty(); // Clear existing particles
  initParticles(); // Reinitialize with new settings
});
