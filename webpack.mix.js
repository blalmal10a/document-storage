const mix = require("laravel-mix");

mix.copy(
    "../frontend-siruk-storage/dist/pwa/index.html",
    "resources/views/app.blade.php"
)
    .copyDirectory("../frontend-siruk-storage/dist/pwa", "public")
    .copyDirectory("../frontend-siruk-storage/src/assets", "public/src/assets");
