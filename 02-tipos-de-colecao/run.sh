#! /bin/sh

echo 'Transpilando Typescript'
echo '-----------------------------------'
npx tsc ./index.ts

echo 'Executando javascript'
echo '-----------------------------------'
node ./index.js

echo 'Fim'