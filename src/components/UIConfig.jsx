import { ADMIN_MODE } from "./barrel_module/Barrel";

const dashboardHeaderPadding = "pt-10 px-8"

const loginFieldMap = [
    {
        type: "text",
        name: "email",
        label: "Alamat Email",
        placeholder: "Masukkan Email",
        addClass: null,
        defaultValue: null,
        disabled: false,
        isDropdown: false,
        isPassword: false,
    },
    {
        type: "password",
        name: "password",
        label: "Password",
        placeholder: "Masukkan Password",
        addClass: null,
        defaultValue: null,
        disabled: false,
        isDropdown: false,
        isPassword: true,
    },
];

const adminDashboardFieldMap = [
    {
        type: "text",
        name: "status",
        label: "Status",
        placeholder: null,
        addClass: null,
        defaultValue: "Non-Admin",
        disabled: false,
        isDropdown: true,
        isPassword: false,
        dropdownOptions: [
            { label: "Admin", value: "Admin" },
            { label: "Non-Admin", value: "Non-Admin" },
        ],
    },
    {
        type: "email",
        name: "email",
        label: "Email*",
        placeholder: "Email Baru",
        addClass: null,
        defaultValue: null,
        disabled: false,
        isDropdown: false,
        isPassword: false,
    },
    {
        type: "text",
        name: "name",
        label: "Nama Lengkap*",
        placeholder: "Nama Pengguna Baru",
        addClass: null,
        defaultValue: null,
        disabled: false,
        isDropdown: false,
        isPassword: false,
    },
    {
        type: "password",
        name: "password",
        label: "Password*",
        placeholder: "Masukkan Password",
        addClass: null,
        defaultValue: null,
        disabled: false,
        isDropdown: false,
        isPassword: true,
    },
    {
        type: "password",
        name: "passwordConfirm",
        label: "Konfirmasi Password",
        placeholder: "Masukkan Password",
        addClass: null,
        defaultValue: null,
        disabled: false,
        isDropdown: false,
        isPassword: true,
    },
];

function fieldMap({ user }) {
    return [
        {
            type: "text",
            name: "status",
            label: "Status",
            placeholder: null,
            addClass: "bg-gray-200/50",
            defaultValue: (user.is_admin || ADMIN_MODE) ? "Admin" : "Non-Admin",
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
            name: "password_confirmation",
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
    adminDashboardFieldMap as adminAddUserMap,
    loginFieldMap,
}