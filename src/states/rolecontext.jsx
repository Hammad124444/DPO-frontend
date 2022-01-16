export const roles = {
    admin : {
        write: true
    },
    investor: {
        write: false
    }
}

export const RoleContext = React.createContext(
    roles.admin
);