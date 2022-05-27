let background1 = "#212121";
let background2 = "#000000";
let particles = 30;

if (screen.width <= 375) {
    particles = 30;
} else if (screen.width <= 800) {
    particles = 80;
} else {
    particles = 100;
}

document.querySelector('.header__mode').addEventListener('click', () => {
    if (document.querySelector('#light') != null) {
        background1 = "#ffffff";
        background2 = "#ffffff";
    } else if (document.querySelector('#night') != null) {
        background1 = "#212121";
        background2 = "#000000";
    }
    particlesJS(
        {
            "particles": {
                "number": {
                    "value": particles,
                    "density": {
                        "enable": false,
                        "value_area": 1500
                    }
                },
                "color": {
                    "value": background1
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": background2
                    },
                    "polygon": {
                        "nb_sides": 6
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 1,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": true
                    }
                },
                "size": {
                    "value": 10,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 16.783216783216783,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 50,
                    "color": background1,
                    "opacity": 0.7,
                    "width": 2
                },
                "move": {
                    "enable": true,
                    "speed": 1.5,
                    "direction": "top",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 5000,
                        "rotateY": 5000
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
                        "enable": false,
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
                        "distance": 225,
                        "size": 9,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
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
    
});
particlesJS(
    {
        "particles": {
            "number": {
                "value": particles,
                "density": {
                    "enable": false,
                    "value_area": 1500
                }
            },
            "color": {
                "value": background1
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": background2
                },
                "polygon": {
                    "nb_sides": 6
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": true
                }
            },
            "size": {
                "value": 10,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 16.783216783216783,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 50,
                "color": background1,
                "opacity": 0.7,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 1.5,
                "direction": "top",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 5000,
                    "rotateY": 5000
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
                    "enable": false,
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
                    "distance": 225,
                    "size": 9,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
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