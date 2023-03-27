#!/bin/sh
UUID=${UUID:-'1c9807bb-355e-45fa-aeee-f046f7a37726'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
