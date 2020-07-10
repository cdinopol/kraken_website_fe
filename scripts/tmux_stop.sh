#!/bin/bash

tmux send-key -t kraken_web:web_fe C-c
sleep 5
tmux send-key -t kraken_web:web_fe C-d
