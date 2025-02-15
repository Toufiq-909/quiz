function loadParticles() {
    let screenWidth = window.innerWidth;

    let config = {
        "particles": {
            "number": {
                "value": screenWidth > 1024 ? 300 : screenWidth > 768 ? 150 : 80, // Adjust for different screen sizes
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
                "value": screenWidth > 1024 ? 3 : screenWidth > 768 ? 2 : 1, // Scale size down for mobile
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
                "distance": screenWidth > 1024 ? 100 : screenWidth > 768 ? 80 : 50, // Reduce link distance for small screens
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

    // Destroy existing particles instance
    if (window.pJSDom && window.pJSDom.length) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
    }

    // Reinitialize particles.js
    particlesJS('particles-js', config);
}

// Load on start
loadParticles();

// Reload on resize
window.addEventListener('resize', function () {
    setTimeout(loadParticles, 500); // Delay to prevent excessive reloads
});
