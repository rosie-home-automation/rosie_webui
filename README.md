# rosie_webui
A web interface for the Rosie home automation software.

## Dependencies
1. Node: Only used to download dependencies and build the project. I used `0.12.x`, but I don't think it is picky on the version.
2. Gulp: You can install it globally with `npm install -g gulp`.
3. Bower: You can install it globally with `npm install -g bower`.

## Setup
1. Edit the [config](https://github.com/Olson3R/rosie_webui/blob/master/config/config.json) file.
2. Run `npm install`
3. Run `bower install`
4. Run `gulp setup`

## Running the app
1. You will need to serve the `public/` directory.
  * A simple way to do that is by installing **serve** with `npm install -g serve` and then running `serve public/`.
  * If you are developing, running `gulp watch` is handy to publish any changes.
