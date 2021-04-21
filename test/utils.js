// wow, we have to write our own custom error exceptions
exports.assertVMException = error => {
    const hasException = error.toString().search("VM Exception");
    assert(hasException, "Should expect a VM Exception error");
  }