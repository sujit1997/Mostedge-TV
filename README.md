<<<<<<< HEAD
# Mostedge-TV
=======
# MostedgeTV Automation (TypeScript + WebdriverIO)

This repository contains a basic scaffold for Android TV automation using WebdriverIO and TypeScript.

## Project structure

- wdio.conf.ts - WebdriverIO configuration (TypeScript)
- test/specs - test specs (TypeScript)
- src/pages - page objects
- tsconfig.json - TypeScript config
- package.json - scripts and devDependencies (placeholders)

## Quick start

1. Install dependencies:
   npm install

2. Install Appium (if not already installed) and ensure an Android TV device/emulator is available:
   npm install -g appium

3. Update capabilities in `wdio.conf.ts` to match your device (udid, platformVersion, appPackage, appActivity).

4. Run tests:
   npm test

Notes:
- This is a starting scaffold. Update selectors, capabilities, and tests to reflect the real app.
- Consider using secure storage for credentials and CI integration for automated runs.
>>>>>>> 3e25179 (new framework)
