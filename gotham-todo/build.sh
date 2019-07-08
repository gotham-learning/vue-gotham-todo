#!/usr/bin/env bash

SCRIPT_DIR=$(cd $(dirname $0) ; pwd -P)
set -e

cd ${SCRIPT_DIR}

rm -rf dist

npm install
npm run generate

