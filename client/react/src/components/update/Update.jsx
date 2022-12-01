import "./update.scss"
import { useQuery,  useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";

const Update = ({setOpenUpdate, user}) => {
    const { currentUser } = useContext(AuthContext);

    const [cover, setCover] = useState(null)
    const [profile, setProfile] = useState(null) //Hình thì như này
    const [texts, setTexts] = useState({ //text thì như này
        email: user.email,
        password: user.password,    
        name: "",
        city: "",
        website: "",
    })

    const upload = async (file) => { //Cập nhật profile
        try {
            const formData = new FormData();
            formData.append("file", file);
            const res = await makeRequest.post("/upload", formData);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    const handleChange = (e) => {
        setTexts((prev) => ({...prev, [e.target.name]: [e.target.value]}))
    }

    const queryClient = useQueryClient();

    const mutation = useMutation(
        (user) => {
        return makeRequest.put("/users", user);
        },
        {
        onSuccess: () => {
            queryClient.invalidateQueries("[user]");
        },
        }
    );

  const handleClick = async (e) => {
    e.preventDefault();
    let coverUrl;
    let profileUrl;

    coverUrl = cover ? await upload(cover) : user.coverPic;
    profileUrl = profile ? await upload(profile) : user.profilePic;

    mutation.mutate({ ...texts, coverPic:coverUrl, profilePic:profileUrl});
    setOpenUpdate(false)
    setCover(null)
    setProfile(null)
  };
    return (
        <div className="update">
            Chỉnh sửa thông tin
            <form action="">
                
                <div className="form-group">
                    <label for="">Ảnh bìa: </label>
                    <input type="file" onChange={(e)=>setCover(e.target.files[0])} />
                </div>

                <div className="form-group">
                    <label for="">Ảnh đại diện: </label>
                    <input type="file" onChange={(e)=>setProfile(e.target.files[0])}/>
                </div>

                <div className="form-group">
                    <label for="">Họ tên: </label>
                    <input type="text" name="name" onChange={handleChange} placeholder={currentUser.name} />
                </div>

                <div className="form-group">
                    <label for="">Email: </label>
                    <input type="text" name="name" onChange={handleChange} placeholder={currentUser.email} />
                </div>

                <div className="form-group">
                    <label for="">Quê quán: </label>
                    <input type="text" name="city" onChange={handleChange} placeholder={currentUser.city}/>
                </div>

                <div className="form-group">
                    <label for="">Website: </label>
                    <input type="text" name="website" onChange={handleChange} placeholder={currentUser.website}/>
                </div>
                
                <button className="btn-update" onClick={handleClick}>Cập nhật</button>
 
            </form>
            <button className="btn-delete" onClick={handleClick}>X</button>
   
        </div>
    )
}

export default Update