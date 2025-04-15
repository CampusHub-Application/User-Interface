import { ADMIN_MODE } from "./barrel_module/Barrel";

const dashboardHeaderPadding = "pt-10 px-5"

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
        name: "is_admin",
        label: "Status",
        placeholder: null,
        addClass: null,
        defaultValue: 1,
        disabled: false,
        isDropdown: true,
        isPassword: false,
        dropdownOptions: [
            { label: "Admin", value: 1 },
            { label: "Non-Admin", value: 0 },
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
        name: "password_confirmation",
        label: "Konfirmasi Password",
        placeholder: "Masukkan Password",
        addClass: null,
        defaultValue: null,
        disabled: false,
        isDropdown: false,
        isPassword: true,
    },
];

function adminEditDashboardFieldMap({ user }) {
    return [
        {
            type: "text",
            name: "is_admin",
            label: "Status",
            placeholder: null,
            addClass: null,
            defaultValue: user.is_admin,
            disabled: false,
            isDropdown: true,
            isPassword: false,
            dropdownOptions: [
                { label: "Admin", value: 1 },
                { label: "Non-Admin", value: 0 },
            ],
        },
        {
            type: "email",
            name: "email",
            label: "Email*",
            placeholder: "Email Baru",
            addClass: null,
            defaultValue: user.email,
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
            defaultValue: user.name,
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
            defaultValue: user.password,
            disabled: false,
            isDropdown: false,
            isPassword: true,
        },
        {
            type: "password",
            name: "password_confirmation",
            label: "Konfirmasi Password",
            placeholder: "Masukkan Password",
            addClass: null,
            defaultValue: null,
            disabled: false,
            isDropdown: false,
            isPassword: true,
        },
    ];
}

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
    adminEditDashboardFieldMap as adminEditUserMap,
    loginFieldMap,
}