#!/usr/bin/env bash

SCRIPT_DIR=$(cd $(dirname $0) ; pwd -P)
set -e

cd ${SCRIPT_DIR}/infrastructure

terraform init
terraform apply -auto-approve

