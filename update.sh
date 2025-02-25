#!/bin/sh

CUR=$(pwd)

CURRENT=$(cd "$(dirname $0)" || exit;pwd)
echo "${CURRENT}"

cd "${CURRENT}" || exit
git pull --prune
result=$?
if [ $result -ne 0 ]; then
  cd "${CUR}" || exit
  exit $result
fi
echo ""
pwd
npx corepack use pnpm@latest && rm -rf node_modules && pnpm up -r && rm -rf node_modules pnpm-lock.yaml && bun i && bun lint-fix && bun run build
result=$?
if [ $result -ne 0 ]; then
  cd "${CUR}" || exit
  exit $result
fi
git commit -am "Bumps node modules" && git push
result=$?
if [ $result -ne 0 ]; then
  cd "${CUR}" || exit
  exit $result
fi

cd "${CUR}" || exit
