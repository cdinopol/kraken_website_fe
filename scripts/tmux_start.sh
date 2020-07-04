#!/bin/bash

tmux new-session -A -d -s kraken_web
tmux new-window -t kraken_web -n "web_fe"
tmux send-key -t kraken_web:web_fe "cd ~/app/kraken_website_fe" C-m
tmux send-key -t kraken_web:web_fe "docker-compose up --build" C-m
