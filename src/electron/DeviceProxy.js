/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
**/

const electron = require('cordova/platform');
const os       = require('os');
const uuid     = require('machine-uuid-sync');

const ELECTRON_PLATFORM = 'electron';


/**
 * Get platform name.
 *
 * @returns {String}
**/
let getPlatform = function() {
  return ELECTRON_PLATFORM;
};

/**
 * Get device version.
 * The os.release() method returns a string identifying the operating system release.
 *
 * https://nodejs.org/api/os.html#os_os_release
 *
 * @returns {String}
**/
let getVersion = function() {
  return os.release();
};

/**
 * Get machine/device Universally Unique IDentifier (UUID).
 *
 * More information:  ToDo: Which is the right choice.
 *   - https://github.com/albertsgrc/machine-uuid-sync       [used]
 *   - https://github.com/mhzed/machine-uuid                 [base]
 *   - https://github.com/automation-stack/node-machine-id   [alternative?] Hardware independent, Unique within the OS installation
 *
 * @returns {String}
**/
let getUuid = function() {
  return uuid();
};

/**
 * Get platforms cordova version.
 *
 * @returns {String}
**/
let getCordova = function() {
  return electron.cordovaVersion;
};

/**
 * Get platform model
 * The os.platform() method returns a string identifying the 
 * operating system platform as set during compile time of Node.js.
 * Equivalent to process.platform.
 * e.g.: 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos' or 'win32'
 *
 * https://nodejs.org/api/os.html#os_os_platform
 *
 * @returns {String}
**/
let getModel = function() {
  return os.platform();
};

/**
 * Simulated?
 *
 * @returns {Boolean} - True if platform is simulated; otherwise false.
**/
let isVirtual = function() {
  return false;
};

/**
 * Get manufacturer name.
 *
 * @returns {String}
**/
let getManufacturer = function() {
  return null;
};

/**
 * Get device serial number.
 *
 * @returns {String}
**/
let getSerial = function() {
  return null;
}


module.exports = {
  getDeviceInfo: function(success, error) {
    setTimeout(function() {
      success({
        platform:     getPlatform(),
        version:      getVersion(),
        uuid:         getUuid(),
        cordova:      getCordova(),
        model:        getModel(),
        isVirtual:    isVirtual(),
        manufacturer: getManufacturer(),
        serial:       getSerial()
      });
    }, 0);
  }
};

require('cordova/exec/proxy').add('Device', module.exports);
