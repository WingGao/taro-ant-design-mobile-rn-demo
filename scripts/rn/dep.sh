#!/usr/bin/env bash
PROJ="$( cd "$(dirname "$0")"/../../ ; pwd -P )"
echo $PROJ

cd $PROJ/.rn_temp
# 去除重复的包
ls node_modules | xargs -I{} rm -fr $PROJ/.rn_temp/ant-design-mobile-rn/node_modules/{}

