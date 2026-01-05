/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT
 */
import { ILanguageServerPlugin } from '@sqltools/types';
import AuroraDSQLDriver from './driver';
import { DRIVER_ALIASES } from './../constants';

const AuroraDSQLDriverPlugin: ILanguageServerPlugin = {
  register(server) {
    DRIVER_ALIASES.forEach(({ value }) => {
      server.getContext().drivers.set(value, AuroraDSQLDriver);
    });
  },
};

export default AuroraDSQLDriverPlugin;
