#! /bin/sh
echo 'Transpilando Typescript'
echo '-----------------------------------'
npx tsc ./index.ts

echo 'Executando javascript nativo'
echo '-----------------------------------'
node ./index.js

echo '-----------------------------------'
echo 'FIM'