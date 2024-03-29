/*
 * Agent.Workbench REST - API
 * This is the REST-API for Agent.Workbench in an embbedded system mode.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: admin@enflex.it
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {KontaktformularInner} from '../model/KontaktformularInner';

/**
* Default service.
* @module api/DefaultApi
* @version 1.0.0
*/
export class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the kontaktformPost operation.
     * @callback moduleapi/DefaultApi~kontaktformPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new Kontaktformular Data
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/KontaktformularInner>} opts.body Saves Data from Kontaktformular, send by AwbUI.
     * @param {module:api/DefaultApi~kontaktformPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    kontaktformPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['AwbApiKey'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/kontaktform', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}