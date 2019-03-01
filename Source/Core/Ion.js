define([
        './Credit',
        './defined',
        './Resource'
    ], function(
        Credit,
        defined,
        Resource) {
    'use strict';

    var defaultTokenCredit;
    var defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkZDJhY2VhYy0wYzljLTRiNWUtYmNhOC04OTQyZDk1YmZhMDkiLCJpZCI6MjU5LCJzY29wZXMiOlsiYXNyIiwiZ2MiXSwiaWF0IjoxNTUxNDUyMjc4fQ.B5BkE4TUBja1yOnT9sC6t8rrWghvVep21tzBq6r7aHo';
    var cesiumjsDotOrgToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMGRjM2QxYi04ODM2LTQzMDEtOGJmOS1mNDlkY2Q2NjE4MjciLCJpZCI6MjU5LCJpYXQiOjE1MjU5NjYyMDd9.xW9loNLo68KE3ReAHd-Lp73M8qJKhI9vA0wYL-qJX_I';

    /**
     * Default settings for accessing the Cesium ion API.
     * @exports Ion
     *
     * An ion access token is only required if you are using any ion related APIs.
     * A default access token is provided for evaluation purposes only.
     * Sign up for a free ion account and get your own access token at {@link https://cesium.com}
     *
     * @see IonResource
     * @see IonImageryProvider
     * @see IonGeocoderService
     * @see createWorldImagery
     * @see createWorldTerrain
     */
    var Ion = {};

    /**
     * Gets or sets the default Cesium ion access token.
     *
     * @type {String}
     */
    Ion.defaultAccessToken = cesiumjsDotOrgToken;

    /**
     * Gets or sets the default Cesium ion server.
     *
     * @type {String|Resource}
     * @default https://api.cesium.com
     */
    Ion.defaultServer = new Resource({ url: 'https://api.cesium.com/' });

    Ion.getDefaultTokenCredit = function(providedKey) {
        if (providedKey !== defaultAccessToken) {
            return undefined;
        }

        if (!defined(defaultTokenCredit)) {
            var defaultTokenMessage = '<b> \
            This application is using Cesium\'s default ion access token. Please assign <i>Cesium.Ion.defaultAccessToken</i> \
            with an access token from your ion account before making any Cesium API calls. \
            You can sign up for a free ion account at <a href="https://cesium.com">https://cesium.com</a>.</b>';

            defaultTokenCredit = new Credit(defaultTokenMessage, true);
        }

        return defaultTokenCredit;
    };

    return Ion;
});
