import {
    ArrowRightStartOnRectangleIcon,
    BellAlertIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    Cog8ToothIcon,
    LightBulbIcon,
    PlusIcon,
    ShieldCheckIcon,
    UserIcon,
} from '@heroicons/react/16/solid'
import { HomeIcon, PaintBrushIcon } from '@heroicons/react/20/solid'
import { signOut } from 'auth'
import { Avatar } from 'components/avatar'
import {
    Dropdown,
    DropdownButton,
    DropdownDivider,
    DropdownItem,
    DropdownLabel,
    DropdownMenu,
} from 'components/dropdown'
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from 'components/navbar'
import { ProtectedRoute } from 'components/protected-route'
import {
    Sidebar,
    SidebarBody,
    SidebarFooter,
    SidebarHeader,
    SidebarHeading,
    SidebarItem,
    SidebarLabel,
    SidebarSection,
} from 'components/sidebar'
import { SidebarLayout } from 'components/sidebar-layout'
import { routes } from 'routes'

const sidebarMainMenu = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        href: routes.store.dashboard(),
        icon: HomeIcon,
    },
]

const appsMenuList = [
    {
        id: 'themes',
        label: 'Themes',
        href: '#',
        icon: PaintBrushIcon,
    },
    {
        id: 'inventory-alerts',
        label: 'Inventory Alerts',
        href: '#',
        icon: BellAlertIcon,
    },
]

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ProtectedRoute>
            <SidebarLayout
                navbar={
                    <Navbar>
                        <NavbarSpacer />
                        <NavbarSection>
                            <Dropdown>
                                <DropdownButton as={NavbarItem}>
                                    <Avatar src="/profile-photo.jpg" square />
                                </DropdownButton>
                                <DropdownMenu className="min-w-64" anchor="bottom end">
                                    <DropdownItem href="/my-profile">
                                        <UserIcon />
                                        <DropdownLabel>My profile</DropdownLabel>
                                    </DropdownItem>
                                    <DropdownItem href="/settings">
                                        <Cog8ToothIcon />
                                        <DropdownLabel>Settings</DropdownLabel>
                                    </DropdownItem>
                                    <DropdownDivider />
                                    <DropdownItem href="/privacy-policy">
                                        <ShieldCheckIcon />
                                        <DropdownLabel>Privacy policy</DropdownLabel>
                                    </DropdownItem>
                                    <DropdownItem href="/share-feedback">
                                        <LightBulbIcon />
                                        <DropdownLabel>Share feedback</DropdownLabel>
                                    </DropdownItem>
                                    <DropdownDivider />
                                    <DropdownItem href="/logout">
                                        <ArrowRightStartOnRectangleIcon />
                                        <DropdownLabel>Sign out</DropdownLabel>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavbarSection>
                    </Navbar>
                }
                sidebar={
                    <Sidebar>
                        <SidebarHeader>
                            <Dropdown>
                                <DropdownButton as={SidebarItem} className="lg:mb-2.5">
                                    <Avatar src="/tailwind-logo.svg" />
                                    {/* vendor name */}
                                    <SidebarLabel>Tailwind Labs</SidebarLabel>
                                    <ChevronDownIcon />
                                </DropdownButton>
                                <DropdownMenu
                                    className="min-w-80 lg:min-w-64"
                                    anchor="bottom start"
                                >
                                    <DropdownItem href="/teams/1/settings">
                                        <Cog8ToothIcon />
                                        <DropdownLabel>Settings</DropdownLabel>
                                    </DropdownItem>
                                    <DropdownDivider />
                                    <DropdownItem href="/teams/1">
                                        <Avatar slot="icon" src="/tailwind-logo.svg" />
                                        <DropdownLabel>Tailwind Labs</DropdownLabel>
                                    </DropdownItem>
                                    <DropdownDivider />
                                    <DropdownItem href="/teams/create">
                                        <PlusIcon />
                                        <DropdownLabel>New store&hellip;</DropdownLabel>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </SidebarHeader>
                        <SidebarBody>
                            <SidebarSection>
                                {sidebarMainMenu.map(item => (
                                    <SidebarItem key={item.id} href={item.href}>
                                        <item.icon />
                                        <SidebarLabel>{item.label}</SidebarLabel>
                                    </SidebarItem>
                                ))}
                            </SidebarSection>
                            <SidebarSection className="max-lg:hidden">
                                <SidebarHeading>Apps</SidebarHeading>

                                {appsMenuList.map(item => (
                                    <SidebarItem key={item.id} href={item.href}>
                                        <item.icon />
                                        <SidebarLabel>{item.label}</SidebarLabel>
                                    </SidebarItem>
                                ))}
                            </SidebarSection>
                        </SidebarBody>
                        <SidebarFooter className="max-lg:hidden">
                            <Dropdown>
                                <DropdownButton as={SidebarItem}>
                                    <span className="flex min-w-0 items-center gap-3">
                                        <Avatar
                                            src="/profile-photo.jpg"
                                            className="size-10"
                                            square
                                            alt=""
                                        />
                                        <span className="min-w-0">
                                            <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                                                Erica
                                            </span>
                                            <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                                                erica@example.com
                                            </span>
                                        </span>
                                    </span>
                                    <ChevronUpIcon />
                                </DropdownButton>
                                <DropdownMenu className="min-w-64" anchor="top start">
                                    <DropdownItem href="/my-profile">
                                        <UserIcon />
                                        <DropdownLabel>My profile</DropdownLabel>
                                    </DropdownItem>
                                    <DropdownItem href="/settings">
                                        <Cog8ToothIcon />
                                        <DropdownLabel>Settings</DropdownLabel>
                                    </DropdownItem>
                                    <DropdownDivider />
                                    <DropdownItem href="/privacy-policy">
                                        <ShieldCheckIcon />
                                        <DropdownLabel>Privacy policy</DropdownLabel>
                                    </DropdownItem>
                                    <DropdownItem href="/share-feedback">
                                        <LightBulbIcon />
                                        <DropdownLabel>Share feedback</DropdownLabel>
                                    </DropdownItem>
                                    <DropdownDivider />

                                    <form
                                        action={async () => {
                                            'use server'
                                            await signOut()
                                        }}
                                        className="col-span-full grid grid-cols-[auto_1fr_1.5rem_.5rem_auto]"
                                    >
                                        <DropdownItem>
                                            <ArrowRightStartOnRectangleIcon />
                                            <DropdownLabel>Sign out</DropdownLabel>
                                        </DropdownItem>
                                    </form>
                                </DropdownMenu>
                            </Dropdown>
                        </SidebarFooter>
                    </Sidebar>
                }
            >
                <main className="flex h-full w-full flex-col">{children}</main>
            </SidebarLayout>
        </ProtectedRoute>
    )
}
