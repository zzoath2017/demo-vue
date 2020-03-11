import Layout from "@/components/Layout";
export default [
    {
        path: '/demo',
        component: Layout,
        children: [
            {
                path: 'dragSort',
                name: "拖拽排序",
                component: () => import(/* webpackChunkName: "dragSort" */ '@/components/DragSort')
            },
            {
                path: 'dragSortMultiSelect',
                name: "拖拽排序多选",
                component: () => import(/* webpackChunkName: "DragSortMultiSelect" */ '@/components/DragSortMultiSelect')
            },
            {
                path: 'html2canvas',
                name: "下载",
                component: () => import(/* webpackChunkName: "html2canvas" */ '@/components/html2canvas')
            },
            {
                path: 'multiSelect',
                name: "多选",
                component: () => import(/* webpackChunkName: "multiSelect" */ '@/components/MultiSelect')
            },
            {
                path: 'spreadjs',
                name: "spreadjs",
                component: () => import(/* webpackChunkName: "spreadjs" */ '@/components/spreadjs')
            },
            {
                path: 'TableShiftSelect',
                name: "TableShiftSelect",
                component: () => import(/* webpackChunkName: "TableShiftSelect" */ '@/components/TableShiftSelect')
            }
        ]
    },
]