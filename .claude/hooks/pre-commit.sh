#!/bin/sh

echo "🔍 Running checks..."

npm run lint
npm run type-check
npm run test