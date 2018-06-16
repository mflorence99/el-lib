set -e
npm run build
npm version patch
npm publish
sleep 15s
pushd ../el-3270
rm -rf node_modules/ellib
npm install
popd
pushd ../el-term
rm -rf node_modules/ellib
npm install
popd
pushd ../el-file
rm -rf node_modules/ellib
npm install
popd
