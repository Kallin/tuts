#!/usr/bin/env bash
docker stop $(cat container.pid)
rm "container.pid"