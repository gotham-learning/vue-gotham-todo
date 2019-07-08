#!/bin/bash

SCRIPT_DIR=$(cd $(dirname $0)/gotham-todo ; pwd -P)
TASK=$1
ARGS=${@:2}

set -e

#Utils

die() {
  echo $1
  exit 1
}

docker_run() {
  local image_id
  if [[ -z "${image_id}" ]]; then
    echo -n "Building toolchain container; this might take a while..."
    image_id=$(docker build ${DOCKER_BUILD_ARGS} . -q)
    echo " Done."
  fi

  if runs_inside_gocd; then
    local args="-v godata:/godata -w $(pwd)"
  else
    local args="-it -v $(pwd):/workspace:cached -w /workspace"
  fi

  DOCKER_ARGS="${DOCKER_ARGS} -v ${HOME}/.aws:/root/.aws"
  docker run --rm \
             --hostname $(hostname) \
             --env-file <(env | grep AWS_) \
             ${args} ${DOCKER_ARGS} ${image_id} "$@"
}

runs_inside_gocd() {
  test -n "${GO_JOB_NAME}"
}

node() {
   cd ${SCRIPT_DIR}

   DOCKER_BUILD_ARGS="-f ${SCRIPT_DIR}/Dockerfile"
   docker_run "$@"

   local exit=$?
   cd - >/dev/null
   return ${exit}
}

help_install="install dependencies"
task_install() {
  node yarn
}

help_lint="lint test files"
task_lint() {
  node yarn lint
}

help_test="run all unit tests"
task_test() {
    node yarn test
}

help_generate="generate static files"
task_generate() {
    node yarn generate
}

list_all_helps() {
  compgen -v | egrep "^help_.*"
}

NEW_LINE=$'\n'
if type -t "task_$TASK" &>/dev/null; then
  task_$TASK $ARGS
else
  echo "usage: $0 <task> [<..args>]"
  echo "task:"

  HELPS=""
  for help in $(list_all_helps)
  do

    HELPS="$HELPS    ${help/help_/} |-- ${!help}$NEW_LINE"
  done

  echo "$HELPS" | column -t -s "|"
  exit
fi
