define({ "api": [
  {
    "type": "get",
    "url": "/alerts/fetch",
    "title": "Alerts: Fetch",
    "group": "Mobile",
    "name": "AlertFetch",
    "version": "0.0.3",
    "description": "<p>Retrieves alerts from the Alert collection that fall under the given category and date range, sorted by date</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's Application Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category of alerts to pull.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "fips",
            "description": "<p>The fips to pull emergency alerts. Format <code>fips=[&quot;abcde&quot;,&quot;vwxyz&quot;,...]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "stateZones",
            "description": "<p>The stateZones to pull emergency alerts. Format <code>stateZones=[&quot;CAZ123&quot;,&quot;WVZ456&quot;,...]</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>The page of alerts to retrieve (start from page 1, each page contains 50 alerts)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "since",
            "description": "<p>The earliest date an alert was published, to include in the response.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>The maximum number of alerts to retrieve</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>An object with format <code>{ meta: { totalPages: Number, page: Number, count: Number }, alerts: [AlertObject] }</code></p> <ul> <li>Each AlertObject has format <code>{ id: String, title: String, description: String, published: String, link: String, source: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>An object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/alerts.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/alerts/fetch"
      }
    ]
  },
  {
    "type": "get",
    "url": "/broadcasts/:id/fetch",
    "title": "Broadcasts: Fetch",
    "group": "Mobile",
    "name": "BroadcastFetch",
    "version": "0.0.1",
    "description": "<p>Route to retrieve information and resources of a Broadcast. This route will retrieve the information specific to the Consumer.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's application token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ messages: [{meta: Meta, message: Message}], incentives: [{meta: Meta, incentive: Incentive}] }</code></p> <ul> <li>Meta has the format:</li> <li><code>{ triggerType: String, placeName: String, triggerName: String, companyName: String,</code></li> <li><code>  placeId: String, companyId: String, triggerId: String, lastModified: Date }</code></li> <li>Message has the format:</li> <li><code>{ id: String, featured: Boolean, businessName: String, title: String, subject: String,</code></li> <li><code>  body: String, imageUrl: String, sendDate: String, endDate: String,</code></li> <li><code>  createdDate: String }</code></li> <li>Incentive has the format:</li> <li><code>{ id: String, featured: Boolean, businessName: String, title: String, subject: String,</code></li> <li><code>  body: String, imageUrl: String, sendDate: String, endDate: String,</code></li> <li><code>  expirationDate: String, redemptionCode: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/broadcasts.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/broadcasts/:id/fetch"
      }
    ]
  },
  {
    "type": "post",
    "url": "/consumers/add-allergy",
    "title": "Consumer: Add Allergy -- TO BE DEPRECATED",
    "group": "Mobile",
    "name": "ConsumerAddAllergy",
    "version": "0.0.1",
    "description": "<p>Add an Allergy to Consumer</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's application token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "allergy",
            "description": "<p>The allergy to add.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>Tag to give allergy.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/consumers.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/consumers/add-allergy"
      }
    ]
  },
  {
    "type": "post",
    "url": "/consumers/add-allergy-allergy",
    "title": "Consumer: Add Allergy",
    "group": "Mobile",
    "name": "ConsumerAddAllergy",
    "version": "0.0.1",
    "description": "<p>Add a Allergy to the Watch Out! Database. Adds the Allergy for a Consumer</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's application token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "allergy",
            "description": "<p>The allergy to add.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>An object with the format recalls: [], products: [] <code>{ product: VehicleObject|ItemObject }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/consumers.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/consumers/add-allergy-allergy"
      }
    ]
  },
  {
    "type": "post",
    "url": "/consumers/add-device",
    "title": "Consumer: Add Device",
    "group": "Mobile",
    "name": "ConsumerAddDevice",
    "version": "0.0.1",
    "description": "<p>Add Device to a Consumer. [NOTE: A Consumer can only have 1 device]</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's App Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>The device id to give the Consumer.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/consumers.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/consumers/add-device"
      }
    ]
  },
  {
    "type": "post",
    "url": "/consumers/add-zipcode",
    "title": "Consumer: Add Zipcode",
    "group": "Mobile",
    "name": "ConsumerAddZipcode",
    "version": "0.0.2",
    "description": "<p>Add a Zipcode to Consumer</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's application token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zipcode",
            "description": "<p>The 5-digit zip code (input as string).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>A tag to give the zip code for the Consumer.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ zipcode: ZipcodeObject }</code></p> <ul> <li>ZipcodeObject has format:</li> <li><code>{ code: String, edgeNE: { lat: Number, lng: Number }, edgeSW: { lat: Number, lng: Number }, fips: String, city: String, state: String}</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/consumers.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/consumers/add-zipcode"
      }
    ]
  },
  {
    "type": "post",
    "url": "/consumers/auth",
    "title": "Consumer: Authenticate",
    "group": "Mobile",
    "name": "ConsumerAuth",
    "version": "0.0.1",
    "description": "<p>Authorize creation of Consumer.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>13-digit phone number of the Consumer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmationToken",
            "description": "<p>The confirmation token of the Consumer.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with the format <code>{ appToken: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/consumers.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/consumers/auth"
      }
    ]
  },
  {
    "type": "post",
    "url": "/consumers/get-zipcode",
    "title": "Consumer: Get Zipcode",
    "group": "Mobile",
    "name": "ConsumerGetZipcode",
    "version": "0.0.1",
    "description": "<p>Get information about a zip code: NE and SW edges, FIPS, city, and state. Do not save the zip code information to the consumer's schema/collection record</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's application token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zipcode",
            "description": "<p>The 5-digit zip code (input as string).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ zipcode: ZipcodeObject }</code></p> <ul> <li>ZipcodeObject has format:</li> <li><code>{ code: String, edgeNE: { lat: Number, lng: Number }, edgeSW: { lat: Number, lng: Number }, fips: String, city: String, state: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/consumers.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/consumers/get-zipcode"
      }
    ]
  },
  {
    "type": "post",
    "url": "/consumers/last-opened",
    "title": "Consumer: Last Opened",
    "group": "Mobile",
    "name": "ConsumerLastOpened",
    "version": "0.0.0",
    "description": "<p>Timestamp the last time the consumer opened the app.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's App Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>The last time the consumer opened the app</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/consumers.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/consumers/last-opened"
      }
    ]
  },
  {
    "type": "post",
    "url": "/consumers/last-timezone",
    "title": "Consumer: Last Timezone",
    "group": "Mobile",
    "name": "ConsumerLastTimezone",
    "version": "0.0.1",
    "description": "<p>Set the consumer's timezone. [NOTE: A Consumer can only have 1 device]</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's App Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timezone",
            "description": "<p>The timezone string to be saved (ex: &quot;America/New_York&quot;).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/consumers.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/consumers/last-timezone"
      }
    ]
  },
  {
    "type": "post",
    "url": "/consumers/last-zipcode",
    "title": "Consumer: Last Zipcode",
    "group": "Mobile",
    "name": "ConsumerLastZipcode",
    "version": "0.0.0",
    "description": "<p>Set the consumer's zipcode. [NOTE: A Consumer can only have 1 device]</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's App Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "zipcode",
            "optional": false,
            "field": "zipcode",
            "description": "<p>The 5-digit zip code (input as string).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/consumers.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/consumers/last-zipcode"
      }
    ]
  },
  {
    "type": "post",
    "url": "/consumers/record-event",
    "title": "Consumer: Record Event",
    "group": "Mobile",
    "name": "ConsumerRecordEvent",
    "version": "0.0.1",
    "description": "<p>Record a new Consumer Event</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's application token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resourceType",
            "description": "<p>The resource type (i.e alert, incentive, message)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resourceId",
            "description": "<p>The id of the resource</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The reason for the event taking place</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/consumers.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/consumers/record-event"
      }
    ]
  },
  {
    "type": "post",
    "url": "/consumers/remove-allergy",
    "title": "Consumer: Remove Allergy -- TO BE DEPRECATED",
    "group": "Mobile",
    "name": "ConsumerRemoveAllergy",
    "version": "0.0.1",
    "description": "<p>Remove an Allergy from Consumer. If a tag is specified, then only the tag will be removed and the allergy will continue to exist. When no tag is specified, the allergy will be removed.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's application token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "allergy",
            "description": "<p>The allergy.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>The tag to remove from allergy.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/consumers.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/consumers/remove-allergy"
      }
    ]
  },
  {
    "type": "post",
    "url": "/consumers/remove-allergy",
    "title": "Consumer: Remove Allergy",
    "group": "Mobile",
    "name": "ConsumerRemoveAllergy",
    "version": "0.0.1",
    "description": "<p>Remove an Allergy from Consumer. If a tag is specified, then only the tag will be removed and the allergy will continue to exist. When no tag is specified, the allergy will be removed.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's application token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "allergy",
            "description": "<p>The allergy.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>The tag to remove from allergy.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/consumers.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/consumers/remove-allergy"
      }
    ]
  },
  {
    "type": "post",
    "url": "/consumers/remove-zipcode",
    "title": "Consumer: Remove Last Zipcode",
    "group": "Mobile",
    "name": "ConsumerRemoveLastZipcode",
    "version": "0.0.0",
    "description": "<p>Remove the Last Zipcode from Consumer. Primarily used to help ensure that they do not receive a push notification if they turn off location services.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's application token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/consumers.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/consumers/remove-zipcode"
      }
    ]
  },
  {
    "type": "post",
    "url": "/consumers/remove-zipcode",
    "title": "Consumer: Remove Zipcode",
    "group": "Mobile",
    "name": "ConsumerRemoveZipcode",
    "version": "0.0.1",
    "description": "<p>Remove a Zipcode from Consumer. If a tag is specified, then only the tag will be removed and the zip code will continue to exist. When no tag is specified, the zip code will be removed.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's application token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zipcode",
            "description": "<p>The 5-digit zip code (input as string).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>The tag of the zip code.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/consumers.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/consumers/remove-zipcode"
      }
    ]
  },
  {
    "type": "post",
    "url": "/consumers/signout",
    "title": "Consumer: Signout",
    "group": "Mobile",
    "name": "ConsumerSignout",
    "version": "0.0.1",
    "description": "<p>Signout a Consumer</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's App Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/consumers.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/consumers/signout"
      }
    ]
  },
  {
    "type": "post",
    "url": "/consumers/signup",
    "title": "Consumer: Signup",
    "group": "Mobile",
    "name": "ConsumerSignup",
    "version": "0.0.1",
    "description": "<p>Signup a Consumer. This route will create a new Consumer and send a confirmation code If a Consumer with the given phone number is already in the database and is not confirmed (or has no app token) a new confirmation code is sent.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>13-digit phone number of the Consumer.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/consumers.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/consumers/signup"
      }
    ]
  },
  {
    "type": "post",
    "url": "/consumers/update-categories",
    "title": "Consumer: Update Categories",
    "group": "Mobile",
    "name": "ConsumerUpdateCategories",
    "version": "0.0.1",
    "description": "<p>The Categories the consumer has active</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's application token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "categories",
            "description": "<p>The new active categories</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format [{&quot;category&quot;:<category>, &quot;active&quot;:<Boolean>, &quot;displayOrder&quot;:<Integer>},...]</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/consumers.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/consumers/update-categories"
      }
    ]
  },
  {
    "type": "get",
    "url": "/messages/:id/fetch",
    "title": "Messages: Fetch (Single)",
    "group": "Mobile",
    "name": "MessageFetch",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's Application Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>An object with the format <code>{ meta: MetaObject, message: MessageObject }</code> MetaObject has format:</p> <ul> <li><code>{ triggerType: String, placeName: String, triggerName: String, companyName: String,</code></li> <li><code>  placeId: String, companyId: String, triggerId: String, lastModified: Date }</code> MessageObject has format:</li> <li><code>{ id: String, featured: Boolean, businessName: String, title: String, subject: String,</code></li> <li><code>  body: String, imageUrl: String, sendDate: String, endDate: String,</code></li> <li><code>  createdDate: String, expirationDate: String, redemptionCode: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>An object with the format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/messages.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/messages/:id/fetch"
      }
    ]
  },
  {
    "type": "get",
    "url": "/news/fetch",
    "title": "News: Fetch",
    "group": "Mobile",
    "name": "NewsFetch",
    "version": "0.0.1",
    "description": "<p>Retrieves news articles from the News collection that fall under the given category and date range, sorted by date</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's Application Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "categories",
            "description": "<p>An array of categories to pull. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>The page of news to retrieve (start from page 1, each page contains 50 news) (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "since",
            "description": "<p>The earliest date a news article was published, to include in the response. (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>The maximum number of alerts to retrieve (Optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>An object with format <code>{ meta: { totalPages: Number, page: Number, count: Number }, news: [NewsObject] }</code></p> <ul> <li>Each NewsObject has format <code>{ id: String, title: String, description: String, published: String, link: String, imageUrl: String, category: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>An object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/news.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/news/fetch"
      }
    ]
  },
  {
    "type": "get",
    "url": "/places/:id/triggers/:trigger_id/fetch",
    "title": "Places: Fetch Trigger",
    "group": "Mobile",
    "name": "PlaceFetchTrigger",
    "version": "0.0.1",
    "description": "<p>Retrieve information associated with a trigger Information includes messages, incentives, and alerts.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's application token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gid",
            "description": "<p>The gimbal place id associated with the trigger</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>An object with information about the trigger The object has the format: <code>{ meta: MetaObject, messages: [MessageObject], incentives: [IncentiveObject], alerts: [Alert] }</code> Each MessageObject has format:</p> <ul> <li><code>{ id: String, featured: Boolean, businessName: String, title: String, subject: String,</code></li> <li><code>  body: String, imageUrl: String, sendDate: String, endDate: String,</code></li> <li><code>  createdDate: String }</code> Each IncentiveObject has format:</li> <li><code>{ id: String, featured: Boolean, businessName: String, title: String, subject: String,</code></li> <li><code>  body: String, imageUrl: String, sendDate: String, endDate: String,</code></li> <li><code>  createdDate: String, expirationDate: String, redemptionCode: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>An object with format: <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/places.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/:id/triggers/:trigger_id/fetch"
      }
    ]
  },
  {
    "type": "post",
    "url": "/products/add",
    "title": "Products: Add (Consumer)",
    "group": "Mobile",
    "name": "ProductAdd",
    "version": "0.0.1",
    "description": "<p>Add a Product to the Watch Out! Database. Adds the Product for a Consumer</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's Application Token. If given, the product will be stored for the Consumer.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>The product database the product was found.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sourceid",
            "description": "<p>The id given by the product's source.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_name",
            "description": "<p>The name of the product</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_code",
            "description": "<p>The code of the product</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_image_url",
            "description": "<p>Url to an image of the product</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_make",
            "description": "<p>The make of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_model",
            "description": "<p>The model of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vehicle_year",
            "description": "<p>The year of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_vin",
            "description": "<p>The vin number of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mileage",
            "description": "<p>The current [vehicle] mileage</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>An object with the format <code>{ product: VehicleObject|ItemObject }</code></p> <ul> <li>VehicleObject has format: <code> { id: String, name: String, vehicle_make: String, vehicle_model: String,</code> <code>   vehicle_year: Number, vehicle_vin: String,</code> <code>   recalls: [{ component: String, description: String }] }</code></li> <li>ItemObject has format: <code>{  id: String, product_name: String, source: String, sourceid: String, </code> <code>   product_code: String, product_image_url: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>An object with the format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/products.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/products/add"
      }
    ]
  },
  {
    "type": "post",
    "url": "/products/add-new",
    "title": "Products: Add New (Consumer)",
    "group": "Mobile",
    "name": "ProductAddNew",
    "version": "0.0.1",
    "description": "<p>Add a Product to the Watch Out! Product database. This is a product that was not found in any of the product databases linked to Watch Out!</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's Application Token. If given, the product will be stored for the Consumer</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_name",
            "description": "<p>The name of the product</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_code",
            "description": "<p>The code of the product</p>"
          },
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "product_image",
            "description": "<p>image to be uploaded for product</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_make",
            "description": "<p>The make of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_model",
            "description": "<p>The model of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vehicle_year",
            "description": "<p>The year of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_vin",
            "description": "<p>The vin number of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The product's category</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>An object with format <code>{ product: VehicleObject|ItemObject }</code></p> <ul> <li>VehicleObject has format: <code> { id: String, name: String, vehicle_make: String, vehicle_model: String,</code> <code>   vehicle_year: Number, vehicle_vin: String,</code> <code>   recalls: [{ component: String, description: String }] }</code></li> <li>ItemObject has format: <code>{  id: String, product_name: String, source: String, sourceid: String, </code> <code>   product_code: String, product_image_url: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>An object with the format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/products.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/products/add-new"
      }
    ]
  },
  {
    "type": "get",
    "url": "/products/fetch",
    "title": "Products: Fetch (Consumer)",
    "group": "Mobile",
    "name": "ProductFetch",
    "version": "0.0.1",
    "description": "<p>Retrieve Products for a Consumer. The Consumer will receive a list of products that the Consumer has added to the watchout.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's application token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The page number of Products to fetch (starts with 1)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ meta: MetaObject, products: [ItemObject|VehicleObject] }</code></p> <ul> <li>MetaObject has format:</li> <li><code>{ currentPage: Number, totalPages: Number }</code></li> <li>VehicleObject has format: <code> { id: String, name: String, vehicle_make: String, vehicle_model: String,</code> <code>   vehicle_year: Number, vehicle_vin: String,</code> <code>   recalls: [{ component: String, description: String }] }</code></li> <li>ItemObject has format: <code>{  id: String, product_name: String, source: String, sourceid: String, </code> <code>   product_code: String, product_image_url: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>An object with the format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/products.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/products/fetch"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/products/:id/remove",
    "title": "Products: Remove (Consumer)",
    "group": "Mobile",
    "name": "ProductRemove",
    "version": "0.0.1",
    "description": "<p>Remove a Consumer from a product</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's app token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with the format: <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/products.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/products/:id/remove"
      }
    ]
  },
  {
    "type": "get",
    "url": "/products/search",
    "title": "Products: Search (All)",
    "group": "Mobile",
    "name": "ProductSearch",
    "version": "0.0.1",
    "description": "<p>Search for a Product via the Product Databases linked to WO. This will return a list of products related to the search query. The Product Databases searched depends on the query parameters provided If the the product_name or product_code is provided, then those will be used for the search. If the product_code is provided, it will take precedence over product_name. To query for vehicles, the vehicle_make, vehicle_model and vehicle_year must all be in the query parameters. If the vin is provided, it will take precedence over make/model/year. A token - either consumer's or company's - must be provided in request for authentication.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's Application Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_code",
            "description": "<p>The code of the product to search for.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_name",
            "description": "<p>The name of the product to search for</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_vin",
            "description": "<p>The vin number of the vehicle to search for.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_make",
            "description": "<p>The make of the vehicle to search for.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_model",
            "description": "<p>The model of the vehicle to search for.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_year",
            "description": "<p>The year of the vehicle to search for.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>An object with format: <code>{ products: [ItemObject|VehicleObject] }</code></p> <ul> <li>ItemObject has format: <code>{ product_name: String, product_code: String, product_image_url: String,</code> <code>  source: String, sourceid: String }</code></li> <li>VehicleObject has format: <code>{ vehicle_make: String, vehicle_model: String, vehicle_year: Number, vehicle_vin: String,</code> <code>  source: String, sourceid: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>An object with the format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/products.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/products/search"
      }
    ]
  },
  {
    "type": "get",
    "url": "/products/search/vehicle",
    "title": "Products: Search (Vehicle)",
    "group": "Mobile",
    "name": "ProductSearchVehicle",
    "version": "0.0.1",
    "description": "<p>Search for vehicle models &amp; years, given the make</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's Application Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "make",
            "description": "<p>The make of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_make",
            "description": "<p>The make of the vehicles to query for.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>An object with format: <code>{ models: [] }</code></p> <ul> <li>Each model in the models array has the following format: <code>{ vehicle_make: String, vehicle_model: String, vehicle_year: Number, sourceid: String, source: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>An object with the format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/products.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/products/search/vehicle"
      }
    ]
  },
  {
    "type": "post",
    "url": "/products/update-mileage",
    "title": "Consumer: Update Mileage -- TO BE DEPRECATED once iOS app version 0.1.73 is downloaded",
    "group": "Mobile",
    "name": "UpdateMileage",
    "version": "0.0.0",
    "description": "<p>Update a vehicle's mileage</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's app token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "watchout_id",
            "description": "<p>The product ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mileage",
            "description": "<p>The new mileage</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with the format: <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/products.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/products/update-mileage"
      }
    ]
  },
  {
    "type": "post",
    "url": "/products/update-vehicle",
    "title": "Consumer: Update Vehicle",
    "group": "Mobile",
    "name": "UpdateVehicle",
    "version": "0.0.0",
    "description": "<p>Update a vehicle's mileage OR VIN</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "wo-app-token",
            "description": "<p>Consumer's app token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "watchout_id",
            "description": "<p>The product ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mileage",
            "description": "<p>The new mileage</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vin",
            "description": "<p>The corrected VIN</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with the format: <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/mobile/products.js",
    "groupTitle": "Mobile",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/products/update-vehicle"
      }
    ]
  },
  {
    "type": "post",
    "url": "/users/activate-account",
    "title": "User: Activate User Account",
    "group": "WWW",
    "name": "ActivateUserAccount",
    "version": "0.0.1",
    "description": "<p>User can activate account</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>activation token of User</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ success:true,message:'Email and token fields are required' }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{sucess:false,message:'Unauthorized' }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/users.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/users/activate-account"
      }
    ]
  },
  {
    "type": "post",
    "url": "/users/activate-account",
    "title": "User: Activate User Account",
    "group": "WWW",
    "name": "ActivateUserAccount",
    "version": "0.0.1",
    "description": "<p>User can activate account</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>activation token of User</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ success:true,message:'Email and token fields are required' }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{sucess:false,message:'Unauthorized' }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/users.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/users/activate-account"
      }
    ]
  },
  {
    "type": "get",
    "url": "/companies/:id/customer-lists/fetch",
    "title": "Company: Fetch Customer Lists",
    "group": "WWW",
    "name": "CompanyCustomerListsFetch",
    "version": "0.0.1",
    "description": "<p>Retrieves customer lists uploaded by a Company</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "include",
            "description": "<p>When provided, each CustomerListObject will only include these values (i.e id, name). You may specify multiple fields to return by appending more include parameters to the url (i.e include=id&amp;include=name&amp;...)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ customerLists: [CustomerListObject] }</code></p> <ul> <li>CustomerListObject has format:</li> <li><code>{ id: String, name: String, created: String, customers: Number }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/companies.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/companies/:id/customer-lists/fetch"
      }
    ]
  },
  {
    "type": "get",
    "url": "/companies/:id/data",
    "title": "Company: Fetch Data",
    "group": "WWW",
    "name": "CompanyData",
    "version": "0.0.1",
    "description": "<p>Retrieve a Company's data.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ company: CompanyObject }</code></p> <ul> <li>CompanyObject has the following format:</li> <li><code>{ id: String, name: String, isPRO: Boolean, images: [ImageObject], members: [MembersObject], address: AddressObject, customerLists: [CustomerListObject] }</code></li> <li>Each ImageObject has format:</li> <li><code>{ id: String, link: String }</code></li> <li>Each MemberObject has format:</li> <li><code>{ id: String, name: String, email: String, role: String, active: Boolean, current: Boolean }</code></li> <li>AddressObject has format:</li> <li><code>{ line1: String, line2: String, city: String, state: String, zip: String }</code></li> <li>Each CustomerList Object has format:</li> <li><code>{ id: String, name: String, created: String, customers: Number }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/companies.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/companies/:id/data"
      }
    ]
  },
  {
    "type": "put",
    "url": "/companies/:id/images/:image_id/archive",
    "title": "Company: Archive Image",
    "group": "WWW",
    "name": "CompanyImageArchive",
    "version": "0.0.1",
    "description": "<p>Archives (or unarchives) an Image.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "archive",
            "description": "<p>Flag determining whether to archive or unarchive Image</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/companies.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/companies/:id/images/:image_id/archive"
      }
    ]
  },
  {
    "type": "get",
    "url": "/companies/:id/images/fetch",
    "title": "Company: Fetch Images",
    "group": "WWW",
    "name": "CompanyImagesFetch",
    "version": "0.0.1",
    "description": "<p>Retrieves images uploaded by a Company</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ images: [ImageObject] }</code></p> <ul> <li>Each ImageObject has format:</li> <li><code>{ id: String, link: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/companies.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/companies/:id/images/fetch"
      }
    ]
  },
  {
    "type": "get",
    "url": "/companies/data",
    "title": "Company: Information",
    "group": "WWW",
    "name": "CompanyInformation",
    "version": "0.0.1",
    "description": "<p>Company Information. This will display company information</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "companyId",
            "description": "<p>Company id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ success: true, rows: companyDetails, message: 'Company details' }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: err }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/companies.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/companies/data"
      }
    ]
  },
  {
    "type": "get",
    "url": "/companies/:id/members/:member_id/invite",
    "title": "Company: Fetch Member Invite",
    "group": "WWW",
    "name": "CompanyMemberFetchInvite",
    "version": "0.0.1",
    "description": "<p>Get member information for accept invite request</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "member",
            "description": "<p>Id of member</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ member: MemberObject }</code></p> <ul> <li>MemberObject has format</li> <li><code>{ id: String, name: String, email: String, role: String, active: Boolean }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/companies.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/companies/:id/members/:member_id/invite"
      }
    ]
  },
  {
    "type": "post",
    "url": "/companies/:id/members/invite",
    "title": "Company: Send Member Invite",
    "group": "WWW",
    "name": "CompanyMemberSendInvite",
    "version": "0.0.1",
    "description": "<p>Invite a member to a Company. Send invitation email. If member has already been invited, resend invitation.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of new member.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role to give new member.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ member: MemberObject }</code></p> <ul> <li>MemberObject has format</li> <li><code>{ id: String, name: String, email: String, role: String, active: Boolean }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/companies.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/companies/:id/members/invite"
      }
    ]
  },
  {
    "type": "put",
    "url": "/companies/:id/members/:member_id/update",
    "title": "Company: Member Update",
    "group": "WWW",
    "name": "CompanyMemberUpdate",
    "version": "0.0.1",
    "description": "<p>Updates role of Company Member and marks Member as active/inactive.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>The role to give the Company Member</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Flag determining whether to mark Member as active/inactive.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/companies.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/companies/:id/members/:member_id/update"
      }
    ]
  },
  {
    "type": "post",
    "url": "/companies/profile/update",
    "title": "Company: Profile Update",
    "group": "WWW",
    "name": "CompanyProfileUpdate",
    "version": "0.0.1",
    "description": "<p>Signup a Company. This will also</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Header with the format <code>{token}</code> create a User and set them as owner of Company</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Company's name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "partnerTypeId",
            "description": "<p>Company partner Type</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contact_mail",
            "description": "<p>Company contact email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryId",
            "description": "<p>Country Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "stateId",
            "description": "<p>State Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>City Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone Number</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "zipCode",
            "description": "<p>Zip Code</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "line1",
            "description": "<p>line1 address</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "line2",
            "description": "<p>line2 address</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "postalCode",
            "description": "<p>Postal Code</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ status: true, rows: [], message: 'Company updated successfully' }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ success: false, message: err }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/companies.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/companies/profile/update"
      }
    ]
  },
  {
    "type": "post",
    "url": "/companies/signup",
    "title": "Company: Signup",
    "group": "WWW",
    "name": "CompanySignup",
    "version": "0.0.1",
    "description": "<p>Signup a Company. This will also create a User and set them as owner of Company</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_firstname",
            "description": "<p>User's first name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_lastname",
            "description": "<p>User's last name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_password",
            "description": "<p>User's password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_passwordconfirmation",
            "description": "<p>Confirmation of User's password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_verification",
            "description": "<p>Verification string (access code)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "company_name",
            "description": "<p>Company's name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ token: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/companies.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/companies/signup"
      }
    ]
  },
  {
    "type": "post",
    "url": "/companies/signup",
    "title": "Company: Signup",
    "group": "WWW",
    "name": "CompanySignup",
    "version": "0.0.1",
    "description": "<p>Signup a Company. This will also create a User and set them as owner of Company</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_firstname",
            "description": "<p>User's first name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_lastname",
            "description": "<p>User's last name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_password",
            "description": "<p>User's password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_passwordconfirmation",
            "description": "<p>Confirmation of User's password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_verification",
            "description": "<p>Verification string (access code)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "company_name",
            "description": "<p>Company's name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ token: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/companies.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/companies/signup"
      }
    ]
  },
  {
    "type": "post",
    "url": "/companies/:id/members/:member_id/signup",
    "title": "Company: Signup Member",
    "group": "WWW",
    "name": "CompanySignupMember",
    "version": "0.0.1",
    "description": "<p>Signup a new Member. All information will be used to create a new User account for the Member.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Member's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Member's email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Member's password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "passwordConfirmation",
            "description": "<p>Confirmation of Member's password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ token: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/companies.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/companies/:id/members/:member_id/signup"
      }
    ]
  },
  {
    "type": "put",
    "url": "/companies/:id/update",
    "title": "Company: Update",
    "group": "WWW",
    "name": "CompanyUpdate",
    "description": "<p>Update a Company.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of Company</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>Address of Company</p> <ul> <li>AddressObject has format:</li> <li><code>{ line1: String, line2: String, city: String, state: String, zip: String }</code></li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ company: CompanyObject }</code></p> <ul> <li>CompanyObject has the following format:</li> <li><code>{ id: String, name: String, isPRO: Boolean, images: [ImageObject], members: [MembersObject], address: AddressObject }</code></li> <li>Each ImageObject has format:</li> <li><code>{ id: String, link: String }</code></li> <li>Each MemberObject has format:</li> <li><code>{ id: String, name: String, email: String, role: String, active: Boolean }</code></li> <li>AddressObject has format:</li> <li><code>{ line1: String, line2: String, city: String, state: String, zip: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Api/controllers/companies.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/companies/:id/update"
      }
    ]
  },
  {
    "type": "post",
    "url": "/companies/:id/upload-file",
    "title": "Company: Upload File",
    "group": "WWW",
    "name": "CompanyUploadFile",
    "version": "0.0.1",
    "description": "<p>Upload a file for a Company</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_type",
            "description": "<p>The type of file being uploaded (image, video, customer-list, etc..)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_name",
            "description": "<p>The name to give the file.</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>The file contents to be uploaded</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ file: { id: String, link: String } }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/companies.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/companies/:id/upload-file"
      }
    ]
  },
  {
    "type": "post",
    "url": "/users/create-password",
    "title": "User: Create User Password",
    "group": "WWW",
    "name": "CreateUserPassword",
    "version": "0.0.1",
    "description": "<p>User can create password</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_password",
            "description": "<p>Password of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_passwordconfirmation",
            "description": "<p>Confirm Password of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_email",
            "description": "<p>Email address of User</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{sucess:true,message:'Password updated sucessfully' }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{sucess:false,message:'Invalid password reset token' }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/users.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/users/create-password"
      }
    ]
  },
  {
    "type": "post",
    "url": "/groups/create",
    "title": "Groups: Create",
    "group": "WWW",
    "name": "GroupsCreate",
    "version": "0.0.1",
    "description": "<p>User can create groups</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupName",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>Group status</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ token: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/groups.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/groups/create"
      }
    ]
  },
  {
    "type": "get",
    "url": "/groups/list",
    "title": "Groups:List",
    "group": "WWW",
    "name": "GroupsList",
    "version": "0.0.1",
    "description": "<p>Groups List display</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The password reset token of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email address for the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>The old password for the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The new password for the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwordConfirmation",
            "description": "<p>Password confirmation for the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ token: String, status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/groups.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/groups/list"
      }
    ]
  },
  {
    "type": "post",
    "url": "/groups/update",
    "title": "Groups: Update",
    "group": "WWW",
    "name": "GroupsUpdate",
    "version": "0.0.1",
    "description": "<p>User can create groups</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupId",
            "description": "<p>Group Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupName",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>Group status</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ token: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/groups.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/groups/update"
      }
    ]
  },
  {
    "type": "post",
    "url": "location/status/change",
    "title": "Location: Change Status (Single)",
    "group": "WWW",
    "name": "LocationChangeStatus",
    "version": "0.0.1",
    "description": "<p>Route to destroy a Place. This will remove an unsubscribe the Place from all Triggers</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "placeId",
            "description": "<p>Location id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Location Status</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: true, rows: [], message: &quot;Status changed successfully&quot; }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'Unauthorized' }</code></p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'InvalidRequest: Place status change error' }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1location/status/change"
      }
    ]
  },
  {
    "type": "post",
    "url": "/location/create",
    "title": "Location: Create",
    "group": "WWW",
    "name": "LocationCreate",
    "version": "0.0.1",
    "description": "<p>Create a new Location for a Company</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>The Company to create the Location for</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Location</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "geofenceType",
            "description": "<p>The type of geofence (radius or polygon)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "points",
            "description": "<p>An array of objects. Each object is a coordinate with keys lat(Number) &amp; lng(Number)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "radius",
            "description": "<p>The radius of the geofence (in meters). This is required if geofenceType is radius</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ Location: PlaceObject }</code></p> <ul> <li>PlaceObject has format:</li> <li><code>{ id: String, nam,e: String, created: String, primaryTrigger: String, triggers: [TriggerObject] }</code></li> <li>TriggerObject has format:</li> <li><code>{ id: String, name: String, type: String, categories: [String],</code></li> <li><code>  points: [{ lat: Float, lng: Float }], geofenceType: String, radius: Float, created: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/location/create"
      }
    ]
  },
  {
    "type": "put",
    "url": "/messages/:id/archive",
    "title": "Message: Archive",
    "group": "WWW",
    "name": "MessageArchive",
    "version": "0.0.1",
    "description": "<p>Archives a Message.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "undo",
            "description": "<p>When set to true, the Message will be unarchived.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/messages.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/messages/:id/archive"
      }
    ]
  },
  {
    "type": "post",
    "url": "/messages/create",
    "title": "Message: Create",
    "group": "WWW",
    "name": "MessageCreate",
    "version": "0.0.1",
    "description": "<p>Route to create a Message/Incentive</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>The Company to attach this Message to.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of Message.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "headline",
            "description": "<p>Headline of Message.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of Message.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "featured",
            "description": "<p>True if Message is featured, False if classic.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>ID of image to add to Message.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>ID of video to add to Message.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "activated",
            "description": "<p>True if Message should be set to active on creation, False if not.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>Message start date (format: 'MMM DD, YYYY', example: 'Jul, 30, 2016')</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>Message end date (format: 'MMM DD, YYYY', example: 'Jul, 31, 2016')</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "incentive",
            "description": "<p>True if Message should be an Incentive, False if not. When set to True, redemptionCode and expirationDate are required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "redemptionCode",
            "description": "<p>The redemption code for the Incentive</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expirationDate",
            "description": "<p>Incentive expiration date (format: 'MMM DD, YYYY', example: 'Aug, 01, 2016')</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "customerLists",
            "description": "<p>Array of Customer Lists to send Message to.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "triggers",
            "description": "<p>Array of Triggers to link Message to.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "broadcast",
            "description": "<p>True if Message will be broadcasted, False if not.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sendTime",
            "description": "<p>The time increment to send the Message. Field is only used when broadcast is set to True. If broadcast is set to True and Message is supposed to be broadcast immediately, leave sendTime blank.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ message: MessageObject }</code></p> <ul> <li>MessageObject has format:</li> <li><code>{ id: String, name: String, headline: String, description: String,</code></li> <li><code>  featured: Boolean, image: String, video: String, activated: Boolean, archived: Boolean,</code></li> <li><code>  incentive: Boolean, redemptionCode: String, expirationDate: String,</code></li> <li><code>  direct: Boolean, now: Boolean, sendTime: String,</code></li> <li><code>  startDate: String, endDate: String, created: String,</code></li> <li><code>  customerLists: [String], triggers: [String] }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 403": [
          {
            "group": "Error 403",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/messages.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/messages/create"
      }
    ]
  },
  {
    "type": "get",
    "url": "/messages/:id/fetch",
    "title": "Message: Fetch (Single)",
    "group": "WWW",
    "name": "MessageFetch",
    "version": "0.0.1",
    "description": "<p>Fetch a single Message</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>The Company the Message belongs to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ message: MessageObject }</code></p> <ul> <li>MessageObject has format:</li> <li><code>{ id: String, name: String, headline: String, description: String,</code></li> <li><code>  featured: Boolean, image: String, video: String, activated: Boolean, archived: Boolean,</code></li> <li><code>  incentive: Boolean, redemptionCode: String, expirationDate: String,</code></li> <li><code>  direct: Boolean, now: Boolean, sendTime: Boolean,</code></li> <li><code>  startDate: String, endDate: String, created: String,</code></li> <li><code>  customerLists: [String], triggers: [String] }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/messages.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/messages/:id/fetch"
      }
    ]
  },
  {
    "type": "put",
    "url": "/messages/:id/update",
    "title": "Message: Update",
    "group": "WWW",
    "name": "MessageUpdate",
    "version": "0.0.1",
    "description": "<p>Route to update a Message. Only an owner||admin is allowed to set Message to activated. When a Message is already activated, only certain fields on the Message can be updated.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of Message.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "headline",
            "description": "<p>Headline of Message.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of Message.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "featured",
            "description": "<p>True if Message is featured, False if classic.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>ID of image to add to Message.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>ID of video to add to Message.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "activated",
            "description": "<p>True if Message should be set to active on creation, False if not.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>The date to start sending the Message</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "endDate",
            "description": "<p>The date to end sending the Message</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "incentive",
            "description": "<p>True if Message should be an Incentive, False if not. When set to True, redemptionCode and expirationDate are required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "redemptionCode",
            "description": "<p>The redemption code for the Incentive</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expirationDate",
            "description": "<p>The expiration date for the Incentive</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "customerLists",
            "description": "<p>Array of Customer Lists to send Message to.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "triggers",
            "description": "<p>Array of Triggers to link Message to.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "broadcast",
            "description": "<p>True if Message will be broadcasted, False if not.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ message: MessageObject }</code></p> <ul> <li>MessageObject has format:</li> <li><code>{ id: String, name: String, headline: String, description: String,</code></li> <li><code>  featured: Boolean, image: String, video: String, activated: Boolean, archived: Boolean,</code></li> <li><code>  incentive: Boolean, redemptionCode: String, expirationDate: String,</code></li> <li><code>  direct: Boolean, now: Boolean, sendTime: Boolean,</code></li> <li><code>  startDate: String, endDate: String, created: String,</code></li> <li><code>  customerLists: [String], triggers: [String] }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/messages.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/messages/:id/update"
      }
    ]
  },
  {
    "type": "get",
    "url": "/messages/fetch",
    "title": "Message: Fetch (All)",
    "group": "WWW",
    "name": "MessagesFetch",
    "version": "0.0.1",
    "description": "<p>Route to retrieve Message documents belonging to a Company.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>The page number of Messages to fetch (starts with 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>The company to fetch Messages for.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ meta: MetaObject, messages: [MessageObject] }</code></p> <ul> <li>MetaObject has format:</li> <li><code>{ currentPage: Number, totalPages: Number }</code></li> <li>Each MessageObject has format:</li> <li><code>{ id: String, name: String, headline: String, description: String,</code></li> <li><code>  featured: Boolean, image: String, video: String, activated: Boolean, archived: Boolean,</code></li> <li><code>  incentive: Boolean, redemptionCode: String, expirationDate: String,</code></li> <li><code>  direct: Boolean, now: Boolean, sendTime: String,</code></li> <li><code>  startDate: String, endDate: String, created: String,</code></li> <li><code>  customerLists: [String], triggers: [String] }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/messages.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/messages/fetch"
      }
    ]
  },
  {
    "type": "post",
    "url": "/places/:id/beacons/create",
    "title": "Place: Create Beacon",
    "group": "WWW",
    "name": "PlaceBeaconCreate",
    "version": "0.0.1",
    "description": "<p>Route to create a Beacon</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the beacon</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "factoryId",
            "description": "<p>The factory id of the beacon</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "beaconType",
            "description": "<p>The type of beacon (used to decide beacon's configuration)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ beacon: BeaconObject }</code></p> <ul> <li>BeaconObject has format: <code>{ id: String, name: String, beaconType: String, factoryId: String, primary: Boolean, created: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/:id/beacons/create"
      }
    ]
  },
  {
    "type": "post",
    "url": "/places/:id/beacons/create",
    "title": "Place: Create Beacon",
    "group": "WWW",
    "name": "PlaceBeaconCreate",
    "version": "0.0.1",
    "description": "<p>Route to create a Beacon</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the beacon</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "factoryId",
            "description": "<p>The factory id of the beacon</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "beaconType",
            "description": "<p>The type of beacon (used to decide beacon's configuration)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ beacon: BeaconObject }</code></p> <ul> <li>BeaconObject has format: <code>{ id: String, name: String, beaconType: String, factoryId: String, primary: Boolean, created: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/:id/beacons/create"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/places/:id/beacons/:beacon_id/destroy",
    "title": "Place: Destroy Beacon",
    "group": "WWW",
    "name": "PlaceBeaconDestroy",
    "version": "0.0.1",
    "description": "<p>Route to destroy a Beacon</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/:id/beacons/:beacon_id/destroy"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/places/:id/beacons/:beacon_id/destroy",
    "title": "Place: Destroy Beacon",
    "group": "WWW",
    "name": "PlaceBeaconDestroy",
    "version": "0.0.1",
    "description": "<p>Route to destroy a Beacon</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/:id/beacons/:beacon_id/destroy"
      }
    ]
  },
  {
    "type": "put",
    "url": "/places/:id/beacons/:beacon_id/update",
    "title": "Place: Update Beacon",
    "group": "WWW",
    "name": "PlaceBeaconUpdate",
    "version": "0.0.1",
    "description": "<p>Route to update a Beacon</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name to update Beacon to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ beacon: BeaconObject }</code></p> <ul> <li>BeaconObject has format: <code>{ id: String, name: String, beaconType: String, factoryId: String, primary: Boolean, created: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/:id/beacons/:beacon_id/update"
      }
    ]
  },
  {
    "type": "put",
    "url": "/places/:id/beacons/:beacon_id/update",
    "title": "Place: Update Beacon",
    "group": "WWW",
    "name": "PlaceBeaconUpdate",
    "version": "0.0.1",
    "description": "<p>Route to update a Beacon</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name to update Beacon to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ beacon: BeaconObject }</code></p> <ul> <li>BeaconObject has format: <code>{ id: String, name: String, beaconType: String, factoryId: String, primary: Boolean, created: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/:id/beacons/:beacon_id/update"
      }
    ]
  },
  {
    "type": "post",
    "url": "/places/create",
    "title": "Place: Create",
    "group": "WWW",
    "name": "PlaceCreate",
    "version": "0.0.1",
    "description": "<p>Create a new Place for a Company</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>The Company to create the Place for</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Place</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "geofenceType",
            "description": "<p>The type of geofence (radius or polygon)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "points",
            "description": "<p>An array of objects. Each object is a coordinate with keys lat(Number) &amp; lng(Number)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "radius",
            "description": "<p>The radius of the geofence (in meters). This is required if geofenceType is radius</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ place: PlaceObject }</code></p> <ul> <li>PlaceObject has format:</li> <li><code>{ id: String, name: String, created: String, primaryTrigger: String, triggers: [TriggerObject] }</code></li> <li>TriggerObject has format:</li> <li><code>{ id: String, name: String, type: String, categories: [String],</code></li> <li><code>  points: [{ lat: Float, lng: Float }], geofenceType: String, radius: Float, created: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/create"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/places/:id/destroy",
    "title": "Place: Destroy (Single)",
    "group": "WWW",
    "name": "PlaceDestroy",
    "version": "0.0.1",
    "description": "<p>Route to destroy a Place. This will remove an unsubscribe the Place from all Triggers</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>The company the Place belongs to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/:id/destroy"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/places/:id/destroy",
    "title": "Place: Destroy (Single)",
    "group": "WWW",
    "name": "PlaceDestroy",
    "version": "0.0.1",
    "description": "<p>Route to destroy a Place. This will remove an unsubscribe the Place from all Triggers</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>The company the Place belongs to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/:id/destroy"
      }
    ]
  },
  {
    "type": "get",
    "url": "/places/fetch",
    "title": "Place: Fetch (All)",
    "group": "WWW",
    "name": "PlaceFetch",
    "version": "0.0.1",
    "description": "<p>Route to retrieve Place documents belonging to a Company. This route will retrieve the places, but will not provide the trigger's associated with each Place.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trigger",
            "description": "<p>When provided, the response will include triggers for each place. Each trigger will include the value specified in this parameter as a field (i.e id, name, etc..). You may specify multiple fields to return by appending more trigger parameters to the url (i.e trigger=id&amp;trigger=name&amp;...)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>The Company the Place belongs to.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ places: [PlaceObject] }</code></p> <ul> <li>Each PlaceObject has the following format:</li> <li><code>{ id: String, name: String, created: String, primaryTrigger: String, triggers: [*TriggerObject] }</code></li> <li> <ul> <li>dependent on if trigger parameter was provided in request query.</li> </ul> </li> <li>Each TriggerObject has the following format (dependent on fields specified in trigger parameter):</li> <li><code>{ id: String, name: String, type: String, created: String, updated: String, place: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/fetch"
      }
    ]
  },
  {
    "type": "get",
    "url": "/places/fetch",
    "title": "Place: Fetch (All)",
    "group": "WWW",
    "name": "PlaceFetch",
    "version": "0.0.1",
    "description": "<p>Route to retrieve Place documents belonging to a Company. This route will retrieve the places, but will not provide the trigger's associated with each Place.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trigger",
            "description": "<p>When provided, the response will include triggers for each place. Each trigger will include the value specified in this parameter as a field (i.e id, name, etc..). You may specify multiple fields to return by appending more trigger parameters to the url (i.e trigger=id&amp;trigger=name&amp;...)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>The Company the Place belongs to.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ places: [PlaceObject] }</code></p> <ul> <li>Each PlaceObject has the following format:</li> <li><code>{ id: String, name: String, created: String, primaryTrigger: String, triggers: [*TriggerObject] }</code></li> <li> <ul> <li>dependent on if trigger parameter was provided in request query.</li> </ul> </li> <li>Each TriggerObject has the following format (dependent on fields specified in trigger parameter):</li> <li><code>{ id: String, name: String, type: String, created: String, updated: String, place: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/fetch"
      }
    ]
  },
  {
    "type": "post",
    "url": "/location/:id/geofences/create",
    "title": "Place: Create Geofence",
    "group": "WWW",
    "name": "PlaceGeofenceCreate",
    "version": "0.0.1",
    "description": "<p>Route to create a geofence</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the beacon</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "geofenceType",
            "description": "<p>The type of geofence (radius or polygon)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "points",
            "description": "<p>An array of objects. Each object is a coordinate with keys lat(Number) &amp; lng(Number)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "radius",
            "description": "<p>The radius of the geofence (in meters). This is required if geofenceType is radius</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ geofence: GeofenceObject }</code></p> <ul> <li>GeofenceObject has format:</li> <li><code>{ id: String, name: String, geofenceType: String, radius: Number,</code></li> <li><code>  points: [{ lat: Number, lng: Number }], primary: Boolean, created: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/location/:id/geofences/create"
      }
    ]
  },
  {
    "type": "post",
    "url": "/places/:id/geofences/create",
    "title": "Place: Create Geofence",
    "group": "WWW",
    "name": "PlaceGeofenceCreate",
    "version": "0.0.1",
    "description": "<p>Route to create a geofence</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the beacon</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "geofenceType",
            "description": "<p>The type of geofence (radius or polygon)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "points",
            "description": "<p>An array of objects. Each object is a coordinate with keys lat(Number) &amp; lng(Number)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "radius",
            "description": "<p>The radius of the geofence (in meters). This is required if geofenceType is radius</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ geofence: GeofenceObject }</code></p> <ul> <li>GeofenceObject has format:</li> <li><code>{ id: String, name: String, geofenceType: String, radius: Number,</code></li> <li><code>  points: [{ lat: Number, lng: Number }], primary: Boolean, created: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/:id/geofences/create"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/places/:id/geofences/:geofence_id/destroy",
    "title": "Place: Destroy Geofence",
    "group": "WWW",
    "name": "PlaceGeofenceDestroy",
    "version": "0.0.1",
    "description": "<p>Route to destroy a Geofence</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/:id/geofences/:geofence_id/destroy"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/places/:id/geofences/:geofence_id/destroy",
    "title": "Place: Destroy Geofence",
    "group": "WWW",
    "name": "PlaceGeofenceDestroy",
    "version": "0.0.1",
    "description": "<p>Route to destroy a Geofence</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/:id/geofences/:geofence_id/destroy"
      }
    ]
  },
  {
    "type": "put",
    "url": "/places/:id/geofences/:geofence_id/update",
    "title": "Place: Update Geofence",
    "group": "WWW",
    "name": "PlaceGeofenceUpdate",
    "version": "0.0.1",
    "description": "<p>Route to update a Geofence. The geofenceType parameter must be specified in order to update a geofence's radius or coordinates.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name to update Geofence to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "geofenceType",
            "description": "<p>The type of geofence (radius or polygon)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "points",
            "description": "<p>An array of objects. Each object is a coordinate with keys lat(Number) &amp; lng(Number)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "radius",
            "description": "<p>The radius of the geofence (in meters). This is required if geofenceType is radius</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ beacon: GeofenceObject }</code></p> <ul> <li>GeofenceObject has format:</li> <li><code>{ id: String, name: String, geofenceType: String, primary: Boolean, radius: Number,</code></li> <li><code>  points: [{ lat: Number, lng: Number }], created: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/:id/geofences/:geofence_id/update"
      }
    ]
  },
  {
    "type": "put",
    "url": "/places/:id/geofences/:geofence_id/update",
    "title": "Place: Update Geofence",
    "group": "WWW",
    "name": "PlaceGeofenceUpdate",
    "version": "0.0.1",
    "description": "<p>Route to update a Geofence. The geofenceType parameter must be specified in order to update a geofence's radius or coordinates.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name to update Geofence to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "geofenceType",
            "description": "<p>The type of geofence (radius or polygon)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "points",
            "description": "<p>An array of objects. Each object is a coordinate with keys lat(Number) &amp; lng(Number)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "radius",
            "description": "<p>The radius of the geofence (in meters). This is required if geofenceType is radius</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ beacon: GeofenceObject }</code></p> <ul> <li>GeofenceObject has format:</li> <li><code>{ id: String, name: String, geofenceType: String, primary: Boolean, radius: Number,</code></li> <li><code>  points: [{ lat: Number, lng: Number }], created: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/:id/geofences/:geofence_id/update"
      }
    ]
  },
  {
    "type": "get",
    "url": "/places/get-available-zipcodes",
    "title": "Place: Get Zipcodes",
    "group": "WWW",
    "name": "PlaceGetAvailableZipcodes",
    "version": "0.0.1",
    "description": "<p>Route to retrieve the cities/zipcodes available to subscrbe to by state/city, respectively.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>2 character state code. If provided, list of cities will be returned in response.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>The city used to find zipcodes that belong to the city.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ cities: [String], zipcodes: [String] }</code> When state is provided in request, the cities array will be returned in response. When city is provided in request, the zipcodes array will be returned in response.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/get-available-zipcodes"
      }
    ]
  },
  {
    "type": "get",
    "url": "/places/:id/triggers",
    "title": "Place: Fetch Triggers (All)",
    "group": "WWW",
    "name": "PlaceTriggers",
    "version": "0.0.1",
    "description": "<p>Route to retrieve Triggers associated with the given place</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ triggers: [GeofenceObject|ZipcodeObject|BeaconObject] }</code></p> <ul> <li>GeofenceObject has format: <code>{ id: String, name: String, type: String, categories: [String], primary: Boolean,</code> <code>  points: [{ lat: Float, lng: Float }], geofenceType: String, radius: Float, created: String }</code></li> <li>ZipcodeObject has format: <code>{ id: String, name: String, type: String, categories: [String],</code> <code>  points: [{ lat: Float, lng: Float }], geofenceType: String, radius: Float, created: String }</code></li> <li>BeaconObject has format: <code>{ id: String, name: String, type: String, categories: [String],</code> <code>  beaconType: String, factoryId: String, created: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/:id/triggers"
      }
    ]
  },
  {
    "type": "get",
    "url": "/places/:id/triggers",
    "title": "Place: Fetch Triggers (All)",
    "group": "WWW",
    "name": "PlaceTriggers",
    "version": "0.0.1",
    "description": "<p>Route to retrieve Triggers associated with the given place</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ triggers: [GeofenceObject|ZipcodeObject|BeaconObject] }</code></p> <ul> <li>GeofenceObject has format: <code>{ id: String, name: String, type: String, categories: [String], primary: Boolean,</code> <code>  points: [{ lat: Float, lng: Float }], geofenceType: String, radius: Float, created: String }</code></li> <li>ZipcodeObject has format: <code>{ id: String, name: String, type: String, categories: [String],</code> <code>  points: [{ lat: Float, lng: Float }], geofenceType: String, radius: Float, created: String }</code></li> <li>BeaconObject has format: <code>{ id: String, name: String, type: String, categories: [String],</code> <code>  beaconType: String, factoryId: String, created: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/:id/triggers"
      }
    ]
  },
  {
    "type": "get",
    "url": "/places/:id/triggers",
    "title": "Place: Fetch Triggers (All)",
    "group": "WWW",
    "name": "PlaceTriggers",
    "version": "0.0.1",
    "description": "<p>Route to retrieve Triggers associated with the given place</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ triggers: [GeofenceObject|ZipcodeObject|BeaconObject] }</code></p> <ul> <li>GeofenceObject has format: <code>{ id: String, name: String, type: String, categories: [String], primary: Boolean,</code> <code>  points: [{ lat: Float, lng: Float }], geofenceType: String, radius: Float, created: String }</code></li> <li>ZipcodeObject has format: <code>{ id: String, name: String, type: String, categories: [String],</code> <code>  points: [{ lat: Float, lng: Float }], geofenceType: String, radius: Float, created: String }</code></li> <li>BeaconObject has format: <code>{ id: String, name: String, type: String, categories: [String],</code> <code>  beaconType: String, factoryId: String, created: String }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/:id/triggers"
      }
    ]
  },
  {
    "type": "put",
    "url": "/places/:id/update",
    "title": "Place: Update",
    "group": "WWW",
    "name": "PlaceUpdate",
    "version": "0.0.1",
    "description": "<p>Route to update a Place</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>The Company to create the Place for</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The new name to give the Place.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ place: PlaceObject }</code></p> <ul> <li>Each PlaceObject has the following format:</li> <li><code>{ id: String, name: String, created: String, primaryTrigger: String, triggers: [] }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/:id/update"
      }
    ]
  },
  {
    "type": "put",
    "url": "/places/:id/update",
    "title": "Place: Update",
    "group": "WWW",
    "name": "PlaceUpdate",
    "version": "0.0.1",
    "description": "<p>Route to update a Place</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>The Company to create the Place for</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The new name to give the Place.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ place: PlaceObject }</code></p> <ul> <li>Each PlaceObject has the following format:</li> <li><code>{ id: String, name: String, created: String, primaryTrigger: String, triggers: [] }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/:id/update"
      }
    ]
  },
  {
    "type": "post",
    "url": "/places/:id/zipcodes/subscribe",
    "title": "Place: Subscribe to Zipcode",
    "group": "WWW",
    "name": "PlaceZipcodeSubscribe",
    "version": "0.0.1",
    "description": "<p>Route to subscribe to a set of zipcodes.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "zipcodes",
            "description": "<p>An array of zipcodes to subscribe the place to.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ zipcodes: [ZipcodeObject] }</code></p> <ul> <li>ZipcodeObject has format: <code>{ id: String, name: String, type: String, categories: [String] }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/:id/zipcodes/subscribe"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/places/:id/zipcodes/:trigger_id/unsubscribe",
    "title": "Place: Unsubsribe from Zipcode",
    "group": "WWW",
    "name": "PlaceZipcodeUnsubscribe",
    "version": "0.0.1",
    "description": "<p>Route to unsubscribe to a zipcode.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/places.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/places/:id/zipcodes/:trigger_id/unsubscribe"
      }
    ]
  },
  {
    "type": "post",
    "url": "/roles/create",
    "title": "Roles: Create",
    "group": "WWW",
    "name": "RolesCreate",
    "version": "0.0.1",
    "description": "<p>Roles Create</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Header with the format <code>{token}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: true, rows: roles, message: &quot;Roles List&quot; }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'InvalidRequest:' + err.message }</code></p>"
          }
        ],
        "Error 401": [
          {
            "group": "Error 401",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'Unauthorized' }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/roles.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/roles/create"
      }
    ]
  },
  {
    "type": "get",
    "url": "/roles/delete",
    "title": "Roles: Delete",
    "group": "WWW",
    "name": "RolesDelete",
    "version": "0.0.1",
    "description": "<p>Roles Delete</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Header with the format <code>{token}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: true, rows: roles, message: &quot;Roles List&quot; }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'InvalidRequest:' + err.message }</code></p>"
          }
        ],
        "Error 401": [
          {
            "group": "Error 401",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'Unauthorized' }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/roles.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/roles/delete"
      }
    ]
  },
  {
    "type": "get",
    "url": "/roles/list",
    "title": "Roles: List",
    "group": "WWW",
    "name": "RolesList",
    "version": "0.0.1",
    "description": "<p>Roles List</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Header with the format <code>{token}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: true, rows: roles, message: &quot;Roles List&quot; }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'InvalidRequest:' + err.message }</code></p>"
          }
        ],
        "Error 401": [
          {
            "group": "Error 401",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'Unauthorized' }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/roles.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/roles/list"
      }
    ]
  },
  {
    "type": "get",
    "url": "/roles/list",
    "title": "Roles: List",
    "group": "WWW",
    "name": "RolesList",
    "version": "0.0.1",
    "description": "<p>Roles list</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Header with the format <code>{token}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: true, rows: roles, message: &quot;Roles List&quot; }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'InvalidRequest:' + err.message }</code></p>"
          }
        ],
        "Error 401": [
          {
            "group": "Error 401",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'Unauthorized' }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/roles.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/roles/list"
      }
    ]
  },
  {
    "type": "get",
    "url": "/roles/modules",
    "title": "Roles: Modules",
    "group": "WWW",
    "name": "RolesModules",
    "version": "0.0.1",
    "description": "<p>Roles Modules</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Header with the format <code>{token}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: true, rows: modules, message: &quot;Modules List&quot; }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'InvalidRequest:' + err.message }</code></p>"
          }
        ],
        "Error 401": [
          {
            "group": "Error 401",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'Unauthorized' }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/roles.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/roles/modules"
      }
    ]
  },
  {
    "type": "post",
    "url": "/roles/update",
    "title": "Roles: Update",
    "group": "WWW",
    "name": "RolesUpdate",
    "version": "0.0.1",
    "description": "<p>Roles Update</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Header with the format <code>{token}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: true, rows: roles, message: &quot;Roles List&quot; }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'InvalidRequest:' + err.message }</code></p>"
          }
        ],
        "Error 401": [
          {
            "group": "Error 401",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'Unauthorized' }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/roles.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/roles/update"
      }
    ]
  },
  {
    "type": "get",
    "url": "/roles/:roleId",
    "title": "Roles: View",
    "group": "WWW",
    "name": "RolesView",
    "version": "0.0.1",
    "description": "<p>Roles View</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Header with the format <code>{token}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: true, rows: roles, message: &quot;Roles List&quot; }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'InvalidRequest:' + err.message }</code></p>"
          }
        ],
        "Error 401": [
          {
            "group": "Error 401",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'Unauthorized' }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/roles.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/roles/:roleId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/users/change-password",
    "title": "User: Change Password",
    "group": "WWW",
    "name": "UserChangePassword",
    "version": "0.0.1",
    "description": "<p>Change password for a User. In order for this route to work, either Authorization header must be set, or token and email are set in request</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The password reset token of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email address for the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>The old password for the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The new password for the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwordConfirmation",
            "description": "<p>Password confirmation for the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ token: String, status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/users.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/users/change-password"
      }
    ]
  },
  {
    "type": "post",
    "url": "/users/change-password",
    "title": "User: Change Password",
    "group": "WWW",
    "name": "UserChangePassword",
    "version": "0.0.1",
    "description": "<p>Change password for a User. In order for this route to work, either Authorization header must be set, or token and email are set in request</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The password reset token of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email address for the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>The old password for the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The new password for the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwordConfirmation",
            "description": "<p>Password confirmation for the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ token: String, status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/users.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/users/change-password"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/data",
    "title": "User: Fetch Data",
    "group": "WWW",
    "name": "UserData",
    "version": "0.0.1",
    "description": "<p>Retrieves data for the User</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ user: UserObject }</code></p> <ul> <li>UserObject has the following format: <code>{ id: String, name: String, email: String, company: String, isNew: Boolean }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/users.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/users/data"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/data",
    "title": "User: Fetch Data",
    "group": "WWW",
    "name": "UserData",
    "version": "0.0.1",
    "description": "<p>Retrieves data for the User</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ user: UserObject }</code></p> <ul> <li>UserObject has the following format: <code>{ id: String, name: String, email: String, company: String, isNew: Boolean }</code></li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/users.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/users/data"
      }
    ]
  },
  {
    "type": "post",
    "url": "/users/forgot-password",
    "title": "User: Forgot Password",
    "group": "WWW",
    "name": "UserForgotPassword",
    "version": "0.0.1",
    "description": "<p>Submits a forgot password request for the User. Sends an email to User</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address of User</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ success:true,message:'Request sent to your email'}</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/users.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/users/forgot-password"
      }
    ]
  },
  {
    "type": "post",
    "url": "/users/forgot-password",
    "title": "User: Forgot Password",
    "group": "WWW",
    "name": "UserForgotPassword",
    "version": "0.0.1",
    "description": "<p>Submits a forgot password request for the User. Sends an email to User</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address of User</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/users.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/users/forgot-password"
      }
    ]
  },
  {
    "type": "post",
    "url": "/profile/update",
    "title": "User: User profile update",
    "group": "WWW",
    "name": "UserProfileUpdate",
    "version": "0.0.1",
    "description": "<p>User can update his profile information</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Header with the format <code>{token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The password reset token of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>The firstName for the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>The lastName for the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>The phone for the User</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{status:true,rows:{firstName:user.firstName,lastName:user.lastName},message:'User updated successfully'}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{sucess:false,message:'Unauthorized'}</code></p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{success: false, message: err}</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/users.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/profile/update"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/reset-password",
    "title": "User: Fetch Reset Password",
    "group": "WWW",
    "name": "UserResetPassword",
    "version": "0.0.1",
    "description": "<p>Start reset password process for the User. Request is made to verify that the User id and token combination is for a valid reset</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The password reset token for the User</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ user: { id: String, email: String, token: String } }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ user: { id: String , email: String, token: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/users.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/users/reset-password"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/:id/reset-password",
    "title": "User: Fetch Reset Password",
    "group": "WWW",
    "name": "UserResetPassword",
    "version": "0.0.1",
    "description": "<p>Start reset password process for the User. Request is made to verify that the User id and token combination is for a valid reset</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The password reset token for the User</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ user: { id: String, email: String, token: String } }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/users.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/users/:id/reset-password"
      }
    ]
  },
  {
    "type": "get",
    "url": "/companies/roles",
    "title": "Company: User Roles",
    "group": "WWW",
    "name": "UserRoles",
    "version": "0.0.1",
    "description": "<p>User Roles list</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Header with the format <code>{token}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{success:true,rows: roles}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{success: false, message: err}</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/companies.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/companies/roles"
      }
    ]
  },
  {
    "type": "post",
    "url": "/users/signin",
    "title": "User: Signin",
    "group": "WWW",
    "name": "UserSignin",
    "version": "0.0.1",
    "description": "<p>Signin a user to the website. Once signed in, a token will be generated and sent back to client.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ token: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/users.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/users/signin"
      }
    ]
  },
  {
    "type": "post",
    "url": "/users/signin",
    "title": "User: Signin",
    "group": "WWW",
    "name": "UserSignin",
    "version": "0.0.1",
    "description": "<p>Signin a user to the website. Once signed in, a token will be generated and sent back to client.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ token: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/users.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/users/signin"
      }
    ]
  },
  {
    "type": "put",
    "url": "/users/:id/tour-complete",
    "title": "User: Tour Complete",
    "group": "WWW",
    "name": "UserTourComplete",
    "version": "0.0.1",
    "description": "<p>Mark tour complete</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/users.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/users/:id/tour-complete"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/adduser",
    "title": "User: Add New User",
    "group": "WWW",
    "name": "adduser",
    "version": "0.0.1",
    "description": "<p>Change password for a User. In order for this route to work, either Authorization header must be set, or token and email are set in request</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The password reset token of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email address for the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>The old password for the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The new password for the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwordConfirmation",
            "description": "<p>Password confirmation for the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ status: true, rows: [], message: 'User created successfully' }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/users.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/users/adduser"
      }
    ]
  },
  {
    "type": "get",
    "url": "/groups/delete/:groupId",
    "title": "Groups: delete",
    "group": "WWW",
    "name": "delete_group",
    "version": "0.0.1",
    "description": "<p>Change password for a User. In order for this route to work,</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ status: true, rows: [], msg: 'Group deleted successfully!' }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ status: false, msg: err }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/groups.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/groups/delete/:groupId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/delete-user:",
    "title": "Delete  User",
    "group": "WWW",
    "name": "delete_user",
    "version": "0.0.1",
    "description": "<p>Change password for a User. In order for this route to work, either Authorization header must be set, or token and email are set in request</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The password reset token of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email address for the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>The old password for the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The new password for the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwordConfirmation",
            "description": "<p>Password confirmation for the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ token: String, status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/users.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/users/delete-user:"
      }
    ]
  },
  {
    "type": "get",
    "url": "/lookups/business:",
    "title": "Get business list",
    "group": "WWW",
    "name": "getBusinessList",
    "version": "0.0.1",
    "description": "<p>Get business list</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{'success':true,'rows':business,'message':'Business list'}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ success: false, message: err }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/lookups.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/lookups/business:"
      }
    ]
  },
  {
    "type": "get",
    "url": "/lookups/countries:",
    "title": "Get countries list",
    "group": "WWW",
    "name": "getCountriesList",
    "version": "0.0.1",
    "description": "<p>Get countries list</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{'success':true,'rows':countries,'message':'Countries list'}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ success: false, message: err }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/lookups.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/lookups/countries:"
      }
    ]
  },
  {
    "type": "get",
    "url": "/lookups/partners/:businessType:",
    "title": "Get specified business type partners list",
    "group": "WWW",
    "name": "getPrimaryBusinessType",
    "version": "0.0.1",
    "description": "<p>Get Primary Business Type list</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{'success':true,'rows':partners,'message':'Primary Business Type list'}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ success: false, message: err }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/lookups.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/lookups/partners/:businessType:"
      }
    ]
  },
  {
    "type": "get",
    "url": "/lookups/states:",
    "title": "Get states list",
    "group": "WWW",
    "name": "getStatesList",
    "version": "0.0.1",
    "description": "<p>Get states list</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{'success':true,'rows':states,'message':'States list'}</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ success: false, message: err }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/lookups.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/lookups/states:"
      }
    ]
  },
  {
    "type": "post",
    "url": "/loyalty-programmes/create",
    "title": "loyaltyProgrammes: create",
    "group": "WWW",
    "name": "loyaltyProgrammesCreate",
    "version": "0.0.1",
    "description": "<p>We can create loyalty programmes</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_firstname",
            "description": "<p>User's first name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_lastname",
            "description": "<p>User's last name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_password",
            "description": "<p>User's password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_passwordconfirmation",
            "description": "<p>Confirmation of User's password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_verification",
            "description": "<p>Verification string (access code)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "company_name",
            "description": "<p>Company's name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ token: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/loyaltyProgrammes.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/loyalty-programmes/create"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/manage-userlistr:",
    "title": "Manage User List",
    "group": "WWW",
    "name": "manage_userlist",
    "version": "0.0.1",
    "description": "<p>Change password for a User. In order for this route to work, either Authorization header must be set, or token and email are set in request</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The password reset token of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email address for the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>The old password for the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The new password for the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwordConfirmation",
            "description": "<p>Password confirmation for the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ token: String, status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/users.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/users/manage-userlistr:"
      }
    ]
  },
  {
    "type": "post",
    "url": "/onboardedconsumers/csv-import",
    "title": "onboardedconsumers: CSV Upload",
    "group": "WWW",
    "name": "onboardedconsumersCSVUpload",
    "version": "0.0.1",
    "description": "<p>We can display on boarding consumers</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Header with the format <code>{token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "file",
            "description": "<p>Consumer uploaded file</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ succes: true, rows: obj, message: 'CSV uploaded successfully' }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ succes: false, message: 'InvalidRequest' }</code></p>"
          }
        ],
        "Error 401": [
          {
            "group": "Error 401",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'Unauthorized' }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/onBoardedConsumers.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/onboardedconsumers/csv-import"
      }
    ]
  },
  {
    "type": "post",
    "url": "/onboardedconsumers/create",
    "title": "onboardedconsumers: Create",
    "group": "WWW",
    "name": "onboardedconsumersCreate",
    "version": "0.0.1",
    "description": "<p>We can create on boarding consumers</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Header with the format <code>{token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>consumers's first name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>consumers's last name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>consumers's phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>consumers's email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "vechileDetails",
            "description": "<p>vechil object with format: <code>{vin: String, make: String, model: String, yearOfPurchase: String, typeOfPurchase: String, leaseOrRentStart: String, leaseOrRentEnd: String}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ succes: true, message: 'On Boarded Consumer created successfully' }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ succes: false, message: 'Unauthorized' }</code></p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'InvalidRequest' }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/onBoardedConsumers.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/onboardedconsumers/create"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/onboardedconsumers/destroy/:consumerId",
    "title": "onboardedconsumers: Delete (Single)",
    "group": "WWW",
    "name": "onboardedconsumersDelete",
    "version": "0.0.1",
    "description": "<p>We can destroy on boarding consumers</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Header with the format <code>{token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "consumerId",
            "description": "<p>consumers's Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ succes: true, message: 'On Boarded Consumer removed successfully' }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'OnBoardedDestroyError' }</code></p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'companyId is required' }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/onBoardedConsumers.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/onboardedconsumers/destroy/:consumerId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/onboardedconsumers/list",
    "title": "onboardedconsumers: List",
    "group": "WWW",
    "name": "onboardedconsumersList",
    "version": "0.0.1",
    "description": "<p>We can display on boarding consumers</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Header with the format <code>{token}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code></code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'InvalidRequest:' + err.message }</code></p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'companyId is required' }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/onBoardedConsumers.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/onboardedconsumers/list"
      }
    ]
  },
  {
    "type": "post",
    "url": "/onboardedconsumers/update",
    "title": "onboardedconsumers: Update",
    "group": "WWW",
    "name": "onboardedconsumersUpdate",
    "version": "0.0.1",
    "description": "<p>We can Update on boarding consumers</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Header with the format <code>{token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "consumerId",
            "description": "<p>consumers's Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>consumers's first name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>consumers's last name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>consumers's phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>consumers's email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "vechileDetails",
            "description": "<p>vechil object with format: <code>{vin: String, make: String, model: String, yearOfPurchase: String, typeOfPurchase: String, leaseOrRentStart: String, leaseOrRentEnd: String}</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ succes: true, message: 'On Boarded Consumer updated successfully' }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ succes: false, message: 'On Board Consumer create error' }</code></p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'InvalidRequest' }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/onBoardedConsumers.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/onboardedconsumers/update"
      }
    ]
  },
  {
    "type": "get",
    "url": "/onboardedconsumers/view/:consumerId",
    "title": "onboardedconsumers: View",
    "group": "WWW",
    "name": "onboardedconsumersView",
    "version": "0.0.1",
    "description": "<p>We can view on boarding consumer</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Header with the format <code>{token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "consumerId",
            "description": "<p>Consumer Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format: <code>{ succes: true, rows: obj, message: 'Consumer Details' }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ succes: false, message: 'InvalidRequest' }</code></p>"
          }
        ],
        "Error 401": [
          {
            "group": "Error 401",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ sucess: false, message: 'Unauthorized' }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/onBoardedConsumers.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/onboardedconsumers/view/:consumerId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/updateuser:",
    "title": "update  User",
    "group": "WWW",
    "name": "updateuser",
    "version": "0.0.1",
    "description": "<p>Change password for a User. In order for this route to work, either Authorization header must be set, or token and email are set in request</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Header with the format <code>BEARER {token}</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The password reset token of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email address for the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>The old password for the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The new password for the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwordConfirmation",
            "description": "<p>Password confirmation for the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ token: String, status: String }</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "response",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object with format <code>{ error: String }</code></p>"
          }
        ]
      }
    },
    "filename": "Api/controllers/users.controller.js",
    "groupTitle": "WWW",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/users/updateuser:"
      }
    ]
  }
] });
