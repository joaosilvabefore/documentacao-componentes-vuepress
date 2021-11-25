import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-1020f180","/components/","Components",["/components/index.html","/components/README.md"]],
  ["v-0183d296","/components/Avatar/","",["/components/Avatar/index.html","/components/Avatar/README.md"]],
  ["v-214dc736","/components/BaseInput/","Base Input",["/components/BaseInput/index.html","/components/BaseInput/README.md"]],
  ["v-335563b2","/components/BaseTable/","",["/components/BaseTable/index.html","/components/BaseTable/README.md"]],
  ["v-35c127dd","/components/Button/","",["/components/Button/index.html","/components/Button/README.md"]],
  ["v-74f19c8b","/components/Form/","",["/components/Form/index.html","/components/Form/README.md"]],
  ["v-352d5e82","/components/Modal/","",["/components/Modal/index.html","/components/Modal/README.md"]],
  ["v-4afce2cc","/components/Tab/","",["/components/Tab/index.html","/components/Tab/README.md"]],
  ["v-411e3248","/components/Toast/","",["/components/Toast/index.html","/components/Toast/README.md"]],
  ["v-c4728cda","/components/Chart/BarChart/","",["/components/Chart/BarChart/index.html","/components/Chart/BarChart/README.md"]],
  ["v-5adbb257","/components/Form/BaseDatepicker/","",["/components/Form/BaseDatepicker/index.html","/components/Form/BaseDatepicker/README.md"]],
  ["v-ef5bddbc","/components/Form/BaseDateRangerPicker/","",["/components/Form/BaseDateRangerPicker/index.html","/components/Form/BaseDateRangerPicker/README.md"]],
  ["v-259f9a90","/components/Form/BaseFormGroup/","",["/components/Form/BaseFormGroup/index.html","/components/Form/BaseFormGroup/README.md"]],
  ["v-2579fac1","/components/Form/BaseInput/","BaseInput",["/components/Form/BaseInput/index.html","/components/Form/BaseInput/README.md"]],
  ["v-e9af95d2","/components/Form/BaseSelect/","",["/components/Form/BaseSelect/index.html","/components/Form/BaseSelect/README.md"]],
  ["v-1a707535","/components/Form/CopyField/","",["/components/Form/CopyField/index.html","/components/Form/CopyField/README.md"]],
  ["v-32992b30","/components/Form/SearchField/","",["/components/Form/SearchField/index.html","/components/Form/SearchField/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
