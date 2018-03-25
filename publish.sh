set -e
npm run build
git add lib/*
git commit -m "Prepare to publish"
git push origin master
npm version patch
npm publish
pushd ../el-3270
npm install
popd
