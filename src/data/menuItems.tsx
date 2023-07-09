import { FlatListItemInterface } from "../interfaces/appInterfaces";

export const menuItems: FlatListItemInterface[] = [
    {
        name: 'Fade Animation',
        icon: 'albums-outline',
        component: 'FadeAnimation'
    },
    {
        name: 'Bounce Animation',
        icon: 'contract-outline',
        component: 'BounceAnimation'
    },
    {
        name: 'Switch',
        icon: 'toggle-outline',
        component: 'Switch'
    },
    {
        name: 'Alert',
        icon: 'alert-circle-outline',
        component: 'Alert'
    },
    {
        name: 'Text Input',
        icon: 'pencil-outline',
        component: 'TextInputScreen'
    },
    {
        name: 'Pull To Refresh',
        icon: 'refresh-outline',
        component: 'PullToRefresh'
    },
    {
        name: 'Section List',
        icon: 'list-outline',
        component: 'SectionList'
    },

    {
        name: 'Modal',
        icon: 'tablet-landscape-outline',
        component: 'ModalScreen'
    },
];