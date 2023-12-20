const mix = require("laravel-mix");

mix.copy(
    "../frontend-storage/dist/pwa/index.html",
    "resources/views/app.blade.php"
)
    .copyDirectory("../frontend-storage/dist/pwa", "public")
    .copyDirectory("../frontend-storage/src/assets", "public/src/assets");
