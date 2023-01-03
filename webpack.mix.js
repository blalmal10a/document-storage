const mix = require("laravel-mix");

mix.copy(
    "../frontend-tilte-storage/dist/pwa/index.html",
    "resources/views/app.blade.php"
)
    .copyDirectory("../frontend-tilte-storage/dist/pwa", "public")
    .copyDirectory("../frontend-tilte-storage/src/assets", "public/src/assets");
