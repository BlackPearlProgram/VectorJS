/** @type {HTMLCanvasElement} */
const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style = "position: fixed; left: 0; top: 0;";
const ctx = canvas.getContext("2d");
const mouse = new Mouse(ctx);
const time = new Time();
const center = V(canvas.width/2, canvas.height/2);
ctx.globalCompositeOperation = "source-over";

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    center.x = canvas.width / 2;
    center.y = canvas.height / 2;
});

window.addEventListener("load", () => {
    document.querySelector("body").appendChild(canvas);
});

const particles = [];

function handleParticles() {
    particles.forEach((particle, index) => {
        const scale = 20;
        const smooth = 1000;
        const dist = particle.position ["dist"] (center) / scale;
        const size = smooth / (dist * dist + smooth) * scale + 2;
        if(particle.position ["dist"] (particle.velocity) < 1) particles.splice(index, 1);
        particle.position = particle.position ["lerp"] (particle.velocity)(time.deltaTime);

        //ctx.fillRect(particle.position.x - size * 0.5, particle.position.y - size * 0.5, size, size);
        ctx.beginPath();
        ctx.arc(particle.position.x - size * 0.5, particle.position.y - size * 0.5, size, 0, Math.PI * 2);
        ctx.fill();
    });
}

function createParticle(vector) {
    const dir = Math.random() * Math.PI * 2;
    const impulse = Math.random() * 50;
    particles.push({
        position: V(vector.x, vector.y),
        velocity: V(Math.cos(dir) * impulse + canvas.width * 0.5, Math.sin(dir) * impulse + canvas.height * 0.5)
    });
}

const sources = [];

window.addEventListener("contextmenu", e => e.preventDefault());

window.addEventListener("mousedown", (e) => {
    if(e.button == 2) sources.push(mouse.position);
});

function handleSources() {
    sources.forEach(source => {
        createParticle(source);
    });
}

const img = new Image();
const steps = 10;

function drawImg() {
    img.src = "Backgrounds/" + (Math.floor(time.passedTime / steps) % 15) + ".jpg";
    let biggest, sizeX, sizeY;
    biggest = (canvas.width / img.width > canvas.height / img.height);
    if(biggest) {
        sizeX = canvas.width;
        sizeY = img.height / img.width * canvas.width;
    }
    else {
        sizeX = img.width / img.height * canvas.height;
        sizeY = canvas.height;
    }
    ctx.save();
        ctx.globalCompositeOperation = "source-atop";
        ctx.drawImage(img, center.x - sizeX * 0.5, center.y - sizeY * 0.5, sizeX, sizeY);
    ctx.restore();
}

(function loop() {
    
    window.requestAnimationFrame(loop);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    time.update();

    sources.length = 0;
    const length = 50;
    const speed = 0.4;
    for(let i = 0; i < length; i++) {
        sources.push(V(
            Math.cos(i / length * Math.PI * 2 + time.passedTime * speed),
            Math.sin(i / length * Math.PI * 2 + time.passedTime * speed))
            ["*"] (canvas.width * 0.5, true) ["+"] (center));
    }

    if(mouse.onScreen) {
        mouse.smooth = time.deltaTime < 0.05;
        mouse.update(time.deltaTime);
        if(mouse.clicking) {
            mouse.currentSprite.src = mouse.sprites.red.standard[1];

            for(let i = 0; i < 15; i++) createParticle(mouse.position);

        }

        else mouse.currentSprite.src = mouse.sprites.red.standard[0];

        handleSources();
        handleParticles();
        drawImg();

        ctx.globalCompositeOperation = "source-over";
        mouse.draw();
    } else {

        handleSources();
        handleParticles();
        drawImg();

    }

})();