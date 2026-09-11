import { join } from 'path';
import { defineConfig } from 'webdriverio';

export default defineConfig({
    runner: 'local',
    specs: [
        './test/specs/**/*.ts'
    ],
    maxInstances: 1,
    capabilities: [
        {
            // Example Android TV capability set; update for your device
            platformName: 'Android',
            automationName: 'UiAutomator2',
            deviceName: 'Android TV',
            platformVersion: '11',
            appPackage: 'com.example.mostedge',
            appActivity: '.MainActivity',
            // udid: 'emulator-5554',
            // other desired capabilities as needed
        }
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    services: [['appium', {
        // Appium service options (if using @wdio/appium-service)
        args: {
            // address/port args if needed, or leave empty to use defaults
        }
    }]],
    // TypeScript auto-compilation via ts-node
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        }
    }
});
