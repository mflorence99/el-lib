npm run build
git add publish.sh
git add css/*
git add src/*
git commit -m "Prepare to publish"
git push origin master
set -e
npm version patch
npm publish
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
