/* * * * * * * * * * * * * * * * * * * * * * * * * * *\
* v1.5   Kelbaz Artificial Intellingence    By Kelbaz *
*                                                     *
*        @@@@@@@@@@@@@@   @@,              @*`'@      *
*        @@@@@@@@@@@@'    @@@@,            @. ,@      *
*     ,@@ `@@@@@@@@'      @'  `@,          @@@@@      *
*     @@@  :@@@@@'        @.  ,@@@,        @@@@@      *
*     `@@ ,@@@@' @@,      @@@@@`@@@@,      @@@@@      *
*        @@@@'   @@@@,    @@@@@ `@@@@@,    @@@@@      *
*        @@'     @@@@@@   @@@@@   `@@@@@   @@@@@      *
*                                                     *
\* * * * * * * * * * * * * * * * * * * * * * * * * * */

import * as activation from "./activations.js";
import * as network from "./network.js";

const K_AI = {
  activation,
  network,
}

if (typeof window !== "undefined") {
  window.K_AI = K_AI;
} else {
  module.exports = K_AI;
}

export default K_AI;