/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT
 */
import * as assert from "assert";
import DSQLDriver from "../../src/ls/driver";

suite("DSQL Driver Unit Tests", () => {
  const mockWorkspace = async () => {
    return [{ name: "test", uri: "/test" }];
  };

  test("Driver instantiation", () => {
    const options = {
      id: "test",
      isConnected: false,
      isActive: false,
      previewLimit: 50,
      server: "test.dsql.us-east-1.on.aws",
      port: 5432,
      driver: "SQLTools Aurora DSQL Driver",
      name: "test-connection",
      database: "postgres",
      username: "admin",
      region: "us-east-1"
    };

    const driver = new DSQLDriver(options, mockWorkspace);

    assert.ok(driver);
    assert.strictEqual(driver.credentials.server, "test.dsql.us-east-1.on.aws");
    assert.strictEqual(driver.credentials.region, "us-east-1");
  });

  test("SSL configuration processing", () => {
    const options = {
      id: "test-ssl",
      isConnected: false,
      isActive: false,
      previewLimit: 50,
      server: "test.dsql.us-east-1.on.aws",
      port: 5432,
      driver: "SQLTools Aurora DSQL Driver",
      name: "test-ssl-connection",
      database: "postgres",
      username: "admin",
      region: "us-east-1",
      pgOptions: {
        ssl: {
          rejectUnauthorized: true,
          ca: "test-ca-content"
        }
      }
    };

    const driver = new DSQLDriver(options, mockWorkspace);

    assert.ok(driver.credentials.pgOptions);
    assert.ok(driver.credentials.pgOptions.ssl);
    if (typeof driver.credentials.pgOptions.ssl === 'object') {
      assert.strictEqual(driver.credentials.pgOptions.ssl.rejectUnauthorized, true);
    }
  });
});
