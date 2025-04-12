import {
    PiPencilLineThin,
    profileFieldMap,
    FormInputComponent,
} from "../../../components/barrel_module/Barrel.jsx";

function NoAdminProfileMenu( { user } ) {

    // const { user } = useAuth();
    // const { data: userData, isLoading } = useGetUserQuery(user?.id);
    // const { data: userProfileData, isLoading: isLoadingUserProfile } = useGetUserProfileQuery(user?.id);
    // const { data: userProfileImageData, isLoading: isLoadingUserProfileImage } = useGetUserProfileImageQuery(user?.id);
    // const { data: userProfileImage, isLoading: isLoadingUserProfileImageData } = useGetUserProfileImageDataQuery(user?.id);

    const fieldMap = profileFieldMap({ user });

    return (
        <>
            <div className="flex flex-col gap-5">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-3xl font-bold">Profile</h1>
                </div>
                <div className="flex flex-row gap-10">
                    <div className="flex flex-col h-fit justify-start items-start gap-3 bg-gray-300/30 py-5 px-5 min-w-[15rem] rounded-xl">
                        <div className="relative flex flex-col items-center justify-center">    
                            <img src={user.imageUrl} alt="" className="w-24 h-24 object-cover rounded-full border border-gray-300 bg-gray-500/20"/>
                            <button 
                                type="button"
                                onClick={() => console.log("Edit profile picture")} // ! CHANGE THIS WITH FUNCTION
                                className="absolute bottom-0 -right-1 w-3/7 h-3/7 bg-white shadow-md text-white text-sm py-2 px-2 rounded-full hover:bg-gray-100/80 flex items-center justify-center">
                                <PiPencilLineThin className="text-black text-2xl"/>
                            </button>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-700">
                            {user.name}
                        </h3>
                        <p className="text-gray-500 text-md truncate overflow-hidden text-ellipsis">
                            {user.email}
                        </p>
                    </div>
                    <form 
                        onSubmit={(e) => {
                            e.preventDefault();
                            console.log("Form submitted");
                            // ! CHANGE THIS WITH SAVE FUNCTION
                        }} 
                        method="POST" 
                        className="flex flex-auto flex-col gap-6"
                        encType="multipart/form-data">
                            
                        {fieldMap.map((field, index) => (
                            <FormInputComponent field={field} key={index} />
                        ))}
                        <div className="flex flex-row gap-5 justify-end">
                            <button type="button" className="text-gray-700 font-medium px-8 py-2 rounded-xl border border-gray-300 hover:bg-gray-100/80">
                                Batal
                            </button>
                            <button type="submit" className="bg-blue-600 text-white font-medium px-8 py-2 rounded-xl">
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default NoAdminProfileMenu;