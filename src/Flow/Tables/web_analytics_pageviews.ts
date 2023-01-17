const webAnalyticsPageviewsTable = {
  schema: "web_analytics",
  name: "pageviews",
  columns: [
    {
      name: "pageview_id",
      description: "Unique identifier of a pageview.",
      type: "text",
      handleType: "source",
      key: true
    },
    {
      name: "visitor_id",
      description: "Unique identifier of a visitor. A fingerprint used to keep track of guest visitors who haven’t had signed up.",
      type: "text",
      handleType: "target"
    },
    {
      name: "user_id",
      description: "If user is logged in – ID of a user in users table.",
      type: "integer",
      handleType: "target"
    },
    {
      name: "url",
      description: "URL of the visited page.",
      type: "text"
    },
    {
      name: "referer_url",
      description: "URL of the previous page where user clicked on a link with URL.",
      type: "text"
    },
    {
      name: "screen_resolution",
      description: "Screen resolution of a user’s device. Example: 1024x1366.",
      type: "text"
    },
    {
      name: "device_type",
      description: "Type of a user’s device. Could be mobile, tablet or desktop.",
      type: "text"
    },
    {
      name: "custom_parameters",
      description: "All custom parameters of a pageview in a key-value format. Could be added per page, for example we might add ab_test_variation key to keep track of what AB-test variation user had seen.",
      type: "JSON"
    },
    {
      name: "created_at",
      description: "Timestamp of a pageview.",
      type: "datetime"
    },
    {
      name: "country",
      description: "Country derived from user’s IP address.",
      type: "text"
    },
  ]
};

export default webAnalyticsPageviewsTable;
