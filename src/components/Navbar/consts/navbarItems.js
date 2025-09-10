import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage';
import MemoryIcon from '@mui/icons-material/Memory';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <PeopleIcon/>,
        label: 'Authentication',
        route: 'authentication',
    },
    {
        id: 1,
        icon: <StorageIcon/>,
        label: 'Database',
        route: 'database',
    },
    {
        id: 2,
        icon: <MemoryIcon/>,
        label: 'Storage',
        route: 'storage',
    },
    {
        id: 3,
        icon: <PublicIcon/>,
        label: 'Hosting',
        route: 'hosting',
    },
    {
        id: 4,
        icon: <SettingsEthernetIcon/>,
        label: 'Hosting',
        route: 'hosting',
    },
    {
        id: 5,
        icon: <SettingsInputComponentIcon/>,
        label: 'Machine Learning',
        route: 'machine-learning',
    }
]