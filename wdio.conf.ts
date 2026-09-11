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
           platformName: 'Android',

           'appium:automationName': 'UiAutomator2',

           'appium:deviceName': 'emulator-5554',

           'appium:platformVersion': '13',

           'appium:appPackage': 'com.mostedge.tv',

           'appium:appActivity': 'com.mostedge.tv.MainActivity',

           'appium:noReset': true,

           'appium:newCommandTimeout': 300
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
//     services: [['appium', {
//         // Appium service options (if using @wdio/appium-service)
//         args: {
//             // address/port args if needed, or leave empty to use defaults
//         }
//     }]],
    services: [
        ['appium', {
            args: {
                address: '127.0.0.1',
                port: 4723
            }
        }]
    ]
    // TypeScript auto-compilation via ts-node
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        }
    }
});
