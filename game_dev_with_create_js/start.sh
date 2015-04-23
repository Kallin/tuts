#!/usr/bin/env bash
eval $(docker-machine env)
docker run -ti -p 9001:9001 -p 35729:35729 -v /Users/kallin/dev/tuts/game_dev_with_create_js/app:/my_app/app create_js_tut