function JSONXTReporter(
  emitter,
  reporterOptions,
) {
  // emitter is an event emitter that triggers the following events: https://github.com/postmanlabs/newman#newmanrunevents
  // reporterOptions is an object of the reporter specific options.
  // See usage examples below for more details.

  emitter.on('beforeDone', (err, o) => {
    if (err) {
      return;
    }

    const summaryToReturn = o.summary;
    delete summaryToReturn.exports;
    delete summaryToReturn.environment;

    emitter.exports.push({
      name: 'json-reporter',
      default: 'newman-run-report.json',
      path: reporterOptions.jsonXtExport,
      content: JSON.stringify(summaryToReturn, null, 2),
    });
  });
}

module.exports = JSONXTReporter;
