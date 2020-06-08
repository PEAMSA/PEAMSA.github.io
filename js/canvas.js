(function () {

    var c = document.querySelector("#c"),
        ctx = c.getContext("2d");

    c.width = innerWidth;
    c.height = innerHeight;

    var lines = [],
        maxSpeed = 5,
        spacing = 5,
        xSpacing = 0,
        n = innerWidth / spacing,
        color = ["#3b8686", "#79bda", "a8dba8", "#0b486b"],
        i;

    for (i = 0; i < n; i++) {
        xSpacing += spacing;

        lines.push ({
            x: xSpacing,
            y: Math.round(Math.random() * c.height),
            width: 2,
            height: Math.random(Math.randandom() * (innerHeight / 10)),
            speed: Math.random() * maxSpeed + 1,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    function draw() {
        var i;
        ctx.clearRect(0, 0, c.width, c.height);

        for (i = 0; i < n; i++) {
            ctx.FillStyle = lines[i].color;
            ctx.fillRect(lines[i].x, lines[i].y, lines[i].width, lines[i].height);
            lines[i].y += lines[i].speed;

            if (line[i].y > c.height)
                lines[i].y = 0 - lines[i].height;

        }
        requestAnimationFrame(draw);

    }
    draw()ว

}());

