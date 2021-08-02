#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const packageFile = `{
  "name": ""@small-tech/",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "license": "AGPL-version-3.0",
  "private": false,
  "engines": {
    "node": ">= 14.0.0",
    "npm": ">= 6.0.0"
  },
  "homepage": "https://github.com/small-tech/",
  "repository": {
    "type": "git",
    "url": "https://github.com/small-tech/"
  },
  "bugs": "https://github.com/small-tech/",
  "funding": {
    "type": "foundation",
    "url": "https://small-tech.org/fund-us/"
  },
  "keywords": [
    "small tech"
  ],
  "author": {
    "name": "Aral Balkan",
    "email": "aral@small-tech.org",
    "url": "https://ar.al"
  },
  "contributors": [

  ],
  "scripts": {
    "dev": "",
    "test": ""
  },
  "dependencies": {

  },
  "devDependencies": {

  }
}
`

const cwd = fs.realpathSync(process.cwd())
fs.writeFileSync(path.join(cwd, 'package.json'), packageFile)
