report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../../../backstop_data/bitmaps_reference/TencentMobileMap_BackstopJS_Homepage_0_document_0_phone6.png",
        "test": "../../../backstop_data/bitmaps_test/20210323-223401/TencentMobileMap_BackstopJS_Homepage_0_document_0_phone6.png",
        "selector": "document",
        "fileName": "TencentMobileMap_BackstopJS_Homepage_0_document_0_phone6.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone6",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "3.14",
          "analysisTime": 19
        },
        "diffImage": "../../../backstop_data/bitmaps_test/20210323-223401/failed_diff_TencentMobileMap_BackstopJS_Homepage_0_document_0_phone6.png"
      },
      "status": "fail"
    }
  ],
  "id": "Tencent Mobile Map"
});