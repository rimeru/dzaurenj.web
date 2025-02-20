function showInfo(building) {
    console.log('Showing info for building:', building); 
    const infoPanel = document.getElementById(`info-${building}`);
    if (infoPanel) {
        infoPanel.style.display = 'block';
    }
}

function hideInfo(building) {
    console.log('Hiding info for building:', building); 
    const infoPanel = document.getElementById(`info-${building}`);
    if (infoPanel) {
        infoPanel.style.display = 'none';
    }
}
function showInfo(building) {
    const infoPanel = document.getElementById(`info-${building}`);
    if (infoPanel) {
        document.querySelectorAll('.info-panel').forEach(panel => {
            panel.classList.remove('active');
            panel.style.display = 'none';
        });
        
        infoPanel.style.display = 'block';
        infoPanel.classList.add('active');
    }
}

function hideInfo(building) {
    const infoPanel = document.getElementById(`info-${building}`);
    if (infoPanel) {
        infoPanel.classList.remove('active');
        setTimeout(() => {
            if (!infoPanel.classList.contains('active')) {
                infoPanel.style.display = 'none';
            }
        }, 500);
    }
}

const globeWrapper = document.querySelector('.globe-wrapper');
const locationDot = document.querySelector('.location-dot');
let isHovering = false;

globeWrapper.addEventListener('mouseenter', () => {
    isHovering = true;
});

globeWrapper.addEventListener('mouseleave', () => {
    isHovering = false;
    globeWrapper.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

globeWrapper.addEventListener('mousemove', (e) => {
    if (!isHovering) return;

    const rect = globeWrapper.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateY = -((e.clientX - centerX) / rect.width * 20);
    const rotateX = (e.clientY - centerY) / rect.height * 20;

    globeWrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

function adjustMarkerPosition(xOffset, yOffset) {
    locationDot.style.left = `calc(82% + ${xOffset}px)`;
    locationDot.style.top = `calc(45% + ${yOffset}px)`;
}