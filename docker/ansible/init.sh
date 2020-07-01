#!/bin/sh

echo "Configure ssh"
# ssh-agent sh
# ssh-add /root/.ssh/id_rsa
ssh-keyscan -H sodata701rt.bbo1t.local >> ~/.ssh/known_hosts
echo "Ssh ok"

tail -f /dev/null