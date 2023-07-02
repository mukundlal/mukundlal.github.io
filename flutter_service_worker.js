'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon-16x16.png": "b04dfb14bf9382003896c8d70fef7680",
"version.json": "cc1fa9cce5af273c0909d105387fee89",
"favicon.ico": "01c1b4f5d1db35da4505f485c012c163",
"index.html": "89d2eba26eabfc9713098177b5dc0381",
"/": "89d2eba26eabfc9713098177b5dc0381",
"android-chrome-192x192.png": "a80183aca8fdeffa5b4144aee6bd9fa7",
"apple-touch-icon.png": "4a243653a3bf7faf0cfb0d9014989ab8",
"css/bootstrap.min.css": "4eadbf7d1721bb2729e398595bc7f0bc",
"css/styles.css": "5e312d95ecd0b2f5a0a9e748e2a59c15",
"css/da-slider.css": "922c7b3818b46610646a446474d8e629",
"css/isotope.css": "ce54162e66d94b1f7adbd85fa23fdc72",
"images/xd.png": "a0899133b64247a024570b6207322413",
"images/clients/client-5.png": "81add2535a7d4925bdbecbe3365d1ff2",
"images/clients/client-4.png": "558e3090b4a023456003f15e9f67a845",
"images/clients/client-6.png": "9f7a4042177052ded8fac4e13a0b2105",
"images/clients/client-7.png": "3a3ef7153adc7936ef032b2d3217356a",
"images/clients/client-3.png": "a02190539181bdcb96d826a199004729",
"images/clients/client-2.png": "88406a651ae07c456273f2053bbed487",
"images/clients/client-1.png": "32de57ff34f24deb0cb8a7f0a57cb994",
"images/clients/client-9.png": "418692fc9acc4bc2ea2e73c3f89fcab0",
"images/clients/client-8.png": "10bc4bd43fd1342903bf49e40012cf67",
"images/flutter.png": "4277d68f1efc7343b2e46f10bc70956e",
"images/java.jpeg": "70bf64ee5dba63c6af14a38f8d41d6c4",
"images/android.jpeg": "3ef76a2109dd8076329deb8978c2eaee",
"images/arrows.png": "59b89e1bcc088a4a89009720ee752ddf",
"images/top_illustration.png": "38f91c8ed0b7ff33558ce981f68f7a9e",
"images/mukund_resume.pdf": "afa108a51132314ce2f0c41bc7046ec3",
"images/portfolio/img9.jpg": "03a282066f4318c70584e3c5707125f6",
"images/portfolio/img8.jpg": "d97bfb2cadd6396d162d4ce82f8dffe5",
"images/portfolio/img5.jpg": "21824669293977b9eaf10dbc583c17da",
"images/portfolio/img4.jpg": "eb33b3dcc288ac05433291c49c2822ce",
"images/portfolio/img6.jpg": "f4e97155c763edd11fdc4b70c98eda4c",
"images/portfolio/img7.jpg": "62f8dbb6b4cafffa144aa476442edccd",
"images/portfolio/img3.jpg": "29bdb8be80faf5e20f7a32cad35f8f80",
"images/portfolio/img2.jpg": "5acc8c27ae74cc98bf713237a65bb92b",
"images/portfolio/img1.jpg": "549ccf843a997b213ff579cfe8f8d140",
"images/photo-3.jpg": "987eae28b1fdb765f3091a45bca6ba8a",
"images/photo-2.jpg": "6e5e17312cb98a02a51006b5f28de941",
"images/banner-bg.jpg": "12c9b86a77f5883d5a85b3ea113fd339",
"images/photo-1.jpg": "03304de946f46810afc872d3da80458d",
"images/dart.png": "bee2948ed9e9c7121c900ffc340d0c21",
"images/photo-4.jpg": "2e0f0f9427ce7c13263c0e91ae28a47f",
"images/Kotlin.png": "084bdf62c29bce08fa29b7a69312a37a",
"js/jquery.cslider.js": "fe38a8a9e0b0f73a6a4cc0eccc154791",
"js/fancybox/jquery.fancybox.pack.js": "cc9e759f24ba773aeef8a131889d3728",
"js/fancybox/fancybox_sprite.png": "783d4031fe50c3d83c960911e1fbc705",
"js/fancybox/jquery.fancybox.css": "07039f62d07d989dda03c6f5958413c5",
"js/fancybox/fancybox_overlay.png": "77aeaa52715b898b73c74d68c630330e",
"js/fancybox/Descr.WD3": "217a1e8cb76faf4866e1a83e4ab6d075",
"js/fancybox/fancybox_loading_402x.gif": "f92938639fa894a0e8ded1c3368abe98",
"js/fancybox/blank.gif": "325472601571f31e1bf00674c368d335",
"js/fancybox/fancybox_loading.gif": "328cc0f6c78211485058d460e80f4fa8",
"js/fancybox/fancybox_sprite_402x.png": "ed9970ce22242421e66ff150aa97fe5f",
"js/custom.js": "1a442f56d5e2515d3a9c713cb19c2057",
"js/jquery.isotope.min.js": "5688d1082463d6c3ebe40d4c8b32f1db",
"js/bootstrap.min.js": "9e25e8e29ef0ea358e9778082ffd97d8",
"js/modernizr-latest.js": "8677fae92defaea177f5d536c421c949",
"js/jquery.nav.js": "a50c49728cb89c9d41dea80ac6a20d91",
"js/owl-carousel/AjaxLoader.gif": "5b8b06c052cac80413d62e5c45f9f37b",
"js/owl-carousel/owl.carousel.js": "a5f96c62d75be144282ef6cc429a6259",
"js/owl-carousel/owl.transitions.css": "b1bdaeac4065bf67a7d7a06213192964",
"js/owl-carousel/owl.theme.css": "f23cf727e4fcca9a5470658da5e755c9",
"js/owl-carousel/owl.carousel.min.js": "88d0fe722f04973e2888b58a63aa0570",
"js/owl-carousel/grabbing.png": "d817e1dba5bd5d891d0504bf1715807b",
"js/owl-carousel/owl.carousel.css": "0371b5a2d50e985b09b7d337edc0dc9f",
"js/jquery-1.8.2.min.js": "0b6ecf17e30037994d3ffee51b525914",
"main.dart.js": "5c95c0adb36ee97cc4f3d13b9b9ce0df",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"about.txt": "8a220daef795b8d6bc8af899423f754c",
"android-chrome-512x512.png": "51d242579c655e03cbfc07a88e464587",
"site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"manifest.json": "886c55acda2feefe41e97ed5676398c3",
"README.txt": "76e03e91404385e2670bf544370b57a0",
"updater.xml": "36e4662de1eb4b1992cef7935e3fc0e9",
"font/css/font-awesome.css": "1f9e9d1a5a1d347d945ef4b7727f2ea0",
"font/css/font-awesome.min.css": "fa6868c22ceca7f65191ec25c68a9bb5",
"font/less/list.less": "291fbd1d05eb7eba6172f738837794b6",
"font/less/stacked.less": "518e2b2d263982d2caa1e6514b4b4eac",
"font/less/core.less": "e0425dae16b4e10d439ef079bc75ea68",
"font/less/fixed-width.less": "5e07ec001f8d21bd279c12ee542813f7",
"font/less/variables.less": "82549d7e42c5d301b61c7a694d3a9dbd",
"font/less/rotated-flipped.less": "09a3b97189c3c320ac7a1649dd6bbad9",
"font/less/font-awesome.less": "4201fdd32cc7a7d2f6ed2706800faf75",
"font/less/icons.less": "cee820602539e69d61c4dd782536e1a0",
"font/less/spinning.less": "c4142d6d9e832fa1f6683f19c9799c06",
"font/less/path.less": "baaf503b6821b49336f242445bcf26ca",
"font/less/bordered-pulled.less": "5b3f3e1353ea7ab9d10fd7598fbd214b",
"font/less/larger.less": "8cb65280c0f889daf72626c21a7c8628",
"font/less/mixins.less": "0193675166be1acb0da06df07c0aa14e",
"font/scss/_stacked.scss": "5594237226aedfbca2fa1c7f4604c214",
"font/scss/_variables.scss": "9d4f23eacae6690aa140e51d42550e5b",
"font/scss/font-awesome.scss": "4201fdd32cc7a7d2f6ed2706800faf75",
"font/scss/_rotated-flipped.scss": "9d894281a3b1c265abdd5abd11f9af5d",
"font/scss/_path.scss": "ac2a848f68cffed328272615bfca2500",
"font/scss/_list.scss": "7107e80b053928271d5fcf422dc29490",
"font/scss/_larger.scss": "e95931566f6fc6ad5685c4fa9802e206",
"font/scss/_spinning.scss": "8e6c7988f40f123aedd96a668c56582a",
"font/scss/_core.scss": "460139739224bc62d9957837978c4e22",
"font/scss/_mixins.scss": "d6c8e2fb73d626a27dc0c816a584432a",
"font/scss/_icons.scss": "691e5398b8513cd310e847aae3112b27",
"font/scss/_fixed-width.scss": "9277ab6964a434d499873687b00be906",
"font/scss/_bordered-pulled.scss": "e4f85472a1f6ed0e23a473b8e00ef071",
"font/fonts/fontawesome-webfont.svg": "0a799148a50bb02c6f380eabd8d97559",
"font/fonts/FontAwesome.otf": "3f3a623e88cb5c62eaa2367195e98b67",
"font/fonts/glyphicons-halflings-regular.woff": "68ed1dac06bf0409c18ae7bc62889170",
"font/fonts/glyphicons-halflings-regular.eot": "7ad17c6085dee9a33787bac28fb23d46",
"font/fonts/glyphicons-halflings-regular.ttf": "e49d52e74b7689a0727def99da31f3eb",
"font/fonts/fontawesome-webfont.ttf": "dcb26c7239d850266941e80370e207c1",
"font/fonts/fontawesome-webfont.woff": "3293616ec0c605c7c2db25829a0a509e",
"font/fonts/glyphicons-halflings-regular.svg": "32941d6330044744c02493835b799e90",
"font/fonts/fontawesome-webfont.eot": "8b27bc96115c2d24350f0d09e6a9433f",
".git/ORIG_HEAD": "00f620320a36c87c44d3d5238a4dbbfe",
".git/config": "ca63a7ed6ba66e7f68602de268acf6b4",
".git/objects/50/f9571314e0b78549f29ad2c2d15df2c3936b1f": "54e6df359e9e7212f811544f7b4e7e88",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/32/d1dcfe51f75ce94fcbd2a0cc12c0947236a511": "526d993f04633c1255410e076f3d5ede",
".git/objects/69/71b7d315ada7756ad351c2d2c0fc4136e0f3a6": "789728d9f88a4ce6cf5cbce85093b025",
".git/objects/56/a1aa9f2dd49d171ab57d84aeaf60c00526b220": "44df388edc57875fe239da5111af15e3",
".git/objects/51/63857abaee5ba257e0f173fedd863331bbbd41": "47209b842a569c310bce026e065c3fef",
".git/objects/51/44d2ace8bd7667e6a1d4dfc6499e50fb3226ad": "1172561b8a60ed34f7ca31915a6a400d",
".git/objects/0b/22c05e8a8f4f9b9cc516b0b79718c480fd28b3": "e6ff3e226bfaeb75ed5183794844b3ff",
".git/objects/94/7ff9e352b752058cf90175bf6b1cfaba168b97": "ebce6350b37443587936cc28a65bf199",
".git/objects/0e/c1cc34b4015a1d88d8e1ddd5549971b44cf3d1": "fa0358733e4cf58258942be9d82823ab",
".git/objects/b2/bcce703514f199d06d00ff4a925e733c6bf4d9": "661f93d6d382005811a6055d315395d4",
".git/objects/d9/f6f56aa3805664bbeba699af8a7a311d6f9263": "f08feb7c77bcd5be7d3c24272514bd90",
".git/objects/be/c40a448d09392ad60963c0528da87e272f9245": "b20944d9da57576028abd2fecbcc12b4",
".git/objects/b4/5420781a64dff9e201597495bbfe4401252c11": "e56ddd510a1da5b34c768827854137a0",
".git/objects/a5/c2387d2a6b6be04bd3ea237b7dfef06e74a014": "6cc44ba9dcb08f2ed8a3e16e45dcb90f",
".git/objects/bd/50989682f38c199f6478876e357c81aeed5685": "accb7f5c3844e712c57657af3ba31ef9",
".git/objects/d6/0a2fb9e9f8cb560c64c0e61b3d555a2d87fa82": "566cf62c3025672610b0b7b09e6f2605",
".git/objects/bc/088f5f2e1b4a3743fdffdd72c0f558e861c086": "ed777c26d66e4ba060796099f19ab67e",
".git/objects/ae/217f5f0493c78fc2289567eaa6f30c83b73945": "2db3791951559d66be9427c37a9f3185",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/fd/c86ecbc250c6060425674a1bc6403a00c81ee2": "8c2af37c18e809729799b12c9ad4ab63",
".git/objects/4b/6211f945186722f278512388806ab0036e5e59": "1b8484ebd7681251086a4c07e8265739",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/pack/pack-e2b440b5767ec53443213651f7be1a13d687f32b.pack": "9d81e598d3e563c6ac2d80ec00ed0de9",
".git/objects/pack/pack-e2b440b5767ec53443213651f7be1a13d687f32b.idx": "5e72c14d39b5683d0b608a7cbeffe3f5",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/1f/e9a8a73eef3ed6de094a3504cc2355f4d30b3d": "8501d9acdc3df2e711bfa794287d2bb9",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/80/1a091e3857da855beb9775aea3af1130684f2b": "3186125bfbea18404e62021873024959",
".git/objects/7b/d6a0b1f02b203aa7d408ff4b828f4ae3de7c22": "68c917348ef980bab26d5d7aca7f022c",
".git/objects/19/2a7fdd5133a256d35464018ee8ed8c584ead3c": "866fa647181e8a282918d09bf1845c60",
".git/objects/19/4daf41c4d208ac6bd05a4f9270f8ae781f3788": "cf297ae1887e9b15b79d1c2fbf66e380",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/72/d70768fa67ed0c06e753d4eef26e0ccae5f729": "c78b6624cdd98090a9468a6477b26346",
".git/objects/88/dc8c6a8b4f0acc4bb46d37d23d3c2a230fd5bb": "7caabeb080019d0ab31fe799dfb0b148",
".git/objects/6b/141da34a59bc30d6b667daafe4a815e959dda2": "16da13379c7c847a77f7e601b1b5ef49",
".git/objects/36/029443d36ec2963a93bfe91d4b4d5df6492538": "219e74b167d304bf18f4fb86389d2c8e",
".git/objects/5d/3b3cd85648be436cbf3530a7e0b190b1fbc835": "9d300ca5d2ac3c18a9e0d781dfab35f7",
".git/objects/5d/8295a1fe2c73d98a72fcf800168e79a5e0b2ec": "488e2497a40433a9f34ac23bf348f4b8",
".git/objects/62/b16ee7458d0ae3b567c781c6a9be5dbff66cb1": "1c3955eb320c0b6259befe39769404f7",
".git/objects/96/7ab1f77d8c84afc60b7b4621a7f2207d86eeba": "90fb02a547843950e7fe48cfb00f5453",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/06/4df08692d69eaf3a99ec72ef3e33d2cc972776": "3fc08f4f0fb4fa61bf0cf65952b6f3e6",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/90/df9329b166cad6a08dcbfa89e70806e37d18a4": "4fecbf519eccae60fd350ea18030ce66",
".git/objects/90/085488f8b0014f89433a1636459b087f0a4942": "7d2c7d4e985bfa844a9a1ed12ceb0bfc",
".git/objects/90/586579b5ff65b19db72b23b6545dc340a45ee5": "2744499ef98d6e5f6a0c0d72a9f65ee7",
".git/objects/dd/b22597cbe4e47163fff58d95c612996356a641": "2f64bf9ce4d71095d7eb8e9bd932ec98",
".git/objects/a9/3ad1ba7b846c30dc4aa71eb55b835ca1e32587": "890bb9076411290ac5cf2e2718bede5d",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b0/249af6c1aba80984722f741eef8223050c9717": "68a36084a6e160502bf3a5d468043359",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/fcd51002f5fdd40c2a2bd3601604a24148b87d": "d01d3836cfbf01226ea85b7adb5d53ed",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/cd/b8ecf85cf3eba1bd01acb53b77422ddd37ab2f": "6103bae91d0f8b5d676dac892f41de57",
".git/objects/f9/2eecbb9c178a0fd90d299342b19a0f8f264d44": "69fd479e649b431ffdcc0e53f5b87220",
".git/objects/f7/29b95bc41023aadb95ae810bcaaa1fe7433916": "45208899bb7420548c24e880a567055c",
".git/objects/e9/d12797f5326b876b8877fb971170d42f89f8e9": "82fd741c8501d2fd98734b13d111205b",
".git/objects/f8/7ac42546555a6da8e12da1264e983c169ec513": "02a7031bd73630219e9b0e1cb93cba9f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/f93c75fc7170aee17481b5c33f2b3fb69a7019": "a627769cd17fc795a15bc090941a8b66",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/4a/e6bf1608f2317a117344764aedd86d40c73db8": "715cc286f34020500431784f22894a17",
".git/objects/4a/2c0a9249e8a3e3703bf2650aa01f2616599af9": "41cd104db3ed01c380fa1d503be7720f",
".git/objects/4f/8f9e80be6ac75695ab84d54e7fccb749f09611": "db66382d0f843be322a640b018b73e73",
".git/objects/15/7177ce94551f6e7becbb06004a58a0725fe3f7": "21b6d8753d05b73ef6a154a5adb233da",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/c49b40ba0a40140d637094e613330509c9280c": "aa20180e369035cbb909c65aeea906bc",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/1d/e89229b7e89f8a9e394e29784ae316a69b1b90": "8f21a653c7e31fd90b45e4b0c3d91332",
".git/objects/40/7a6f9ce68b5672a95bc328c8345236edfe9fd8": "8b2ec0445efe210292b5651c85c7d37f",
".git/objects/2e/c3d1a69e5b439ca1bb25f4edc50cd2b5065769": "e029c9df9fa312161cad0109b953a317",
".git/objects/2b/7a05a01e4c7c675d16eadf35f9937ec165de94": "111b94ff038ee08aee048dae417da6c0",
".git/objects/13/8282ba4f9605bb8e36df8f7602fa2709e3d3d1": "ad12c9be247e3a9865f1822ca876a685",
".git/objects/7f/83b08b2d6c60fa15e6ebbe5b86830284e59bd2": "d4887f22065ff15e4078cdbf1ddf8b26",
".git/objects/7a/c3c27414784b2d9f9e5b1fd70137415b5113e3": "f8a7c290cf923446b5fd92a8d3efbb9f",
".git/objects/22/ac92827611ad0e9333474344a9954d227b2a82": "34bc0490ee6c06b20140ffba7820b372",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ba99e7f588c146cd0d1226556ef89db8",
".git/logs/refs/heads/master": "6fd5d487e31ad9076b60ea5c1b09de7e",
".git/logs/refs/heads/main": "f9284f0400807f9eb28429189fed43cf",
".git/logs/refs/remotes/origin/master": "00fe6654c27f9f64cc8dba8c04490686",
".git/logs/refs/remotes/origin/main": "b4c427514c84e165ae5044b7c3bf0b1d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "f1eb49e272123d0c89eef84f7045b4d9",
".git/refs/heads/main": "d5bf24a2517ae536dfe2ea5fd496cf37",
".git/refs/remotes/origin/master": "f1eb49e272123d0c89eef84f7045b4d9",
".git/refs/remotes/origin/main": "444207ca7fe550e1d41fb1dc8d29b308",
".git/index": "b5a960c472a303ec23fe6b9132887edc",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "1293f1032f4bdb8f87c1fb9715329ad4",
".git/FETCH_HEAD": "cb9f709b3575ebe7a407a5c8efb16627",
"fonts/fontawesome-webfont.svg": "0a799148a50bb02c6f380eabd8d97559",
"fonts/FontAwesome.otf": "3f3a623e88cb5c62eaa2367195e98b67",
"fonts/glyphicons-halflings-regular.woff": "68ed1dac06bf0409c18ae7bc62889170",
"fonts/glyphicons-halflings-regular.eot": "7ad17c6085dee9a33787bac28fb23d46",
"fonts/glyphicons-halflings-regular.ttf": "e49d52e74b7689a0727def99da31f3eb",
"fonts/fontawesome-webfont.ttf": "dcb26c7239d850266941e80370e207c1",
"fonts/fontawesome-webfont.woff": "3293616ec0c605c7c2db25829a0a509e",
"fonts/glyphicons-halflings-regular.svg": "32941d6330044744c02493835b799e90",
"fonts/fontawesome-webfont.eot": "8b27bc96115c2d24350f0d09e6a9433f",
"assets/AssetManifest.json": "9346c47eb0450f9246a582fe791bf5df",
"assets/NOTICES": "c12981973f11ba69ce900e5e26cee0b4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "5d569e2950a184b9973cd636df1b987f",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/tech_icons/xcode.png": "f51909f074c08ed974bb78ee97438141",
"assets/assets/tech_icons/adobexd.png": "2d459cdafcc0c7023f2f3dcb9fcad6dc",
"assets/assets/tech_icons/firebase.png": "abbfdbad71c96a1b26328750e705ea19",
"assets/assets/tech_icons/figma.png": "7d9e8c039b3674fa71506f7473d7fd10",
"assets/assets/tech_icons/swift.png": "58b44d50a566e910f289f2fc6dde20fe",
"assets/assets/tech_icons/dart.png": "36b87776774fe4e5eca2159c78480ff6",
"assets/assets/tech_icons/kotlin.png": "e80c6da52a0ee7c7f48771a46c6b85af",
"assets/assets/animations/under_construction.json": "2a4f061237bf9efcbf3cd8c694994e7a",
"favicon-32x32.png": "09f33e9315e7100089a0cc1845b3764a",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "9636888f1b4c9fec7ebb74d7e60d69de",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D2/shelved.patch": "89c23f6e6736d678b6a75c0b9bd07e9c",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_.xml": "cf2b9bb2d7b7315d53986dc019bb69f8",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D3/shelved.patch": "b729ae89e39e70efbb8d4f6f1b5a14e4",
".idea/shelf/Uncommitted_changes_before_Update_at_18_06_23__3_02_pm__Changes_.xml": "17e8704148dd37d0df168a57dedf4beb",
".idea/shelf/Uncommitted_changes_before_Update_at_18_06_23,_3_01_pm_%5BChanges%5D/shelved.patch": "f572931fa645a3bb0071dfd3308baa5f",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D1/shelved.patch": "17df5466670e7571a9949039e614a47f",
".idea/shelf/Uncommitted_changes_before_Update_at_18_06_23,_3_02_pm_%5BChanges%5D/shelved.patch": "8115835e1b7cb6b62f835ef8e1625926",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_1.xml": "f4e3a51e6af8e358cd4500306919b353",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_3.xml": "4f6b9059118064b32d0fbba093d46fab",
".idea/shelf/Uncommitted_changes_before_Update_at_18_06_23__3_01_pm__Changes_.xml": "6db97645100911c4bd106c6667c0d8ad",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_2.xml": "66305bed84810a23014a14836190b458",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D/shelved.patch": "1e10521635473e78a188aa5b895cb85d",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "7ffe1d213cb7f189bb46f7c81ed224eb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
