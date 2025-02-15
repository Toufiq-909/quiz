function getParticleConfig() {
    let screenWidth = window.innerWidth;

    return {
        "particles": {
            "number": {
                "value": screenWidth > 768 ? 300 : screenWidth > 480 ? 150 : 80, // Reduce particles for smaller screens
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#ffffff", "#fce38a", "#f38181"]
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
                "value": screenWidth > 768 ? 2.5 : screenWidth > 480 ? 2 : 1.5, // Reduce size for smaller screens
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
                "distance": screenWidth > 768 ? 100 : screenWidth > 480 ? 80 : 60, // Reduce distance on small screens
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
    };
}

// Load particles with initial config
particlesJS('particles-js', getParticleConfig());

// Reload particles on window resize
window.addEventListener('resize', function () {
    particlesJS('particles-js', getParticleConfig());
});
