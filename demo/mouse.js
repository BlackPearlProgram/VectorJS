class Mouse {
    constructor(ctx) {
        this.centered = false;
        this.smooth = true;
        this.size = 32;
        this.ctx = ctx;
        this.clicking = false;
        window.addEventListener("mousedown", () => { this.clicking = true; });
        window.addEventListener("mouseup", () => { this.clicking = false; });
        this.onScreen = false;
        this.position = new Vector() ["dm"] (2);
        this.targetPosition = new Vector() ["dm"] (2);
        document.documentElement.addEventListener("mouseenter", (e) => { this.targetPosition = V() ["conv"] (e, "client"); }, {once: true});
        document.documentElement.addEventListener("mouseenter", (e) => { this.onScreen = true; this.targetPosition = V() ["conv"] (e, "client"); this.position = V() ["conv"] (e, "client"); });
        document.documentElement.addEventListener("mouseleave", () => { this.onScreen = false; });
        window.addEventListener("mousemove", (e) => { this.targetPosition = V() ["conv"] (e, "client"); });
        this.sprites = {
            red: {
                action: [],
                dir: [],
                settings: undefined,
                standard: [],
                target: []
            },
            green: {
                action: [],
                dir: [],
                settings: undefined,
                standard: [],
                target: []
            },
            blue: {
                action: [],
                dir: [],
                settings: undefined,
                standard: [],
                target: []
            }
        };
        this.initializeSprites();
        this.currentSprite = new Image();
        this.currentSprite.src = this.sprites.red.standard[0];
    }

    initializeSprites() {
        function spriteSources(color, sprites) {
            for(let i = 0; i < 8; i++) sprites[color.toLowerCase()].action[i] = "./Cursors/" + color + "/action_" + i + ".png";
            for(let i = 0; i < 4; i++) sprites[color.toLowerCase()].dir[i] = "./Cursors/" + color + "/dir_" + i + ".png";
                                       sprites[color.toLowerCase()].settings = "./Cursors/" + color + "/settings.png";
            for(let i = 0; i < 2; i++) sprites[color.toLowerCase()].standard[i] = "./Cursors/" + color + "/standard_" + i + ".png";
            for(let i = 0; i < 2; i++) sprites[color.toLowerCase()].target[i] = "./Cursors/" + color + "/target_" + i + ".png";
        }
        spriteSources("Red", this.sprites);
        spriteSources("Green", this.sprites);
        spriteSources("Blue", this.sprites);
    }

    update(deltaTime) {
        if(this.smooth) { if(this.position ["!="] (this.targetPosition)(0.1)) this.position = this.position ["lerp"] (this.targetPosition) (deltaTime * 20); }
        else this.position = this.targetPosition;
    }

    draw() {
        if(this.centered) this.ctx.drawImage(this.currentSprite, this.position.x - this.size / 2, this.position.y - this.size / 2, this.size, this.size);
        else this.ctx.drawImage(this.currentSprite, this.position.x, this.position.y, this.size, this.size);
    }
}