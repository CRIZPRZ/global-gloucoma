import { Inertia } from '@inertiajs/inertia'


export function can(permission){
    return Inertia.page.props.user.permissions.includes(permission)
}

export function role(role){
    return Inertia.page.props.user.roles.includes(role)
}




