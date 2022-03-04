exports.config = {
  directConnect: !process.env.IS_JENKINS,
   capabilities: {
     browserName: 'chrome'
   },
   baseUrl: 'http://localhost:8080',
   specs: [
     'test.spec.ts'
    ],
   onPrepare: () => {
  if (process.env.IS_JENKINS) {
       let jasmineReporters = require('jasmine-reporters');
       let junitReporter = new jasmineReporters.JUnitXmlReporter({
         savePath: 'output/',
         consolidateAll: false
       });
       jasmine.getEnv().addReporter(junitReporter);
     }
     require('ts-node').register({
      //  project: 'e2e'
     });
   },
 };
