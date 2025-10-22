#!/bin/bash
cd /home/kavia/workspace/code-generation/laser-puzzle-challenge-179068-179079/backend
npm run lint
LINT_EXIT_CODE=$?
if [ $LINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

