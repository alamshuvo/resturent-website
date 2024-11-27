const setbtnb = document.querySelector(".set-btnb");

setbtnb.onmousemove = function (e) {
    const x = e.pageX - setbtnb.offsetLeft; // Corrected offsetTop typo
    const y = e.pageY - setbtnb.offsetTop; // Fixed the typo
    setbtnb.style.setProperty('--x', x + 'px');
    setbtnb.style.setProperty('--y', y + 'px');
};
