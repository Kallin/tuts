#!/usr/bin/env bash
eval $(docker-machine env)
PID=$(docker run -d -p 9001:9001 -p 35729:35729 -v "$(pwd)/"app:/my_app/app create_js_tut)
echo $PID > "container.pid"