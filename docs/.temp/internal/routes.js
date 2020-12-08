/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "/home/suh/Documents/Github/qdmblog/layouts/GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-e4ff71d2",
    path: "/2020/10/20/crossbow-bloodnight-review/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Post", "v-e4ff71d2").then(next)
    },
  },
  {
    path: "/2020/10/20/crossbow-bloodnight-review/index.html",
    redirect: "/2020/10/20/crossbow-bloodnight-review/"
  },
  {
    path: "/_posts/crossbow-bloodnight-review.html",
    redirect: "/2020/10/20/crossbow-bloodnight-review/"
  },
  {
    name: "v-0aab0553",
    path: "/2020/10/28/cyberpunk-2077-adiado/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Post", "v-0aab0553").then(next)
    },
  },
  {
    path: "/2020/10/28/cyberpunk-2077-adiado/index.html",
    redirect: "/2020/10/28/cyberpunk-2077-adiado/"
  },
  {
    path: "/_posts/cyberpunk-2077-adiado.html",
    redirect: "/2020/10/28/cyberpunk-2077-adiado/"
  },
  {
    name: "v-607c7c17",
    path: "/2020/10/01/hashiriya-drifter-review/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Post", "v-607c7c17").then(next)
    },
  },
  {
    path: "/2020/10/01/hashiriya-drifter-review/index.html",
    redirect: "/2020/10/01/hashiriya-drifter-review/"
  },
  {
    path: "/_posts/hashiriya-drifter-review.html",
    redirect: "/2020/10/01/hashiriya-drifter-review/"
  },
  {
    name: "v-416b0712",
    path: "/2020/10/22/microsoft-bethesda-e-novidades/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Post", "v-416b0712").then(next)
    },
  },
  {
    path: "/2020/10/22/microsoft-bethesda-e-novidades/index.html",
    redirect: "/2020/10/22/microsoft-bethesda-e-novidades/"
  },
  {
    path: "/_posts/microsoft-bethesda-e-novidades.html",
    redirect: "/2020/10/22/microsoft-bethesda-e-novidades/"
  },
  {
    name: "v-2f85d017",
    path: "/2020/12/08/not-for-broadcast-review/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Post", "v-2f85d017").then(next)
    },
  },
  {
    path: "/2020/12/08/not-for-broadcast-review/index.html",
    redirect: "/2020/12/08/not-for-broadcast-review/"
  },
  {
    path: "/_posts/not-for-broadcast-review.html",
    redirect: "/2020/12/08/not-for-broadcast-review/"
  },
  {
    name: "v-819084e6",
    path: "/2020/09/30/primeiro-post/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Post", "v-819084e6").then(next)
    },
  },
  {
    path: "/2020/09/30/primeiro-post/index.html",
    redirect: "/2020/09/30/primeiro-post/"
  },
  {
    path: "/_posts/primeiro-post.html",
    redirect: "/2020/09/30/primeiro-post/"
  },
  {
    name: "v-0c2b5b21",
    path: "/2020/10/08/sonic-forces-review/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Post", "v-0c2b5b21").then(next)
    },
  },
  {
    path: "/2020/10/08/sonic-forces-review/index.html",
    redirect: "/2020/10/08/sonic-forces-review/"
  },
  {
    path: "/_posts/sonic-forces-review.html",
    redirect: "/2020/10/08/sonic-forces-review/"
  },
  {
    name: "v-3d1a8dd1",
    path: "/2020/10/30/syntherapy-review/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Post", "v-3d1a8dd1").then(next)
    },
  },
  {
    path: "/2020/10/30/syntherapy-review/index.html",
    redirect: "/2020/10/30/syntherapy-review/"
  },
  {
    path: "/_posts/syntherapy-review.html",
    redirect: "/2020/10/30/syntherapy-review/"
  },
  {
    name: "v-2a1d0ad7",
    path: "/about.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2a1d0ad7").then(next)
    },
  },
  {
    name: "v-b2754d56",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-b2754d56").then(next)
    },
    meta: {"pid":"blog","id":"blog"}
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-b1564aac",
    path: "/tag/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterKey", "v-b1564aac").then(next)
    },
    meta: {"pid":"tag","id":"tag"}
  },
  {
    path: "/tag/index.html",
    redirect: "/tag/"
  },
  {
    name: "v-14d71bda",
    path: "/tag/game/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-14d71bda").then(next)
    },
    meta: {"pid":"tag","id":"game"}
  },
  {
    path: "/tag/game/index.html",
    redirect: "/tag/game/"
  },
  {
    name: "v-2f79a5ed",
    path: "/tag/review/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-2f79a5ed").then(next)
    },
    meta: {"pid":"tag","id":"review"}
  },
  {
    path: "/tag/review/index.html",
    redirect: "/tag/review/"
  },
  {
    name: "v-6d69b8a7",
    path: "/tag/bloodnight/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-6d69b8a7").then(next)
    },
    meta: {"pid":"tag","id":"bloodnight"}
  },
  {
    path: "/tag/bloodnight/index.html",
    redirect: "/tag/bloodnight/"
  },
  {
    name: "v-0a46594b",
    path: "/tag/crossbow:bloodnight/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-0a46594b").then(next)
    },
    meta: {"pid":"tag","id":"crossbow:bloodnight"}
  },
  {
    path: "/tag/crossbow:bloodnight/index.html",
    redirect: "/tag/crossbow:bloodnight/"
  },
  {
    name: "v-322f4f42",
    path: "/tag/qdm/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-322f4f42").then(next)
    },
    meta: {"pid":"tag","id":"qdm"}
  },
  {
    path: "/tag/qdm/index.html",
    redirect: "/tag/qdm/"
  },
  {
    name: "v-2dc9ec74",
    path: "/tag/noticia/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-2dc9ec74").then(next)
    },
    meta: {"pid":"tag","id":"noticia"}
  },
  {
    path: "/tag/noticia/index.html",
    redirect: "/tag/noticia/"
  },
  {
    name: "v-32b973c0",
    path: "/tag/Cyberpunk2077/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-32b973c0").then(next)
    },
    meta: {"pid":"tag","id":"Cyberpunk2077"}
  },
  {
    path: "/tag/Cyberpunk2077/index.html",
    redirect: "/tag/Cyberpunk2077/"
  },
  {
    name: "v-6036c838",
    path: "/tag/cdprojektred/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-6036c838").then(next)
    },
    meta: {"pid":"tag","id":"cdprojektred"}
  },
  {
    path: "/tag/cdprojektred/index.html",
    redirect: "/tag/cdprojektred/"
  },
  {
    name: "v-5e540089",
    path: "/tag/hashiriyadrifter/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-5e540089").then(next)
    },
    meta: {"pid":"tag","id":"hashiriyadrifter"}
  },
  {
    path: "/tag/hashiriyadrifter/index.html",
    redirect: "/tag/hashiriyadrifter/"
  },
  {
    name: "v-11be516a",
    path: "/tag/Microsoft/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-11be516a").then(next)
    },
    meta: {"pid":"tag","id":"Microsoft"}
  },
  {
    path: "/tag/Microsoft/index.html",
    redirect: "/tag/Microsoft/"
  },
  {
    name: "v-015e7e7a",
    path: "/tag/Bethesda/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-015e7e7a").then(next)
    },
    meta: {"pid":"tag","id":"Bethesda"}
  },
  {
    path: "/tag/Bethesda/index.html",
    redirect: "/tag/Bethesda/"
  },
  {
    name: "v-b307e5c4",
    path: "/tag/Zeni Max/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-b307e5c4").then(next)
    },
    meta: {"pid":"tag","id":"Zeni Max"}
  },
  {
    path: "/tag/Zeni Max/index.html",
    redirect: "/tag/Zeni Max/"
  },
  {
    name: "v-26caf4a0",
    path: "/tag/notícia/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-26caf4a0").then(next)
    },
    meta: {"pid":"tag","id":"notícia"}
  },
  {
    path: "/tag/notícia/index.html",
    redirect: "/tag/notícia/"
  },
  {
    name: "v-33c9bd29",
    path: "/tag/análise/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-33c9bd29").then(next)
    },
    meta: {"pid":"tag","id":"análise"}
  },
  {
    path: "/tag/análise/index.html",
    redirect: "/tag/análise/"
  },
  {
    name: "v-491f0362",
    path: "/tag/not for broadcast/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-491f0362").then(next)
    },
    meta: {"pid":"tag","id":"not for broadcast"}
  },
  {
    path: "/tag/not for broadcast/index.html",
    redirect: "/tag/not for broadcast/"
  },
  {
    name: "v-3231fd22",
    path: "/tag/nfb/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-3231fd22").then(next)
    },
    meta: {"pid":"tag","id":"nfb"}
  },
  {
    path: "/tag/nfb/index.html",
    redirect: "/tag/nfb/"
  },
  {
    name: "v-7dbe52c5",
    path: "/tag/stream/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-7dbe52c5").then(next)
    },
    meta: {"pid":"tag","id":"stream"}
  },
  {
    path: "/tag/stream/index.html",
    redirect: "/tag/stream/"
  },
  {
    name: "v-0f25fe45",
    path: "/tag/sonicforces/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-0f25fe45").then(next)
    },
    meta: {"pid":"tag","id":"sonicforces"}
  },
  {
    path: "/tag/sonicforces/index.html",
    redirect: "/tag/sonicforces/"
  },
  {
    name: "v-1fa16278",
    path: "/tag/syntherapy/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-1fa16278").then(next)
    },
    meta: {"pid":"tag","id":"syntherapy"}
  },
  {
    path: "/tag/syntherapy/index.html",
    redirect: "/tag/syntherapy/"
  },
  {
    name: "v-0e88a44c",
    path: "/tag/indiegame/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterPagination", "v-0e88a44c").then(next)
    },
    meta: {"pid":"tag","id":"indiegame"}
  },
  {
    path: "/tag/indiegame/index.html",
    redirect: "/tag/indiegame/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]