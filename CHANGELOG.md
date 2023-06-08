# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.1.1](https://github.com/mutoe/koam/compare/v1.1.0...v1.1.1) (2023-06-08)


### Bug Fixes

* **koam:** should not rewrite response content type when set body ([b0e4bf7](https://github.com/mutoe/koam/commit/b0e4bf73bbc8091ba104c51bd7ff4cd6079091b4))





# [1.1.0](https://github.com/mutoe/koam/compare/v1.0.1...v1.1.0) (2023-06-08)


### Features

* **koam:** inside koa connect middleware ([b42121c](https://github.com/mutoe/koam/commit/b42121cb46936e602a869295b2ab8ada0182533c))





## [1.0.1](https://github.com/mutoe/koam/compare/v1.0.0...v1.0.1) (2023-06-01)


### Bug Fixes

* **router:** mark peer dependency koam require ^1.0.0 ([8216bf9](https://github.com/mutoe/koam/commit/8216bf991d5f251c785463d05a7ba3df3314ec96))





# [1.0.0](https://github.com/mutoe/koam/compare/v0.3.2...v1.0.0) (2023-06-01)


### Bug Fixes

* **koam:** do not update response status after manual assigned when redirect ([ad95673](https://github.com/mutoe/koam/commit/ad9567327a23a28f4c27bc4b916bd75cc51e8b2f))
* **koam:** fix useless state property ([99ef7a5](https://github.com/mutoe/koam/commit/99ef7a5c6c9827b034a84ce40bcf9b4e9f211503))
* **koam:** should return correct status when body is different ([59782c2](https://github.com/mutoe/koam/commit/59782c2ecfa9c437fd0905ec6f0ab1c7dfc0992a))
* path resolve issue ([949a18e](https://github.com/mutoe/koam/commit/949a18e55aa120af1593546c451f0953462e39a0))
* **router:** fix unnamed modifiers path match ([70ecd50](https://github.com/mutoe/koam/commit/70ecd50015715dfa8c2ccf3d09817522f4ee65e4))
* **router:** recovery allowedMethods feature after refactor ([f227963](https://github.com/mutoe/koam/commit/f227963be3357656ec30936811f3ccf944ced460))
* **router:** recovery prefix feature after refactor ([335fea3](https://github.com/mutoe/koam/commit/335fea36807c5d635d076768798a540cbdcfe756))
* **router:** recovery router.param method ([3d0422b](https://github.com/mutoe/koam/commit/3d0422b35b9a95887b4ede064b53d7bec22da2c9))
* **router:** recovery router.use feature after refactor ([b487c79](https://github.com/mutoe/koam/commit/b487c7951af019589aa0dba38807de6ec662759d))
* **router:** should match correct route when multiple declare different method routes ([194585b](https://github.com/mutoe/koam/commit/194585bedc9751903e55598493f92c4939fe11e9))
* **router:** should rewrite the previous named route when redeclare named route ([98a84e5](https://github.com/mutoe/koam/commit/98a84e51c38ee6c4a6a97e454476dce2595b61b9))


### Features

* implement basic router match method ([a8c3575](https://github.com/mutoe/koam/commit/a8c3575e71f935e0d408fa1ecce87c44d41a9b62))
* implement context parameters ([38574b5](https://github.com/mutoe/koam/commit/38574b5648a4323dee2105a72fee7401f5a78000))
* **koam:** add more 3xx http status ([90b4349](https://github.com/mutoe/koam/commit/90b434909648ed3e934b8b5f92ad4695e034a893))
* **koam:** export Koa namespace to override ([31f3c62](https://github.com/mutoe/koam/commit/31f3c62810dfad4f75d6d7d9386a43d743980198))
* **koam:** support ctx.attachment method ([6eec41c](https://github.com/mutoe/koam/commit/6eec41cd5c7b56feef2a5d4453b49eeaccb0f3bb))
* refine path-regexp method ([1b9e058](https://github.com/mutoe/koam/commit/1b9e058bd1f80a6c5a97e2f6d4272727a586c1cf))
* **router:** implement basic router.allowedMethods ([986effb](https://github.com/mutoe/koam/commit/986effbf8080ef79f68f768769a6aa796f12decb))
* **router:** implement basic url method ([2e912d5](https://github.com/mutoe/koam/commit/2e912d510c28a43c61aa70a52d058104d8d6fcbf))
* **router:** implement context params ([d86bb83](https://github.com/mutoe/koam/commit/d86bb8356c26320cef647e3bf15f4b5c569c70b7))
* **router:** implement nested routers ([d1464ad](https://github.com/mutoe/koam/commit/d1464adecc62a0ded6afbb6197a114470f5e9a36))
* **router:** implement router.param method ([89ff859](https://github.com/mutoe/koam/commit/89ff8592af1709f8080d2571ebb42de0942ee0eb))
* **router:** implement router.prefix ([a3206b4](https://github.com/mutoe/koam/commit/a3206b4ae7d2afb7291a5d40520235ffec08f3b3))
* **router:** implement router.redirect method ([1a068b6](https://github.com/mutoe/koam/commit/1a068b60369afba717d3eb989eee902c7baa73cc))
* **router:** implement router.use method ([779771b](https://github.com/mutoe/koam/commit/779771b7e8d91052cb772dbb3760d0e2a9e88ace))
* **router:** path match support standalone modifier '*' and '+' ([7656683](https://github.com/mutoe/koam/commit/765668334b891e28e2d2ec7139344cb1c349f7df))
* **router:** support constructor prefix argument ([6c70bce](https://github.com/mutoe/koam/commit/6c70bce8375e5b3147f57df8715511b970911084))
* **router:** support router params list when call url method ([b91f4d6](https://github.com/mutoe/koam/commit/b91f4d6de50eb6cd31bfba6127a80e35367573c8))
* **router:** support use array path ([fb06153](https://github.com/mutoe/koam/commit/fb06153cac74a4cc12f5ea470664adf500f4e5ca))
* **router:** url method support pass in query parameter ([2045cb7](https://github.com/mutoe/koam/commit/2045cb784ff5800e07b2c7b6db59793aa45d8751))
* support basic router path match ([ec6e797](https://github.com/mutoe/koam/commit/ec6e797cdc02c5d81751a917333e1dac9f5b9af6))
* support context.length ([2a420a1](https://github.com/mutoe/koam/commit/2a420a14d7ee6f706efcd2f5ccaf70801b425b68))
* support stream as response body ([4a62eca](https://github.com/mutoe/koam/commit/4a62eca39d7e467c22fd8cf5ec31cac1273d3d16))





## [0.3.2](https://github.com/mutoe/koam/compare/v0.3.1...v0.3.2) (2023-05-17)


### Bug Fixes

* assert function using issue ([90960a4](https://github.com/mutoe/koam/commit/90960a443f4cc772dce34cca50f4aedf1768c5b6))





## [0.3.1](https://github.com/mutoe/koam/compare/v0.3.0...v0.3.1) (2023-05-16)


### Bug Fixes

* cannot using external lib issue ([4bd4d03](https://github.com/mutoe/koam/commit/4bd4d032896e9616d6559c3ad5ca50445bf41c8d))





# [0.3.0](https://github.com/mutoe/koam/compare/v0.2.4...v0.3.0) (2023-05-16)


### Bug Fixes

* path issue after upgrade ts and eslint ([06a8c3d](https://github.com/mutoe/koam/commit/06a8c3dc962e66c61ce44f27e8a6129bd9e3e445))


### Features

* **router:** add basic path-to-regexp util function ([7312da0](https://github.com/mutoe/koam/commit/7312da0c12009c3ac51ac96578cd299607ccff6c))
* **router:** add basic path-to-regexp util function ([6705c40](https://github.com/mutoe/koam/commit/6705c40742e29dbfd6279b21f240ac67a8813b2c))
* **router:** implement asterisk and plus sign in path regexp ([6440fca](https://github.com/mutoe/koam/commit/6440fca85c2389dff795c5b9ea1b06d976edb09d))





## [0.2.4](https://github.com/mutoe/koam/compare/v0.2.3...v0.2.4) (2023-05-05)


### Bug Fixes

* entrypoint for esm ([eaaed98](https://github.com/mutoe/koam/commit/eaaed98eff9717cb2d2b462099f5edb233d02a32))
* entrypoint for esm ([53ef01e](https://github.com/mutoe/koam/commit/53ef01e0d3a4fc091f280d8df5371361b3b01b96))





## [0.2.3](https://github.com/mutoe/koam/compare/v0.2.2...v0.2.3) (2023-05-05)


### Bug Fixes

* entrypoint for esm ([dbe1d90](https://github.com/mutoe/koam/commit/dbe1d9098b3cc1bc53b85210e9b85e43135a1792))





## [0.2.2](https://github.com/mutoe/koam/compare/v0.2.1...v0.2.2) (2023-05-05)


### Bug Fixes

* entrypoint for esm ([da07d83](https://github.com/mutoe/koam/commit/da07d832bb58de824699295aaedb62770f5cabb5))





## [0.2.1](https://github.com/mutoe/koam/compare/v0.2.0...v0.2.1) (2023-05-05)


### Bug Fixes

* node module has no default export issue ([b9946c9](https://github.com/mutoe/koam/commit/b9946c9534d307cbb19238fd96c7f50992617e3e))





# [0.2.0](https://github.com/mutoe/koam/compare/v0.1.4...v0.2.0) (2023-05-05)


### Bug Fixes

* set verbatimModuleSyntax to true for swc project ([ee04cd4](https://github.com/mutoe/koam/commit/ee04cd4a6641330897664cf982151a4af99a9253))
* set verbatimModuleSyntax to true for swc project ([79ee8da](https://github.com/mutoe/koam/commit/79ee8da5daa4d9ce9f05cdbe0ba3fa12d936f108))





## [0.1.4](https://github.com/mutoe/koam/compare/v0.1.3...v0.1.4) (2023-05-05)


### Bug Fixes

* koam router cannot publish issue ([b8f1fe2](https://github.com/mutoe/koam/commit/b8f1fe204394c479f44790c03bd8403573a10214))





## [0.1.3](https://github.com/mutoe/koam/compare/v0.1.2...v0.1.3) (2023-05-05)


### Bug Fixes

* released package does not have type declaration issue ([bd10d00](https://github.com/mutoe/koam/commit/bd10d005703b6e7433af487cde93078424e0ff99))


### Features

* **router:** add http verb methods ([25dff24](https://github.com/mutoe/koam/commit/25dff241864993f60c9424aff580621b352748f8))





## [0.1.2](https://github.com/mutoe/koam/compare/v0.1.1...v0.1.2) (2022-11-07)

**Note:** Version bump only for package koam





## [0.1.1](https://github.com/mutoe/koam/compare/v0.1.0...v0.1.1) (2022-11-07)

**Note:** Version bump only for package koam





# 0.1.0 (2022-11-07)


### Bug Fixes

* body parser need to await result ([3ff175f](https://github.com/mutoe/koam/commit/3ff175f078520c7710fa5caabb0b846fbb2ef0ff))
* parseQuery return type ([927e487](https://github.com/mutoe/koam/commit/927e487742ef5f911fa3f694ebc5ff00e5720f48))
* parseQuery should return empty when query key not exist ([a07a56c](https://github.com/mutoe/koam/commit/a07a56c0733af1eedca7191d26ac25921e2bf3a8))
* parseQuery support PHP-like simple array ([1f8c403](https://github.com/mutoe/koam/commit/1f8c40313a55f6adacb632299054d9f34e1905e2))
* parseQuery support simple array ([fe74085](https://github.com/mutoe/koam/commit/fe740859ff03b9b953fa9d16a38bcee656216cc0))
* plain text response body ([0991298](https://github.com/mutoe/koam/commit/09912983d63e928ce89e53bc2d848741c184286d))
* unexpected buffer concat ([dcf4c91](https://github.com/mutoe/koam/commit/dcf4c91dd0768c518ab41e23ef3bc9c99ec95619))


### Features

* add context path support ([a62cb98](https://github.com/mutoe/koam/commit/a62cb98a96ccd956ef88558538e8d564224933fe))
* add context query support ([2733d5b](https://github.com/mutoe/koam/commit/2733d5b712860ddd975215a1f8e095c0b8ee51f3))
* add multiple middleware support ([e4497ee](https://github.com/mutoe/koam/commit/e4497ee77609d04e41a3b18ed2c9f4c81c54a099))
* add protocol to context request ([c71c673](https://github.com/mutoe/koam/commit/c71c6732001501d33aa672a20eeabec7a5c27470))
* add request body parser ([908cf57](https://github.com/mutoe/koam/commit/908cf57a10be63b4eeb7decc1d56fbe2791cc5f6))
* add response time middleware ([36a2c23](https://github.com/mutoe/koam/commit/36a2c2368923a8fe27b4234b69ca94f744abe90a))
* add toJSON method for logger or debug useful information ([54d082e](https://github.com/mutoe/koam/commit/54d082e398287cbf52d96ad692daf9b2f0b5d5a2))
* add url, querystring, host to context and request properties ([6fe92cf](https://github.com/mutoe/koam/commit/6fe92cf5451ee3fb15c93c74183627c67ff4a71c))
* application config ([c256fd8](https://github.com/mutoe/koam/commit/c256fd8d9a2af42e6aa7327d832ca8e148a83bb0))
* auto assign response content type by body setter ([833f77f](https://github.com/mutoe/koam/commit/833f77f94e2c8d43df73c824ba65a415419fd564))
* context response body getter and setter ([5291ddc](https://github.com/mutoe/koam/commit/5291ddcd9808e9bf24c12c1a34b87f724ca39e48))
* context status setter and getter ([19629d4](https://github.com/mutoe/koam/commit/19629d4ed69863a8370c4bd90867150c4326f9af))
* error handling ([d28e8f7](https://github.com/mutoe/koam/commit/d28e8f73e7a96628fa56f2f2d699ab8b374eb768))
* expose app property from context ([943ed58](https://github.com/mutoe/koam/commit/943ed5829975d32d508c648de6604a5667305cb8))
* expose context property on application class ([9523b23](https://github.com/mutoe/koam/commit/9523b230e70e85564c30faedc8237741b2925b3f))
* expose request socket ([282047f](https://github.com/mutoe/koam/commit/282047f0006172f906334e7102cd0b7488a2c385))
* expose response content type setter / getter ([58b101e](https://github.com/mutoe/koam/commit/58b101e29bc0a74b612b21122f02d462cbdd7ff7))
* expose response socket ([6f2ec22](https://github.com/mutoe/koam/commit/6f2ec226a4052cb2ff346a99eb7f93a8e01e8c99))
* expose response status message ([8643b9e](https://github.com/mutoe/koam/commit/8643b9e098f364171ef8eb341817a5db3e92cb73))
* implement context assert method ([033130e](https://github.com/mutoe/koam/commit/033130e969c6a54d1939326f80c9f78972e262f7))
* implement context throw method ([6fe30b4](https://github.com/mutoe/koam/commit/6fe30b47e38ee807c275e6bb1b8a9fa1f09cecd5))
* implement env config ([fef106e](https://github.com/mutoe/koam/commit/fef106ee25e4413bae84e2192bcde9e731ecbcb2))
* implement get request headers ([5a760eb](https://github.com/mutoe/koam/commit/5a760eb2d9e2b2d2c8081372ba48c08f59b779f3))
* implement get request headers type hint ([581b43c](https://github.com/mutoe/koam/commit/581b43c2b66d03bf90c83184f34d33f314595b52))
* implement proxy option ([4d06d95](https://github.com/mutoe/koam/commit/4d06d954cedec068860f054db128d50e0de9c2cf))
* implement query and qs setter & getter ([52bb3ea](https://github.com/mutoe/koam/commit/52bb3eabd231ea474aafeeed645c8df4a539175e))
* implement redirect method ([a7cf5f3](https://github.com/mutoe/koam/commit/a7cf5f362aa1b0704cac3dd634d8a19fbaeb9869))
* implement request charset getter ([6d60fbb](https://github.com/mutoe/koam/commit/6d60fbb4fba69c12a04ad6ddd028f0d4f00e3853))
* implement request content length getter ([7f1083a](https://github.com/mutoe/koam/commit/7f1083ab61f418c206f33a148b6e218531c8b6e3))
* implement request method setter ([f716b94](https://github.com/mutoe/koam/commit/f716b9424e19ce2aa765b54c90ff36c437e1d4c3))
* implement request path originalUrl and origin properties ([8a311b3](https://github.com/mutoe/koam/commit/8a311b3ac23db248b495dfe697f37677b2ac41aa))
* implement response header setters and getter ([544e1b6](https://github.com/mutoe/koam/commit/544e1b6c5ca2c55aeaf18cb7e7366153c2b6f806))
* implement state property ([8095a24](https://github.com/mutoe/koam/commit/8095a2445ff3672d5e8ea0053c4ed4e7fa5cc883))
* remove request `search` setter / getter (using `querystring` instead) ([6c2e6ce](https://github.com/mutoe/koam/commit/6c2e6ce7a25b8d7a4fdc1fe06ac16a5b1960be77))
* send response status message ([6c78171](https://github.com/mutoe/koam/commit/6c7817176c28754a0502d5b584cc5c8d041b2014))
* simple error handling and expose callback handler ([523eb84](https://github.com/mutoe/koam/commit/523eb842e584f82284ab50333f4a1728bb5e0755))
* support listen address and port getter ([7cd7263](https://github.com/mutoe/koam/commit/7cd7263dab89a6af79c7de3ed432f9c28b19ac4c))
* throw error when call next more than one time ([748b9db](https://github.com/mutoe/koam/commit/748b9dbaa1de1e58ed396d824ba26c0aafd27e25))
* use middleware ([9a17b8a](https://github.com/mutoe/koam/commit/9a17b8a9af31f38526c01970b6866717e3c82c41))
