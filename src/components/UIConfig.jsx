const dashboardHeaderPadding = "pt-10 px-8"

function fieldMap({ user }) {
    return [
        {
            type: "text",
            name: "status",
            label: "Status",
            placeholder: null,
            addClass: "bg-gray-200/50",
            defaultValue: user.status,
            disabled: true,
        },
        {
            type: "email",
            name: "email",
            label: "Email*",
            placeholder: "Change email here...",
            addClass: null,
            defaultValue: user.email,
            disabled: false,
        },
        {
            type: "text",
            name: "name",
            label: "Nama Lengkap*",
            placeholder: "Change name here...",
            addClass: null,
            defaultValue: user.name,
            disabled: false,
        },
        {
            type: "password",
            name: "password",
            label: "Password*",
            placeholder: "Masukkan Password",
            addClass: null,
            defaultValue: null,
            disabled: false,
        },
        {
            type: "password",
            name: "passwordConfirm",
            label: "Konfirmasi Password",
            placeholder: "Masukkan Password",
            addClass: null,
            defaultValue: null,
            disabled: false,
        },
    ]
}

export default dashboardHeaderPadding
export { 
    dashboardHeaderPadding,
    fieldMap as profileFieldMap,
}