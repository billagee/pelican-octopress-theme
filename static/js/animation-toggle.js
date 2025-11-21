/* Animation Toggle Control */
(function() {
    // Add CSS animation for pulsing effect and sparkle
    var style = document.createElement('style');
    style.textContent = `
        @keyframes halloween-pulse {
            0%, 100% {
                box-shadow: 0 2px 5px rgba(0,0,0,0.3), 0 0 10px rgba(255,102,0,0.5);
                transform: scale(1);
            }
            50% {
                box-shadow: 0 2px 10px rgba(0,0,0,0.4), 0 0 20px rgba(255,102,0,0.8), 0 0 30px rgba(255,136,51,0.6);
                transform: scale(1.05);
            }
        }
        @keyframes sparkle {
            0%, 100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0) rotate(0deg);
            }
            50% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1) rotate(180deg);
            }
        }
        #animation-toggle-btn {
            position: relative;
            overflow: visible;
        }
        #animation-toggle-btn.pulse {
            animation: halloween-pulse 1s ease-in-out;
        }
        #animation-toggle-btn:hover {
            animation: none !important;
        }
        #animation-toggle-btn::before {
            content: '✨';
            position: absolute;
            top: -10px;
            right: -10px;
            font-size: 20px;
            opacity: 0;
            pointer-events: none;
            z-index: 1;
        }
        #animation-toggle-btn.sparkle::before {
            animation: sparkle 0.6s ease-in-out;
        }
    `;
    document.head.appendChild(style);

    // Function to trigger occasional pulse
    function triggerPulse() {
        var btn = document.getElementById('animation-toggle-btn');
        if (btn) {
            btn.classList.add('pulse');
            setTimeout(function() {
                btn.classList.remove('pulse');
            }, 1000);
        }
    }

    // Function to trigger sparkle effect
    function triggerSparkle() {
        var btn = document.getElementById('animation-toggle-btn');
        if (btn) {
            btn.classList.add('sparkle');
            setTimeout(function() {
                btn.classList.remove('sparkle');
            }, 600);
        }
    }

    // Check if animations should be enabled (default: false, unless user has enabled them)
    var animationsEnabled = localStorage.getItem('halloween-animations-enabled') === 'true';

    // Function to toggle animations
    function toggleAnimations() {
        animationsEnabled = !animationsEnabled;
        localStorage.setItem('halloween-animations-enabled', animationsEnabled);
        applyAnimationState();
        updateButtonText();
    }

    // Function to apply the current animation state
    function applyAnimationState() {
        var elements = document.querySelectorAll('img[src*="data:image/gif"]');
        elements.forEach(function(el) {
            if (animationsEnabled) {
                el.style.display = 'block';
            } else {
                el.style.display = 'none';
            }
        });
    }

    // Function to update button text
    function updateButtonText() {
        var btn = document.getElementById('animation-toggle-btn');
        if (btn) {
            btn.textContent = animationsEnabled ? '👻 Disable Halloween Animations' : '👻 Enable Halloween Animations';
        }
    }

    // Create and add toggle button to the page
    function createToggleButton() {
        var button = document.createElement('button');
        button.id = 'animation-toggle-btn';
        button.style.position = 'fixed';
        button.style.bottom = '20px';
        button.style.right = '20px';
        button.style.zIndex = '10000';
        button.style.padding = '10px 15px';
        button.style.backgroundColor = '#ff6600';
        button.style.color = '#fff';
        button.style.border = '2px solid #000';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.fontFamily = 'Arial, sans-serif';
        button.style.fontSize = '14px';
        button.style.fontWeight = 'bold';
        button.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
        button.style.transition = 'all 0.3s ease';
        button.style.display = 'none'; // Hide the Halloween animations button

        // Hover effects
        button.onmouseover = function() {
            this.style.backgroundColor = '#ff8833';
            this.style.transform = 'scale(1.05)';
        };
        button.onmouseout = function() {
            this.style.backgroundColor = '#ff6600';
            this.style.transform = 'scale(1)';
        };

        button.onclick = toggleAnimations;

        document.body.appendChild(button);
        updateButtonText();
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            createToggleButton();
            applyAnimationState();
            // Start occasional pulsing after button is created
            setInterval(triggerPulse, 8000); // Pulse every 8 seconds
            // Start sparkle effect every 3 seconds
            setInterval(triggerSparkle, 3000);
        });
    } else {
        createToggleButton();
        applyAnimationState();
        // Start occasional pulsing after button is created
        setInterval(triggerPulse, 8000); // Pulse every 8 seconds
        // Start sparkle effect every 3 seconds
        setInterval(triggerSparkle, 3000);
    }

    // Also check periodically for new animations added to the page
    setInterval(applyAnimationState, 1000);
})();
