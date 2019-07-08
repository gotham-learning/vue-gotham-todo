#!/usr/bin/env bash

SCRIPT_DIR=$(cd $(dirname $0) ; pwd -P)
set -e

function terraform_output() {
  cd ${SCRIPT_DIR}/infrastructure
  terraform output $1
  cd - >/dev/null
}

BUCKET_NAME="$(terraform_output "s3_bucket_name")"
BUCKET_URL="http://$(terraform_output "s3_bucket_endpoint")/"

if [ ! -d "${SCRIPT_DIR}/dist" ]; then
  echo "${SCRIPT_DIR}/dist does not exist. Did you run ./build.sh?"
  exit 1
fi

if [ -z "${BUCKET_NAME}" ] || [ -z "${BUCKET_URL}" ]; then
  echo "No terraform outputs found. Did you run ./apply-infrastructure.sh?"
  exit 2
fi

aws s3 sync "${SCRIPT_DIR}/dist" "s3://${BUCKET_NAME}" --delete

echo
echo "-> Success!"
echo "-> Access the website at ${BUCKET_URL}"
